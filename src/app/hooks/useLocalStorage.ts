import { useState } from "react";

const useLocalStorage = <T>(key: string, value: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window !== "undefined") {
        const item = localStorage?.getItem(key);

        return item ? JSON.parse(item) : value;
      } else {
        return value;
      }
    } catch (error) {
      return value;
    }
  });

  const setValue = (value: T | ((_prevValue: T) => T)) => {
    try {
      if (typeof value === "function") {
        setStoredValue((prevValue) => {
          const newValue = (value as (_prevValue: T) => T)(prevValue);
          if (newValue !== null && newValue !== undefined) {
            localStorage?.setItem(key, JSON.stringify(newValue));
          } else {
            localStorage.removeItem(key);
          }

          return newValue;
        });
      } else {
        setStoredValue(value);
        if (value !== null && value !== undefined) {
          localStorage?.setItem(key, JSON.stringify(value));
        } else {
          localStorage?.removeItem(key);
        }
      }
      // eslint-disable-next-line no-empty
    } catch (error) {}
  };

  return [storedValue, setValue] as const;
};

export default useLocalStorage;
