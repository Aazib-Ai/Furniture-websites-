import React from 'react';
import { Mail } from 'lucide-react';
import Input from './Input';
import type { InputProps } from './Input';

export interface EmailInputProps extends Omit<InputProps, 'type'> {}

const EmailInput = React.forwardRef<HTMLInputElement, EmailInputProps>(
  ({ placeholder = 'Enter your email', ...props }, ref) => {
    return (
      <Input
        ref={ref}
        type="email"
        leftIcon={<Mail className="h-4 w-4 text-neutral-400" />}
        placeholder={placeholder}
        {...props}
      />
    );
  }
);

EmailInput.displayName = 'EmailInput';

export default EmailInput;