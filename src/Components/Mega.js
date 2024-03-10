import React from 'react'
import { Card, Progress } from 'flowbite-react'
import { SiMega } from 'react-icons/si'
export const Mega = (props) => {
  return (
    <Card className="lg:rounded-3xl rounded-2xl shadow-xl lg:my-0 my-1 px-5 lg:mx-2 mx-5 bg-gradient-to-r from-[#ca1205] via-[#dd1405] to-[#fa3223] opacity-70">
  <div className='flex lg:flex-col justify-center'>
    <SiMega className=" lg:h-36 lg:w-36 w-16 h-12 lg:ml-0  -ml-6  invert" />
    <div className='flex lg:flex-col flex-row'>
    <p className="lg:text-2xl text-lg -my-2 lg:my-0 lg:py-2 py-5 pr-5 pl-2 invert">MEGA</p>
    <Progress progress={props.used_percent} className="lg:my-2" color="red" />
    <p className="invert opacity-65 py-3">{props.used} / {props.total}</p>
    </div>
  </div>
</Card>
  )
}
