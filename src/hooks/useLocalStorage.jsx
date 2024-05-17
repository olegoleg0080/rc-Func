import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValues) => {
    const [state, setState] = useState(defaultValues);
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);
    return [state, setState];
};

export const useLocalStorageTheme = (key, defaultValues) => {
    const [value, setState] = useState(() => {
        return JSON.parse(localStorage.getItem(key)) || defaultValues;
    });
    useEffect(() => {
        if (value) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [value, key]);
    return [value, setState];
};
