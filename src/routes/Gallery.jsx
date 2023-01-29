import React from 'react'
import { samples } from '../data/user'
import { UilTrash } from '@iconscout/react-unicons'
import { UilEdit } from '@iconscout/react-unicons'
const Gallery = () => {
    return (
        <div className='bg-dark p-12'>
            <div className="grid ">
                <div className="form-group">
                    <label htmlFor="">عکس  :</label>
                    <input type="file" className='file_input' />
                </div>

            </div>
            <div className="text-end">
                <button className='bg-sky-600 text-white w-36 h-10 rounded-md'>ثبت</button>
            </div>
            <div className="grid grid-cols-4 2xl:grid-cols-6 gap-8 mt-16">
                {samples.map(s => (
                    <div className='border border-border-color relative'>
                        <img src={`/img/img${s.id}.webp`} className="h-60 w-60" alt="" />
                        <button className='danger p-1 absolute left-2  bottom-2'><UilTrash /></button>

                    </div>
                ))}
                {samples.map(s => (
                    <div className='border border-border-color relative'>
                        <img src={`/img/img${s.id}.webp`} className="h-60 w-60 " alt="" />
                        <button className='danger p-1 absolute left-2  bottom-2'><UilTrash /></button>

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

export default Gallery