import { useRef, useState } from "react";

/**
 * Use blink to set value and reset it after some time automatically.
 * @param defaultValue
 */
export function useBlink<T >(defaultValue: T | null = null) {
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const [value, setValue] = useState<T | null>(defaultValue);

    const blink = (blinkValue: T, delay: number = 5000, overwriteDefaultValue?: T) => {
        // Clear previous timer
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        // Set value
        setValue(blinkValue);

        // Reset value after delay
        timerRef.current = setTimeout(() => {
            setValue(overwriteDefaultValue ?? defaultValue);
        }, delay);
    }

    return {
        value,
        blink,
        setValue
    }
}
