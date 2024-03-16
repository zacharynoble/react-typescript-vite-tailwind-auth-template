interface Props {
    onClick: () => void;
}

export const PaymentButton = ({ onClick }: Props) => {
    return <button onClick={onClick}>This is an example component</button>;
};
