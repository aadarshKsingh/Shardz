import React from 'react'
import { Card,Progress } from 'flowbite-react'
import { DiGoogleDrive } from 'react-icons/di'
export const GoogleDrive = () => {
  return (
    <Card className="rounded-3xl shadow-xl px-5  mx-5 bg-gradient-to-r  from-[#1b9359] via-[#1fa463] to-[#62bf91] opacity-70">
                <DiGoogleDrive className=" h-36 w-36 invert" />
                <p className="text-2xl -my-2 invert">Google Drive</p>
                <Progress progress={4} className="border" color="green" />
                <p className="invert opacity-65">81 GB / 2000 GB</p>
              </Card>
  )
}
