type Props = {
    value:number;
    description:string;
}
const TypeBadge = (props:Props) => {
    const {value, description} = props;
    let style = "px-1.5 py-0.5 text-[11px] text-white rounded ";
    switch(value){
        case 0:
            style += "bg-blue-600";
            break;
        case 1:
            style += "bg-slate-600";
            break;
    }            
    return (
        <span className={style}>{description}</span>
    );
}
export default TypeBadge;