import { React, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SideBar } from '../Components/SideBar'
import { Directory } from '../Components/Directory'
import { Image } from '../Components/Image'
import { Archive } from '../Components/Archive'
import NavBar from '../Components/NavBar'
import { BrowserView, MobileView } from 'react-device-detect'
import NavBarMobile from '../Components/NavBarMobile'
export const SharedFiles = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('accessToken')) {
      navigate("/login");
    }
  });
  if (sessionStorage.getItem('accessToken')) {
    return (
      <>
        <header>
          <BrowserView><NavBar pageTitle="Shared Files" />
          </BrowserView>
          <MobileView>
            <NavBarMobile pageTitle="Shared Files" />

          </MobileView>
        </header>
        <div className='w-screen flex flex-row'>
          <BrowserView><SideBar /></BrowserView>
          <div className="grid lg:grid-flow-col grid-flow-row lg:gap-4 gap-2 grid-cols-42">
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
}
