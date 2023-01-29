import React from 'react'
import { samples } from '../data/user'
import { UilTrash } from '@iconscout/react-unicons'
import { UilEdit } from '@iconscout/react-unicons'
const Sample = () => {
    return (
        <div className='bg-dark p-12'>
            <div className="grid grid-cols-4 gap-8">

                <div className="form-group">
                    <label htmlFor="">نام و نام خانوادگی :</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="">مدت :</label>
                    <input type="number" placeholder='تعداد به روز' />
                </div>
                <div className="form-group">
                    <label htmlFor="">عکس قبل :</label>
                    <input type="file" className='file_input' />
                </div>
                <div className="form-group">
                    <label htmlFor="">عکس بعد :</label>
                    <input type="file" className='file_input' />
                </div>

            </div>
            <div className="text-end">
                <button className='bg-sky-600 text-white w-36 h-10 rounded-md'>ثبت</button>
            </div>
            <div className="grid grid-cols-3 2xl:grid-cols-4 gap-8 mt-16">
                {samples.map(s => (
                    <div className='border border-border-color grid grid-cols-2'>
                        <div>
                            <img src={`/img/img${s.id}.webp`} className="h-40 w-40 aspect-square" alt="" />
                            <img src={`/img/before${s.id}.webp`} className="h-40 w-40 aspect-square" alt="" />
                        </div>
                        <div className='p-2 pt-8 flex flex-col justify-between'>
                            <div className="">
                                <p className='mb-4'>{s.name}</p>
                                <p>{s.time} روز</p>
                            </div>
                            <div className="flex justify-center gap-4">
                                <button className='danger p-2'><UilTrash /></button>
                                <button className='warning p-2'><UilEdit /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
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

export default Sample