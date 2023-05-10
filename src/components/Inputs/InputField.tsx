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
    const{type, name, label, value, disabled, required, datasource, onValueChangedHandler} = props;
    return (
        <div>
            <label className="w-full font-medium text-xs" htmlFor={name}>
                {required && 
                    <span className="text-red-600 font-bold mr-1">*</span>
                }
                {label}:
            </label>
            {type === "select" ?
                <select className="w-full px-2 py-1 mt-1 text-sm border rounded bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 disabled:bg-gray-200" 
                        name={name} 
                        value={value} 
                        disabled={disabled}
                        onChange={(e) => onValueChangedHandler(e)}>
                            <option value="" key="">Select</option>
                            {datasource?.map(data => (
                                <option value={data} key={data}>{data}</option>
                            ))}
                </select>
                :
                <input className="w-full px-2 py-1 mt-1 text-sm border rounded bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 disabled:bg-gray-200" 
                        type={type}
                        name={name} 
                        value={value} 
                        disabled={disabled}
                        onChange={(e) => onValueChangedHandler(e)}>
                </input>    
            }
        </div>
    );
}

export default InputField;