type Props = {
    value:number;
    description:string;
}
const StatusBadge = (props:Props) => {
    const {value, description} = props;
    let style = "px-1.5 py-0.5 text-[11px] text-white rounded ";
    switch(value){
        case 0:
            style += "bg-emerald-600";
            break;
        case 1:
            style += "bg-red-600";
            break;
        default:
            style += "bg-slate-600";
            break;
    }            
    return (
        <span className={style}>{description}</span>
    );
}
export default StatusBadge;