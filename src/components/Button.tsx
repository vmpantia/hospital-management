import { AdjustmentsVerticalIcon, MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/solid";

type Props = {
    text:string;
    type:string;
    icon:string;
    disabled?:boolean;
    onClickedHandler: () => void;
}
const Button = (props:Props) => {
    const {text, type, disabled, icon, onClickedHandler} = props;

    let styleBtn = "flex px-2.5 py-1.5 text-xs font-medium rounded focus:outline-0 ";
    let styleIcn = "h-4 w-4 mr-2";
    switch(type) {
        case "primary":
            styleBtn += "text-white bg-blue-600 enabled:hover:bg-blue-700 focus:bg-blue-700 disabled:bg-blue-500 ";
            break;
        case "secondary":
            styleBtn += "text-white bg-slate-600 enabled:hover:bg-slate-700 focus:bg-slate-700 disabled:bg-slate-500 ";
            break;
        case "success":
            styleBtn += "text-white bg-emerald-600 enabled:hover:bg-emerald-700 focus:bg-emerald-700 disabled:bg-emerald-500";
            break;
        case "danger":
                styleBtn += "text-white bg-red-600 enabled:hover:bg-red-700 focus:bg-red-700 disabled:bg-red-500";
                break;
        case "warning":
                styleBtn += "text-white bg-amber-600 enabled:hover:bg-amber-700 focus:bg-amber-700 disabled:bg-amber-500";
                break;
        case "dark":
                styleBtn += "text-white bg-zinc-800 enabled:hover:bg-zinc-900 focus:bg-zinc-900 disabled:bg-zinc-500";
                break;
        default:
            styleBtn += "bg-gray-200 enabled:hover:bg-gray-300 focus:bg-gray-300 disabled:bg-gray-100";
            break;
    }

    return (
        <button className={styleBtn} disabled={disabled} onClick={onClickedHandler}>
            {{  "plus" : <PlusIcon className={styleIcn} />,
                "search" : <MagnifyingGlassIcon className={styleIcn} />,
                "filter" : <AdjustmentsVerticalIcon className={styleIcn} />
            }[icon]}
            {text}
        </button>
    );
}

export default Button;