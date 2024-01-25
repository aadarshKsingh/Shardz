import React from 'react'
import { SideBar } from '../Components/SideBar'
import { Directory } from '../Components/Directory'
import { Image } from '../Components/Image'
import { Archive } from '../Components/Archive'
import NavBar from '../Components/NavBar'
export const MyFiles = () => {
    return (<>
        <header><NavBar /></header>
        <div className='w-screen flex flex-row'>
            <SideBar />
            <div className="grid grid-flow-col gap-4">
                <Directory name="Documents" />
                <Directory name="Downloads" />
                <Directory name="Pictures" />
                <Directory name="Videos" />
                <Image name="file.txt" />
                <Image name="file.txt" />
                <Archive name="worker.js.zip" />
            </div>
        </div>
    </>
    )
}
