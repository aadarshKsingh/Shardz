import React from 'react'
import { Card } from 'flowbite-react'
import { DiOnedrive } from 'react-icons/di'
import { Progress } from 'flowbite-react'
export const OneDrive = () => {
  return (
    <Card className="rounded-3xl shadow-xl px-5 mx-5 bg-gradient-to-r  from-[#0078D4] via-[#1490DF] to-[#28A8EA] opacity-70">
                <DiOnedrive className=" h-36 w-36 invert" />
                <p className="text-2xl -my-2 invert">OneDrive</p>
                <Progress progress={20} className="border" color="blue" />
                <p className="invert opacity-65">200 GB / 1000 GB</p>
              </Card>
  )
}
