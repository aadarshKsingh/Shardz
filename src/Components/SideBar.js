import React from 'react'
import { Sidebar, Progress } from "flowbite-react"
import {
  LuLayoutDashboard,
  LuFileStack,
  LuShare2,
  LuHardDrive,
  LuLayers
} from "react-icons/lu"

export const SideBar = () => {
  return (
    <div className='flex flex-row'><Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item  href="/" icon={LuLayoutDashboard}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            href="/myfiles"
            icon={LuFileStack}
            labelColor="dark"
          >
            My Files
          </Sidebar.Item>
          <Sidebar.Item  href="/sharedfiles"  icon={LuShare2}  >
            Shared Files
          </Sidebar.Item>
          <Sidebar.Item  href="/drives" icon={LuLayers} labelColor="dark4" label="5">
            Drives
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item  href="/storage" className="bg-[#5793FB] bg-opacity-20">
            <p className='flex flex-row -mx-3'><LuHardDrive className='h-7 w-7 opacity-60 py-50' /><p className='pl-2'>Storage</p></p>
            <p className='font-thin text-sm pt-3 pb-2'>70 GB of 200 GB used</p>
            <p className='pb-5'><Progress progress={35} color="blue" /></p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>

  )
}
