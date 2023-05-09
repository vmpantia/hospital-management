
type Props = {
    name:string;
    label:string;
    value:any;
    disabled?:boolean;
    required?:boolean;
    datasource:string[];
}

const ComboBox = (props:Props) => {
    const{name, label, value, disabled, required, datasource} = props;
    return (
        <div>
            <label className="w-full font-medium text-xs" htmlFor={name}>
                {required && 
                    <span className="text-red-600 font-bold mr-1">*</span>
                }
                {label}:
            </label>
            <select className="w-full px-2 py-1 mt-1 text-sm border rounded bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 disabled:bg-gray-200" 
                   name={name} 
                   value={value} 
                   disabled={disabled}>
                    {datasource.map(data => (
                        <option value={data}>{data}</option>
                    ))}
            </select>
        </div>
    );
}

export default ComboBox;