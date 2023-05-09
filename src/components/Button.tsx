import { AdjustmentsVerticalIcon, MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/solid";

type Props = {
    text:string;
    type:string;
    icon:string;
}
const Button = (props:Props) => {
    const {text, type, icon} = props;

    let styleBtn = "flex px-2.5 py-1.5 text-xs font-medium rounded ";
    let styleIcn = "h-4 w-4 mr-2";
    switch(type) {
        case "primary":
            styleBtn += "text-white bg-blue-600 hover:bg-blue-700";
            break;
        case "secondary":
            styleBtn += "text-white bg-slate-600 hover:bg-slate-700";
            break;
        case "success":
            styleBtn += "text-white bg-emerald-600 hover:bg-emerald-700";
            break;
        case "danger":
                styleBtn += "text-white bg-red-600 hover:bg-red-700";
                break;
        case "warning":
                styleBtn += "text-white bg-amber-600 hover:bg-amber-700";
                break;
        case "dark":
                styleBtn += "text-white bg-zinc-800 hover:bg-zinc-900";
                break;
        default:
            styleBtn += "bg-gray-200 hover:bg-slate-300";
            break;
    }

    return (
        <button className={styleBtn}>
            {{  "plus" : <PlusIcon className={styleIcn} />,
                "search" : <MagnifyingGlassIcon className={styleIcn} />,
                "filter" : <AdjustmentsVerticalIcon className={styleIcn} />
            }[icon]}
            {text}
        </button>
    );
}

export default Button