import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import { SideBar } from '../Components/SideBar';
import { Button, TextInput, Toast } from 'flowbite-react';
import { MdOutlineDone } from "react-icons/md";
import { BrowserView, MobileView } from 'react-device-detect'
import NavBarMobile from '../Components/NavBarMobile'

export const UpdateDetails = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [showToast, setShowToast] = useState(false);
  const [file, setFile] = useState('')
  useEffect(() => {
    if (!sessionStorage.getItem('accessToken')) {
      navigate("/login");
    }
  });

  const updateProfile = () => {
    const profileData = new FormData()
    profileData.append('name', username)
    profileData.append('email', email)
    profileData.append('file', file[0])
    console.log("size", file[0])
    fetch(process.env.REACT_APP_SERVER + '/update-profile', {
      method: "POST",
      headers: { 'Authorization': sessionStorage.getItem('accessToken') },
      body: profileData
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.message === "Profile updated successfully") {
          setShowToast(true)
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }
  if (sessionStorage.getItem('accessToken')) {
    return (
      <>
        <header>
          <BrowserView><NavBar pageTitle="Update Details" />
          </BrowserView>
          <MobileView>
            <NavBarMobile pageTitle="Update Details" />

          </MobileView>
        </header>
        <div className='w-screen flex flex-row'>
          <BrowserView><SideBar /></BrowserView>
          <div className="flex flex-row justify-center lg:w-96 w-24 place-items-center lg:px-96 px-12 mx-48">
            <form className="flex w-96 flex-col gap-4">
              <div>
                <div className='w-96 flex flex-col justify-center align-center p-16'>

                  <p className='font-thin text-4xl'>Update Details</p>
                </div>
                <TextInput defaultValue={sessionStorage.getItem("username")} onChange={(e) => { setUsername(e.target.value) }} className='pb-6' color="blue" id="username1" type="text" placeholder="Name" required />
                <TextInput defaultValue={sessionStorage.getItem("useremail")} onChange={(e) => { setEmail(e.target.value) }} color="blue" id="email1" type="email" placeholder="Email" required />
                <input type="file" className='p-4' onChange={(e) => { setFile(e.target.files) }} />
              </div>
              <div className='flex flex-col'>
                <Button color='blue' className='bg-[#5793FB]' onClick={updateProfile}>Update Details</Button>
                {showToast && (
                  <Toast className='p-5 m-5'>
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                      <MdOutlineDone className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-sm font-normal">Details Updated</div>
                    <Toast.Toggle onDismiss={() => setShowToast(false)} />
                  </Toast>
                )}
              </div>

            </form >

          </div>
        </div>
      </>
    )
  }
}
