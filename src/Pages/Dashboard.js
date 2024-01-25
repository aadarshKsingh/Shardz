import React from 'react'
import { Sidebar, Progress } from "flowbite-react"
import {
    LuLayoutDashboard,
    LuFileStack,
    LuShare2,
    LuHardDrive,
    LuLayers
} from "react-icons/lu"
import NavBar from '../Components/NavBar'
export const Dashboard = () => {
    return (
        <div><header><NavBar /></header>
            <div className='flex flex-row'><Sidebar>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" icon={LuLayoutDashboard}>
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={LuFileStack}
                            labelColor="dark"
                        >
                            My Files
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={LuShare2}  >
                            Shared Files
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={LuLayers} label="5">
                            Drives
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" className="bg-[#5793FB] bg-opacity-20">
                            <p className='flex flex-row -mx-3'><LuHardDrive className='h-7 w-7 opacity-60 py-50' /><p className='pl-2'>Storage</p></p>
                            <p className='font-thin text-sm pt-3 pb-2'>70 GB of 200 GB used</p>
                            <p className='pb-5'><Progress progress={35} color="blue" /></p>
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
                <div className='m-48 px-96'>So empty here...( just like my life )</div>
            </div>

        </div>
    )
}
