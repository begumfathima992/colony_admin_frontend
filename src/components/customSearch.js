import { useState, useEffect } from "react";
import { FiSearch, FiX } from "react-icons/fi";



const CustomSearch = ({
    value,
    onChange,
    placeholder = "Search...",
    className = "",
    autoFocus = false,
    debounceMs = 300,
}) => {
    const [inputValue, setInputValue] = useState(value || "");

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (onChange) onChange(inputValue);
        }, debounceMs);
        return () => clearTimeout(timeout);
    }, [inputValue, onChange, debounceMs]);

    useEffect(() => {
        setInputValue(value || "");
    }, [value]);

    const clearInput = () => {
        setInputValue("");
        if (onChange) onChange("");
    };

    return (
        <div
            className={`relative w-full max-w-md text-sm text-gray-800 ${className}`}
        >
            <input
                type="text"
                autoFocus={autoFocus}
                className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-0 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" size={18} />
            {inputValue && (
                <div
                    className="absolute cursor-pointer right-3 top-3 text-gray-400 hover:text-red-500"
                    onClick={clearInput}
                >
                    <FiX size={18} />
                </div>
            )}
        </div>
    );
};

export default CustomSearch;
