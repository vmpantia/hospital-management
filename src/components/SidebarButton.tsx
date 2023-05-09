import { UsersIcon } from '@heroicons/react/24/solid'
import React from 'react'

type Props = {
    text:string;
}

const SidebarButton = (props:Props) => {
    const {text} = props;
  return (
    <a className='flex p-1 pl-3 mb-1 rounded hover:bg-slate-600'>
        <UsersIcon className='h-4 w-4 mr-4 mt-1'/>
        {text}
    </a>
  )
}

export default SidebarButton