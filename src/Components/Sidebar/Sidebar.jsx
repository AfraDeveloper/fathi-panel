import { Link, NavLink } from "react-router-dom";
import Logo from './../../assets/logo.png'
import { UilApps, UilSwatchbook, UilFileBookmarkAlt, UilUsersAlt, UilScenery, UilSetting } from '@iconscout/react-unicons'
import { UilImageEdit } from '@iconscout/react-unicons'
import { UilAward } from '@iconscout/react-unicons'
const links = [
    { path: '/', icon: <UilApps color="#FC424A" size={16} />, title: "داشبورد" },
    { path: '/services', icon: <UilSwatchbook color="#bef264" size={16} />, title: "درخواست ها" },
    { path: '/users', icon: <UilUsersAlt color="#22c55e" size={16} />, title: "کاربران" },
    { path: '/gallery', icon: <UilScenery color="#fbbf24" size={16} />, title: "گالری" },
    { path: '/articles', icon: <UilFileBookmarkAlt color="#38bdf8" size={16} />, title: "مقالات" },
    { path: '/sample', icon: <UilAward color="#a855f7" size={16} />, title: "نمونه کار" },
    { path: '/content', icon: <UilImageEdit color="#fcd34d" size={16} />, title: "محتوا سایت" },
    { path: '/setting', icon: <UilSetting color="#2dd4bf" size={16} />, title: "تنظیمات" },
]
const Sidebar = () => {
    return (
        <div id="sidebar" className="w-[300px] h-screen">

            <div className="flex flex-col items-center p-8">
                <img className="" src={Logo} alt="" />
            </div>
            <nav className="navlinks">
                <ul>
                    {links.map((link, index) =>
                        <li key={index} className="mb-3">
                            <NavLink to={link.path} className={({ isActive }) =>
                                isActive ? 'navlink_active' : undefined
                            }>
                                {link.icon}
                                <span>{link.title}</span>
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar