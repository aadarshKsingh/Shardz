import React from 'react'
import { Card, Progress } from 'flowbite-react'
import { SiProtondrive } from 'react-icons/si'
export const Proton = () => {
  return (
    <Card className="rounded-3xl shadow-xl px-5  mx-5 bg-gradient-to-r  from-[#5948ca] via-[#6351e1] to-[#7262e4] opacity-70">
                <SiProtondrive className=" h-36 w-36 invert" />
                <p className="text-2xl -my-2 invert">Proton</p>
                <Progress progress={40} className="border" color="purple" />
                <p className="invert opacity-65">2 GB / 5 GB</p>
              </Card>
  )
}
