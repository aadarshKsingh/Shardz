import React from 'react'
import { FaFileImage } from "react-icons/fa6";
export const Image = (props) => {
    return (
        <div className='flex flex-col text-center'>
            <FaFileImage color='#5793FB' className='h-20 w-20 mx-5' />
            <p className='py-2'>{props.name}</p>
        </div>
    )
}
