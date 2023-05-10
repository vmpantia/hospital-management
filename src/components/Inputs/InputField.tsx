import { useState } from "react";

type Props = {
    type:string;
    name:string;
    label:string;
    value:any;
    disabled?:boolean;
    required?:boolean;
    datasource?:string[];
    onValueChangedHandler: (e:any) => void;
}

const InputField = (props:Props) => {
    let normalStyle = "w-full px-2 py-1 mt-1 text-sm border rounded bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 disabled:bg-gray-200";
    let errorStyle =  "w-full px-2 py-1 mt-1 text-sm border rounded bg-gray-50 border-red-600 focus:outline-none focus:ring-red-300 focus:ring-1"

    const{type, name, label, value, disabled, required, datasource, onValueChangedHandler} = props;
    const [errorMessage, setErrorMessage] = useState("");
    const [inputStyle, setInputStyle] = useState(normalStyle);

    const ValidateField = (e:any) => {
        if(required && (e.target.value === "" || e.target.value === undefined)) {
            setErrorMessage(`The ${label.toLocaleLowerCase()} field is required.`); 
            setInputStyle(errorStyle);
        }
        else  {
            setErrorMessage(""); 
            setInputStyle(normalStyle);
        }
    }

    return (
        <div>
            <label className="w-full font-medium text-xs" htmlFor={name}>
                {required && 
                    <span className="text-red-600 font-bold mr-1">*</span>
                }
                {label}:
            </label>
            {type === "select" ?
                <select className={inputStyle} 
                        name={name} 
                        value={value} 
                        disabled={disabled}
                        onKeyDown={(e) => ValidateField(e)}
                        onChange={(e) => onValueChangedHandler(e)}>
                            <option value="" key="">Select</option>
                            {datasource?.map(data => (
                                <option value={data} key={data}>{data}</option>
                            ))}
                </select>
                :
                <input className={inputStyle} 
                        type={type}
                        name={name} 
                        value={value} 
                        disabled={disabled}
                        onKeyDown={(e) => ValidateField(e)}
                        onChange={(e) => onValueChangedHandler(e)}>
                </input>    
            }
            { errorMessage !== "" &&
                <p className="text-red-600 text-xs float-right mt-1 font-medium">{errorMessage}</p>
            }
        </div>
    );
}

export default InputField;