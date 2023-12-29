import type { Control, FieldPath, FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';

interface Props<T extends FieldValues> {
    id: string;
    type?: string;
    control: Control<T>;
    name: string;
    placeholder?: string;
    required?: boolean;
    className?: string;
    autoComplete?: string;
    autoFocus?: boolean;
}

export default function Input<T extends FieldValues>({
    id,
    type,
    name,
    control,
    placeholder,
    required,
    className,
    autoComplete,
    autoFocus,
}: Props<T>) {
    return (
        <Controller
            control={control}
            name={name as FieldPath<T>}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <div className="w-full">
                    <input
                        id={id}
                        type={type || 'text'}
                        autoComplete={autoComplete}
                        name={name}
                        value={value || ''}
                        className={`${className} ${error ? 'ring-2 ring-inset !ring-red-600' : ''}`}
                        onChange={onChange}
                        required={required}
                        placeholder={placeholder}
                        spellCheck="false"
                        autoFocus={autoFocus}
                    ></input>
                    {error && (
                        <p className="mt-2 text-xs font-semibold text-red-600" role="alert" aria-live="assertive">
                            {error.message}
                        </p>
                    )}
                </div>
            )}
        />
    );
}
