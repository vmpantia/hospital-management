import { UsersIcon } from "@heroicons/react/24/solid";

type Props = {
    value:string;
    description:string;
}
const Title = (props:Props) => {
    const {value, description} = props;
  return (
    <div className="bg-white inline-flex p-3 mb-3 rounded w-full">
        {{  "Patient" : <UsersIcon className="h-7 w-7 mr-3 mt-2" />,
            "Doctor" : <UsersIcon className="h-7 w-7 mr-3 mt-2" />,
            "Nurse" : <UsersIcon  className="h-7 w-7 mr-3 mt-2" />,
        }[value]}
        <div>
            <p className="text-md font-bold">{value}</p>
            <p className="text-xs">{description}</p>
        </div>
    </div>
  )
}

export default Title