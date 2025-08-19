import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/helpers/cn';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onClear?: () => void;
  value?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal' | 'borderless';
  showClear?: boolean;
  autoFocus?: boolean;
  debounceMs?: number;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search products...',
  onSearch,
  onClear,
  value: controlledValue,
  className,
  size = 'md',
  variant = 'default',
  showClear = true,
  autoFocus = false,
  debounceMs = 300,
  onKeyDown,
  onFocus,
  onBlur,
}) => {
  const [internalValue, setInternalValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const value = controlledValue ?? internalValue;

  useEffect(() => {
    if (onSearch) {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      debounceRef.current = setTimeout(() => {
        onSearch(value);
      }, debounceMs);
    }

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [value, onSearch, debounceMs]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onSearch?.(newValue);
  };

  const handleClear = () => {
    if (controlledValue === undefined) {
      setInternalValue('');
    }
    onClear?.();
    onSearch?.('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      handleClear();
      inputRef.current?.blur();
    }
    onKeyDown?.(e);
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const sizeClasses = {
    sm: 'h-9 text-sm',
    md: 'h-10 text-base',
    lg: 'h-12 text-lg',
  };

  const variantClasses = {
    default: 'border border-gray-300 bg-white focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20',
    minimal: 'border-b border-gray-300 bg-transparent focus-within:border-primary',
    borderless: 'border-0 bg-gray-100 focus-within:bg-gray-200',
  };

  return (
    <div
      className={cn(
        'relative flex items-center transition-all duration-200 rounded-lg',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <div className="absolute left-3 flex items-center pointer-events-none">
        <Search className={cn(
          'w-4 h-4 transition-colors',
          isFocused ? 'text-primary' : 'text-gray-400'
        )} />
      </div>

      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className={cn(
          'w-full pl-10 pr-10 bg-transparent outline-none placeholder-gray-500',
          size === 'sm' ? 'pr-8' : 'pr-10'
        )}
      />

      <AnimatePresence>
        {showClear && value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            onClick={handleClear}
            className={cn(
              'absolute right-3 p-1 text-gray-400 hover:text-gray-600 transition-colors',
              size === 'sm' && 'right-2'
            )}
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

// Extended search bar with suggestions
interface SearchBarWithSuggestionsProps extends SearchBarProps {
  suggestions?: string[];
  onSuggestionClick?: (suggestion: string) => void;
  maxSuggestions?: number;
}

export const SearchBarWithSuggestions: React.FC<SearchBarWithSuggestionsProps> = ({
  suggestions = [],
  onSuggestionClick,
  maxSuggestions = 5,
  ...props
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const filteredSuggestions = suggestions
    .filter(suggestion =>
      suggestion.toLowerCase().includes(props.value?.toLowerCase() || '')
    )
    .slice(0, maxSuggestions);

  const handleSuggestionClick = (suggestion: string) => {
    onSuggestionClick?.(suggestion);
    setShowSuggestions(false);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev =>
        prev < filteredSuggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      handleSuggestionClick(filteredSuggestions[selectedIndex]);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }
  };

  return (
    <div className="relative">
      <SearchBar
        {...props}
        onKeyDown={handleKeyDown}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => {
          setTimeout(() => setShowSuggestions(false), 200);
        }}
      />
      
      <AnimatePresence>
        {showSuggestions && filteredSuggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
          >
            {filteredSuggestions.map((suggestion, index) => (
              <button
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                className={cn(
                  'w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors',
                  index === selectedIndex && 'bg-gray-50'
                )}
              >
                {suggestion}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;