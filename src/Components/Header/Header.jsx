
import Avatar from "./../../assets/face.jpg"
import { UilBell, UilEnvelope } from '@iconscout/react-unicons'
const Header = () => {
    return (
        <header className="w-full bg-dark h-24  flex items-center gap-12 justify-around">
            <div className='w-8/12'>
                <input type="text" placeholder='جستجوی کاربر' className='placeholder:text-sm indent-3 placeholder:text-gray-600 w-full bg-transparent border h-10  border-gray-600 rounded-md' />
            </div>
            <div className='flex items-center'>
                <button className='border-l px-4 border-gray-500'><UilBell /></button>
                <button className='border-l px-4 border-gray-500'><UilEnvelope /></button>

                <div className='flex items-center gap-2 px-4'>
                    <img src={Avatar} alt="" className='w-10 h-10 rounded-full' />
                    <span>محمد فتحی</span>
                </div>
            </div>
        </header>
    )
}

export default Header