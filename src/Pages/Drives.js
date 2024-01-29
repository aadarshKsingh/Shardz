import React from 'react'
import NavBar from '../Components/NavBar'
import { SideBar } from '../Components/SideBar'
import { Drive } from '../Components/Drive'
export const Drives = () => {
    return (
        <>
            <header><NavBar pageTitle="Drives"/></header>
            <div className='flex flex-row'><SideBar />
                <div className="grid grid-flow-col gap-4">
                    <Drive name="realityislie" />
                    <Drive name="quackquack198" />
                    <Drive name="fuckgates" />
                    <Drive name="pdrive" />
                </div>
            </div>
        </>
    )
}
