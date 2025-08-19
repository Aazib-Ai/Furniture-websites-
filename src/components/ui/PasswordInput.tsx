import React, { useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';
import Input from './Input';
import type { InputProps } from './Input';

export interface PasswordInputProps extends Omit<InputProps, 'type' | 'rightIcon'> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ placeholder = 'Enter your password', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <Input
        ref={ref}
        type={showPassword ? 'text' : 'password'}
        leftIcon={<Lock className="h-4 w-4 text-neutral-400" />}
        rightIcon={
          <button
            type="button"
            className="text-neutral-400 hover:text-neutral-600 focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        }
        placeholder={placeholder}
        {...props}
      />
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;