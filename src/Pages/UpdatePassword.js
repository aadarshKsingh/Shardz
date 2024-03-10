import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import { SideBar } from '../Components/SideBar';
import { Button, TextInput, Toast } from 'flowbite-react';
import { MdOutlineDone } from "react-icons/md";
import { BrowserView, MobileView } from 'react-device-detect'
import NavBarMobile from '../Components/NavBarMobile'


export const UpdatePassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('')
  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
    if (!sessionStorage.getItem('accessToken')) {
      navigate("/login");
    }
  });

  const updatePassword = () => {
    fetch(process.env.REACT_APP_SERVER + '/update-password', {
      method: "POST",
      mode: "cors",
      headers: { 'content-type': 'application/json', "Authorization": sessionStorage.getItem('accessToken') },
      body: JSON.stringify({ "new_password": password }),
    })
      .then((response) => {
        if (response.status === 200) {
          setShowToast(true)
          navigate("/dashboard")
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
          <BrowserView><NavBar pageTitle="Update Password" />
          </BrowserView>
          <MobileView>
            <NavBarMobile pageTitle="Update Password" />

          </MobileView>
        </header>
        <div className='w-screen flex flex-row'>
          <BrowserView><SideBar /></BrowserView>
          <div className="flex flex-row justify-center w-96 place-items-center px-96 mx-48">
            <form className="flex w-96 flex-col gap-4" onSubmit={(e) => {
              e.preventDefault();
              updatePassword();
            }}>
              <div>
                <div className='w-96 flex flex-col justify-center align-center p-16'>
                  <p className='font-thin text-3xl'>Update Password</p>
                </div>
                <TextInput
                  value={password}
                  onChange={(e) => { setPassword(e.target.value) }}
                  className='pb-6'
                  color="blue"
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className='flex flex-col'>
                <Button color='blue' className='bg-[#5793FB]' type="submit">Update Password</Button>
                {showToast && (
                  <Toast className='p-5 m-5'>
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                      <MdOutlineDone className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-sm font-normal">Password Updated</div>
                    <Toast.Toggle onDismiss={() => setShowToast(false)} />
                  </Toast>
                )}
              </div>
            </form>

          </div>
        </div>
      </>
    );
  }
}
