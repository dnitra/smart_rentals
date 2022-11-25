import React from "react";

function InputForm({
    className,
    type,
    placeholder,
    name,
    value,
    handleChange,
    errors
}) {
    return (
        <>
            <input
                className={className}
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={handleChange}
                required
            />
            {errors ? errors.map(error => {
                return (<div className="errors">{error}</div>)
            }): ""}
        </>
        
    );
}

export default InputForm;
