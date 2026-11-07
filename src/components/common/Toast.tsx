import { useEffect, useRef } from "react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

type ToastProps = {
    open: boolean;
    message: string;
    onClose: () => void;
    variant?: "success" | "error";
    duration?: number; // ms before it closes itself
};

export default function Toast({
    open,
    message,
    onClose,
    variant = "success",
    duration = 4000,
}: ToastProps) {
    // Keep the latest onClose in a ref so re-renders don't reset the timer
    const onCloseRef = useRef(onClose);
    useEffect(() => {
        onCloseRef.current = onClose;
    }, [onClose]);

    useEffect(() => {
        if (!open) return;
        const timer = setTimeout(() => onCloseRef.current(), duration);
        return () => clearTimeout(timer);
    }, [open, duration]);

    const isError = variant === "error";
    const Icon = isError ? AlertCircle : CheckCircle2;

    return (
        <div
        role="status"
        aria-live="polite"
        aria-hidden={!open}
        className={`fixed bottom-5 left-1/2 z-[60] w-[calc(100%-2.5rem)] max-w-sm -translate-x-1/2 transition-all duration-300 motion-reduce:transition-none md:bottom-8 md:left-auto md:right-8 md:translate-x-0 ${
            open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        >
        <div
            className={`flex items-start gap-3 rounded-2xl border bg-white p-4 shadow-lg ${
            isError ? "border-[#EA4335]/40" : "border-[#34A853]/40"
            }`}
        >
            <Icon
            size={22}
            className={`mt-0.5 shrink-0 ${isError ? "text-[#EA4335]" : "text-[#34A853]"}`}
            />
            <p className="flex-1 font-googleSans text-sm leading-[1.55em] text-[#242424]">
            {message}
            </p>
            <button
            type="button"
            onClick={onClose}
            aria-label="Dismiss notification"
            tabIndex={open ? 0 : -1}
            className="shrink-0 rounded-md p-0.5 text-[#5F6368] transition-colors hover:bg-[#F1F3F4]"
            >
            <X size={18} />
            </button>
        </div>
        </div>
    );
}