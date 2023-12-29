import type { FormEvent } from 'react';

export default function preventDefault(event: FormEvent) {
    event.preventDefault();
}
