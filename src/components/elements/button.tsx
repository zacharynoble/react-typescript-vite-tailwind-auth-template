import type { ReactNode } from 'react';
import { useState } from 'react';

interface Props {
    onClick: () => void;
    children?: ReactNode;
    className?: string;
    type?: 'button' | 'submit';
}

export default function Button({ onClick, children, className, type }: Props) {
    const [disabled, setDisabled] = useState(false);

    const overload = () => {
        setDisabled(true);
        onClick();
        setTimeout(() => setDisabled(false), 500);
    };

    return (
        <button type={type} className={className} onClick={overload} disabled={disabled}>
            {children}
        </button>
    );
}
