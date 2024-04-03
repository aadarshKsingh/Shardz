import React from 'react'
import { Card,Progress } from 'flowbite-react'
import { DiDropbox } from 'react-icons/di'
const byte2gig = (bytes) => {
  return (bytes / (1024*1024*1024)).toFixed(2);
}

const calculateStoragePercentage = (usedStorage, totalStorage) => {
  return ((usedStorage / totalStorage) * 100).toFixed(2);
};

export const DropBox = (props) => {
  return (
    <Card className="lg:rounded-3xl rounded-2xl shadow-xl px-5 lg:my-0 my-1 lg:mx-2 mx-5 bg-gradient-to-r from-[#007ee5] via-[#3280fe] to-[#0061FE] opacity-70">
  <div className='flex lg:flex-col flex-row justify-center'>
    <DiDropbox className=" lg:h-36 lg:w-36 w-16 h-12 lg:ml-0 -ml-6 invert" />
    <div className='flex lg:flex-col flex-row'>
      <p className="lg:text-2xl text-lg py-3 lg:my-0 lg:py-2 pr-5 invert">Dropbox</p>
      <Progress progress={calculateStoragePercentage(props.used,props.total)} className="lg:my-2" color="blue" />
      <p className="invert opacity-65 py-3">{byte2gig(props.used)} GB / {byte2gig(props.total)} GB</p>
    </div>
  </div>
</Card>
  )
}
