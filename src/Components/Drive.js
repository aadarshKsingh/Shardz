import React from 'react'
import { FaHardDrive } from "react-icons/fa6";
export const Drive = (props) => {
    return (
        <div className='flex flex-col text-center'>
            <FaHardDrive color='#5793FB' className='h-20 w-20 mx-5' />
            <p className='py-2'>{props.name}</p>
        </div>
    )
}
