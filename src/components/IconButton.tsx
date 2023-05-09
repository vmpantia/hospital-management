import { AdjustmentsVerticalIcon, ArrowDownIcon, ArrowUpIcon, MagnifyingGlassIcon, PencilSquareIcon, PlusIcon, TrashIcon, ViewfinderCircleIcon } from "@heroicons/react/24/solid";

type Props = {
    text:string;
    type:string;
    icon:string;
    disabled?:boolean;
}
const IconButton = (props:Props) => {
    const {text, type, disabled, icon} = props;
    let styleBtn = "p-0.5 text-xs font-medium rounded focus:outline-0 border ";
    let styleIcn = "h-4 w-4";
    switch(type) {
        case "primary":
            styleBtn += "text-blue-600 border-blue-600 " +
                        "enabled:hover:bg-blue-700 enabled:hover:text-white " + 
                        "focus:bg-blue-700 focus:text-white " +
                        "disabled:bg-blue-500 disabled:text-white";
            break;
        case "secondary":
            styleBtn += "text-slate-600 border-slate-600 " +
                        "enabled:hover:bg-slate-700 enabled:hover:text-white " + 
                        "focus:bg-slate-700 focus:text-white " +
                        "disabled:bg-slate-500 disabled:text-white";
            break;
        case "success":
            styleBtn += "text-emerald-600 border-emerald-600 " +
                        "enabled:hover:bg-emerald-700 enabled:hover:text-white " + 
                        "focus:bg-emerald-700 focus:text-white " +
                        "disabled:bg-emerald-500 disabled:text-white";
            break;
        case "danger":
            styleBtn += "text-red-600 border-red-600 " +
                        "enabled:hover:bg-red-700 enabled:hover:text-white " + 
                        "focus:bg-red-700 focus:text-white " +
                        "disabled:bg-red-500 disabled:text-white";
            break;
        case "warning":
            styleBtn += "text-amber-600 border-amber-600 " +
                        "enabled:hover:bg-amber-700 enabled:hover:text-white " + 
                        "focus:bg-amber-700 focus:text-white " +
                        "disabled:bg-amber-500 disabled:text-white";
            break;
        case "dark":
            styleBtn += "text-zinc-800 border-zinc-800 " +
                        "enabled:hover:bg-zinc-900 enabled:hover:text-white " + 
                        "focus:bg-zinc-900 focus:text-white " +
                        "disabled:bg-zinc-500 disabled:text-white";
            break;
        default:
            styleBtn += "text-gray-200 border-gray-200 " +
                        "enabled:hover:bg-gray-300 enabled:hover:text-white " + 
                        "focus:bg-gray-300 focus:text-white " +
                        "disabled:bg-gray-100 disabled:text-white";
            break;
    }

  return (
    <button className={styleBtn} title={text} disabled={disabled}>
        {{  "plus" : <PlusIcon className={styleIcn} />,
            "search" : <MagnifyingGlassIcon className={styleIcn} />,
            "filter" : <AdjustmentsVerticalIcon className={styleIcn} />,
            "edit" : <PencilSquareIcon className={styleIcn} />,
            "view" : <ViewfinderCircleIcon className={styleIcn} />,
            "enable" : <ArrowUpIcon className={styleIcn} />,
            "disable" : <ArrowDownIcon className={styleIcn} />,
            "delete" : <TrashIcon className={styleIcn} />,
        }[icon]}
    </button>
  )
}

export default IconButton;