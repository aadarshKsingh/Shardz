import React from 'react'
import { Card,Progress } from 'flowbite-react'
import { DiGoogleDrive } from 'react-icons/di'

const byte2gig = (bytes) => {
  return (bytes / (1024*1024*1024)).toFixed(2);
}

const calculateStoragePercentage = (usedStorage, totalStorage) => {
  return ((usedStorage / totalStorage) * 100).toFixed(2);
};

export const GoogleDrive = (props) => {
  return (
<Card className="lg:rounded-3xl rounded-2xl shadow-xl px-5 lg:my-0 my-1 lg:mx-2 mx-5 bg-gradient-to-r from-[#1b9359] via-[#1fa463] to-[#62bf91] opacity-70">
  <div className="flex lg:flex-col flex-row justify-center">
    <DiGoogleDrive className=" lg:h-36 lg:w-36 w-16 h-12 lg:ml-0 -ml-6 invert" />
    <div className="flex lg:flex-col flex-row">
      <p className="lg:text-2xl text-md lg:py-2 pr-2  lg:pr-0 py-3 lg:whitespace-nowrap invert">Google Drive</p>
      <Progress progress={calculateStoragePercentage(props.used,props.total)} className="lg:my-2" color="green" />
      <p className="invert opacity-65 py-3">{byte2gig(props.used)} GB / {byte2gig(props.total)} GB</p>
    </div>
  </div>
</Card>
  )
}
