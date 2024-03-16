import type { FieldError, UseFormRegister } from 'react-hook-form';

interface Props {
    register: UseFormRegister<any>;
    error?: FieldError;
    name: string;
    className?: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    autoComplete?: string;
    autoFocus?: boolean;
    spellCheck?: boolean;
}

export const Input = ({
    register,
    error,
    name,
    className,
    placeholder,
    required,
    autoComplete,
    autoFocus,
    type = 'text',
    spellCheck = false,
}: Props) => {
    return (
        <div className="w-full">
            <input
                {...register(name)}
                id={name}
                name={name}
                type={type}
                required={required}
                autoComplete={autoComplete}
                placeholder={placeholder}
                autoFocus={autoFocus}
                spellCheck={spellCheck}
                className={`${className} ${error ? 'ring-2 ring-inset !ring-red-600' : ''}`}
            ></input>
            {error && (
                <p className="mt-2 text-xs font-semibold text-red-600" role="alert" aria-live="assertive">
                    {error.message}
                </p>
            )}
        </div>
    );
};
