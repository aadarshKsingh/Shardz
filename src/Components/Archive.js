import React from 'react'
import { FaRegFileArchive } from "react-icons/fa";
export const Archive = (props) => {
    return (
        <div className='flex flex-col text-center'>
            <FaRegFileArchive color='#5793FB' className='h-20 w-20 mx-5' />
            <p className='py-2'>{props.name}</p>
        </div>
    )
}
