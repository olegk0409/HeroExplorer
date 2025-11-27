import { useCallback, useRef } from "react";

export function useDebounceCallback<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
) {
  const timer = useRef<number>(null);

  const debouncedFn = useCallback(
    (...args: Parameters<T>) => {
      if (timer.current) clearTimeout(timer.current);

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedFn;
}