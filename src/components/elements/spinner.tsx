import { FadeLoader } from 'react-spinners';

export default function Loading() {
    return (
        <div className="flex items-center justify-center w-full h-full mt-[-100px]">
            <FadeLoader speedMultiplier={3} width={3} height={15} color="blue" />
        </div>
    );
}
