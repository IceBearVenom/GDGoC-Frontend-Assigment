import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export function useValidatedParam<T extends string>(
    key: string,
    allowed: readonly T[],
    fallback: T
): T {
    const [params, setParams] = useSearchParams();
    const raw = params.get(key);
    const value = (allowed as readonly string[]).includes(raw ?? "") ? (raw as T) : fallback;

    // Invalid value in the URL: remove it so the address bar matches what's shown
    useEffect(() => {
        if (raw !== null && raw !== value) {
        const next = new URLSearchParams(params);
        next.delete(key);
        setParams(next, { replace: true }); // replace: Back button doesn't return to the bad URL
        }
    }, [raw, value, key, params, setParams]);

    return value;
}