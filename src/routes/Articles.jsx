import React from 'react'
import { arts } from '../data/user'
import { UilTrash } from '@iconscout/react-unicons'
import { UilEdit } from '@iconscout/react-unicons'
const Articles = () => {

    return (
        <div className='bg-dark rounded-md p-8'>
            <h3>درخواست های ثبت شده</h3>
            <div className="flex justify-around mb-12">
                <div className="">
                    <input type="search" className='h-8 w-64 bg-transparent placeholder:text-sm indent-4 text-white border border-gray-600 mx-4' placeholder='جستجو بر اساس نام' />
                </div>

            </div>
            <table>
                <thead>
                    <tr>
                        <th> #</th>
                        <th className='text-right'>عنوان مقاله</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {arts.map(a =>
                        <tr key={a.id}>
                            <td className='text-center'>
                                <img src={`/img/art${a.id}.jpg`} className="w-16 mx-auto" alt="" />
                            </td>
                            <td className='text-right'>{a.title}</td>
                            <td>
                                <div className="flex justify-center gap-4">
                                    <button className='danger p-1'><UilTrash /></button>
                                    <button className='warning p-1'><UilEdit /></button>
                                </div>
                            </td>
                        </tr>
                    )}
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

export default Articles