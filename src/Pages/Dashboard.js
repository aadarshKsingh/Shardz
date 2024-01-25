import React from 'react'
import NavBar from '../Components/NavBar'
import { SideBar } from '../Components/SideBar'
export const Dashboard = () => {
    return (
        <div>
            <header><NavBar /></header>
            <div className='flex flex-row'><SideBar/>
                <div className='m-48 px-96'>So empty here...( just like my life )</div>
            </div>

        </div>
    )
}
