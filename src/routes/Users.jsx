
import { users } from '../data/user'
const Users = () => {
    const type = ['رژیم', 'مشاوره', 'برنامه']
    const status = [1, 2]
    return (
        <div className='bg-dark rounded-md p-8'>
            <h3>لیست کاربران   </h3>
            <div className="flex justify-end mb-12">
                <div className="">
                    <input type="search" className='h-8 w-64 bg-transparent placeholder:text-sm indent-4 text-white border border-gray-600 mx-4' placeholder='جستجو بر اساس نام' />
                </div>

            </div>
            <table>
                <thead>
                    <tr>
                        <th>نام و نام خانوادگی</th>
                        <th>شماره تماس</th>
                        <th>جنسیت </th>
                        <th>درخواست ها</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        let s = status[Math.floor(Math.random() * status.length)]
                        return (
                            (

                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.gender}</td>
                                    <td className=''>
                                        <button className='border border-info text-info rounded-md py-1 text-sm w-32  mx-2'>مشاهده </button>
                                    </td>
                                </tr>
                            )
                        )
                    })}
                </tbody>
            </table>
            <div className="paginate">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
        </div>
    )
}

export default Users