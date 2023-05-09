import React from 'react'
type Props = {
    name:string;
    label:string;
    value:any;
    disabled?:boolean;
    required?:boolean;
}

const TextBox = (props:Props) => {
    const{name, label, value, disabled, required} = props;
    return (
        <div className=''>
            <label className="w-full font-medium text-xs" htmlFor={name}>
                {required && 
                    <span className="text-red-600 font-bold mr-1">*</span>
                }
                {label}:
            </label>
            <input className="w-full px-2 py-1 mt-1 text-sm border rounded bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 disabled:bg-gray-200" 
                   type="text"
                   name={name} 
                   value={value} 
                   disabled={disabled}></input>
        </div>
    );
}

export default TextBox