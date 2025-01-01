import { useEffect, useState } from "react";

interface ToastProps {
    title: string;
    body: string;
    duration?: number;
    onClose: () => void;
}

export default function ErrorToast({ title, body, duration = 5000, onClose }: ToastProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [timer, setTimer] = useState<any>(null);
    useEffect(() => {
        if (!isHovered) {
            const timeout = setTimeout(onClose, duration);
            setTimer(timeout);
        } else if (timer) {
            clearTimeout(timer);
            setTimer(null);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [isHovered, onClose, duration, timer]);

    return (
        <div
            className="absolute z-[1000] top-5 end-10 flex items-center p-4 rounded-lg shadow-md w-96 hover:cursor-pointer toast-error-bg overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src="/icons/redLines.svg" alt="lines" className="absolute top-0 start-0 h-full" />
            <div className="flex items-center relative justify-center w-12 h-12 bg-red-100 rounded-full">
                <img src="/icons/warning.svg" alt="Error" className="w-6 h-6" />
            </div>
            <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
                <p className="text-sm text-gray-600">{body}</p>
            </div>
            <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
                ✕
            </button>
        </div>
    );
};

