import React from 'react'
import { users } from '../data/user'

const Services = () => {
    const type = ['رژیم', 'مشاوره', 'برنامه']
    const status = [1, 2]
    return (
        <div className='bg-dark rounded-md p-8'>
            <h3>درخواست های ثبت شده</h3>
            <div className="flex justify-around mb-12">
                <div className="">
                    <input type="search" className='h-8 w-64 bg-transparent placeholder:text-sm indent-4 text-white border border-gray-600 mx-4' placeholder='جستجو بر اساس نام' />
                </div>
                <div className="">
                    <label htmlFor=""> فیلتر بر اساس :</label>
                    <select name="" id="" className='h-8 w-48 bg-transparent text-white border border-gray-600 mx-4'>
                        <option value="">ارسال شده</option>
                        <option value="">ثبت شده</option>
                    </select>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>نام و نام خانوادگی</th>
                        <th>شماره تماس</th>
                        <th>نوع درخواست</th>
                        <th>وضعیت</th>
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
                                    <td>{type[Math.floor(Math.random() * type.length)]}</td>
                                    <td className=''>
                                        <span className={s === 2 ? 'success w-24 inline-block py-1 text-[.75rem]' : 'warning w-24 inline-block py-1 text-sm'}>
                                            {s === 1 ? 'ثبت' : 'ارسال'}
                                        </span>
                                        {s === 1 ? <button className='bg-info rounded-md py-1 text-sm w-32 text-white mx-2'>ارسال درخواست</button> : null}
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

export default Services