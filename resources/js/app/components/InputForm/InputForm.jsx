import React from "react";

function InputForm({
    className,
    type,
    placeholder,
    name,
    value,
    handleChange,
}) {
    return (
        <input
            className={className}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handleChange}
            required
        />
    );
}

export default InputForm;
