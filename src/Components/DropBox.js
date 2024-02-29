import React from 'react'
import { Card,Progress } from 'flowbite-react'
import { DiDropbox } from 'react-icons/di'
export const DropBox = (props) => {
  return (
    <Card className="rounded-3xl shadow-xl px-5 mx-5 bg-gradient-to-r from-[#007ee5] via-[#3280fe] to-[#0061FE] opacity-70">
                <DiDropbox className=" h-36 w-36 invert" />
                <p className="text-2xl -my-2 invert">Dropbox</p>
                <Progress progress={props.used_percent} className="border" color="blue" />
                <p className="invert opacity-65">{props.used} / {props.total}</p>
              </Card>
  )
}
