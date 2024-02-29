import React from 'react'
import { Card,Progress } from 'flowbite-react'
import { IoIosCloudOutline } from "react-icons/io";
export const PCloud = (props) => {
  return (
    <Card className="rounded-3xl shadow-xl px-5 mx-5 bg-gradient-to-r from-[#0d6f7a] via-[#0F7C88] to-[#268993] opacity-70">
                <IoIosCloudOutline className=" h-36 w-36 invert" />
                <p className="text-2xl -my-2 invert">PCloud</p>
                <Progress progress={props.used_percent} className="border" color="teal" />
                <p className="invert opacity-65">{props.used} / {props.total}</p>
              </Card>
  )
}
