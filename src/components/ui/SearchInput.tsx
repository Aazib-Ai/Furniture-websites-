import React from 'react';
import { Search } from 'lucide-react';
import Input from './Input';
import type { InputProps } from './Input';

export interface SearchInputProps extends Omit<InputProps, 'type' | 'leftIcon'> {}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ placeholder = 'Search...', ...props }, ref) => {
    return (
      <Input
        ref={ref}
        type="search"
        leftIcon={<Search className="h-4 w-4 text-neutral-400" />}
        placeholder={placeholder}
        {...props}
      />
    );
  }
);

SearchInput.displayName = 'SearchInput';

export default SearchInput;