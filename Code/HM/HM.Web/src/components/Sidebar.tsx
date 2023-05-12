import { BuildingOfficeIcon, UsersIcon } from '@heroicons/react/24/solid'
import SidebarButton from './Buttons/SidebarButton';

const Sidebar = () => {
    return(
        <aside className='w-60 fixed left-0 top-0 h-screen bg-zinc-800 p-3'>
            <section className='flex border-b pb-3.5 border-zinc-600'>
                <BuildingOfficeIcon className='h-12 w-12 mt-2 mr-4 text-slate-200'/>
                <p className='text-xl text-white font-medium'>Hospital Management</p>
            </section>
            <ul className='mt-2 text-white'>
                <li><SidebarButton text='Patient' link='/patient'/></li>
                <li><SidebarButton text='Doctor' link='/doctor' /></li>
                <li><SidebarButton text='Nurse' link='/nurse' /></li>
            </ul>
        </aside>
    );
}

export default Sidebar;