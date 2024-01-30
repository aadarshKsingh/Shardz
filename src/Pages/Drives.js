import { React, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import { SideBar } from '../Components/SideBar'
import { Drive } from '../Components/Drive'
import { useSessionStorage } from 'react-storage-complete'
export const Drives = () => {
    const [accessToken] = useSessionStorage('access_token', '');
    const navigate = useNavigate();

    useEffect(() => {
        if (!accessToken) {
            navigate("/login");
        }
    }, [accessToken, navigate]);
    if (accessToken) {
        return (
            <>
                <header><NavBar pageTitle="Drives" /></header>
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
}
