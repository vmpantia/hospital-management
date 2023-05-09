import { UserGroupIcon, UsersIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
    text:string;
    link:string;
}

const SidebarButton = (props:Props) => {
    const {text, link} = props;
  return (
    <Link to={link} className='flex p-2 pl-3 mb-1 text-sm rounded hover:bg-zinc-700'>
        <UserGroupIcon className='h-4 w-4 mr-4 mt-0.5'/>
        {text}
    </Link>
  )
}

export default SidebarButton