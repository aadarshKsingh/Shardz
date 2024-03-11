import React from 'react'
import { Sidebar, Progress } from "flowbite-react"
import {
  LuLayoutDashboard,
  LuFileStack,
  LuShare2,
  LuHardDrive,
  LuLayers
} from "react-icons/lu"
import { useNavigate } from 'react-router-dom'

export const SideBar = () => {
  const storageData = JSON.parse(sessionStorage.getItem('storage'))
  const driveData = JSON.parse(sessionStorage.getItem('drives'))
  const navigate = useNavigate()
  return (
    <div className='flex flex-row -px-20'><Sidebar className='lg:pr-0 pr-0'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={LuLayoutDashboard}>
            <p onClick={()=>navigate("/dashboard")} className="pr-20">Dashboard</p>
          </Sidebar.Item>
          <Sidebar.Item
            icon={LuFileStack}
            labelColor="dark"
          >
            <p onClick={()=>navigate("/myfiles")} className="pr-20">My Files</p>
          </Sidebar.Item>
          <Sidebar.Item icon={LuShare2}  >
            <p onClick={()=>navigate("/sharedfiles")} className="pr-20">Shared Files</p>
          </Sidebar.Item>
          <Sidebar.Item icon={LuLayers} labelColor="dark" label={driveData.length}>
            <p onClick={()=>navigate("/drives")} className="pr-20">Drives</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item  className="bg-[#5793FB] bg-opacity-20 scale-75 lg:scale-100 lg:mx-0 -mx-8">
            <span className='flex flex-row -mx-3'><LuHardDrive className='h-7 w-7 opacity-60 py-50'/><span className='pl-2'>Storage</span></span>
            <span className='font-thin text-sm pt-3 pb-2'>{storageData.used} of {storageData.total} used</span>
            <span className='pb-5'><Progress progress={storageData.used_percent} color="blue" /></span>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>

  )
}
