import type { FormEvent } from 'react';

export const preventDefault = (event: FormEvent) => {
    event.preventDefault();
};
