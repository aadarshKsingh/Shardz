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
  const storageData = JSON.parse(sessionStorage.getItem('storage'))
  const driveData = JSON.parse(sessionStorage.getItem('drives'))

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
          <Sidebar.Item  href="/drives" icon={LuLayers} labelColor="dark" label={driveData.length}>
            Drives
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item  className="bg-[#5793FB] bg-opacity-20">
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
