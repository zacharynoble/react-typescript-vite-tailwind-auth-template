import type { Control, FieldValues } from 'react-hook-form';

import Input from './input';

interface Props<T extends FieldValues> {
    type?: string;
    control: Control<T>;
    name: string;
    placeholder?: string;
    required?: boolean;
    autoComplete?: string;
    autoFocus?: boolean;
}

export default function LabeledInput<T extends FieldValues>({
    type,
    name,
    control,
    placeholder,
    required,
    autoComplete,
    autoFocus,
}: Props<T>) {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
                {name}
            </label>
            <div className="mt-2">
                <Input
                    id={name}
                    type={type || 'text'}
                    name={name}
                    control={control}
                    placeholder={placeholder}
                    required={required}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                />
            </div>
        </div>
    );
}
