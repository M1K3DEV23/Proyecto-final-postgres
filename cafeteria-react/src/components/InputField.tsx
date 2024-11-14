import React, { FC } from "react";

interface InputFieldProps {
    id: string;
    label: string
    type?: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    required?: boolean
}


const InputField: FC<InputFieldProps> = ({
    id,
    label,
    type = "text",
    value,
    onChange,
    required = false,
}) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
    </div>
)

export default InputField