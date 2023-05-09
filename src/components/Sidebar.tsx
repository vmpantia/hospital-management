import { UsersIcon } from '@heroicons/react/24/solid'
import SidebarButton from './SidebarButton';

const Sidebar = () => {

    return(
        <aside className='w-60 fixed left-0 top-0 h-screen bg-slate-700 p-3'>
            <p className='text-xl text-slate-200 font-medium text-center pb-3.5 border-b border-slate-800'>Hospital Management</p>
            <ul className='mt-2 text-slate-200'>
                <li><SidebarButton text='Patient' /></li>
                <li><SidebarButton text='Doctor' /></li>
            </ul>
        </aside>
    );
}

export default Sidebar;