import {React,useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSessionStorage } from 'react-storage-complete';
import NavBar from '../Components/NavBar';
import { SideBar } from '../Components/SideBar';
import { Button, TextInput, Toast } from 'flowbite-react';
import { MdOutlineDone } from "react-icons/md";
export const Update = () => {
    const [accessToken] = useSessionStorage('access_token', '');
    const navigate = useNavigate();
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [showToast, setShowToast] = useState(false);
    useEffect(() => {
      if (!accessToken) {
        navigate("/login");
      }else{
        fetch(process.env.REACT_APP_SERVER+'/profile', {
          method: "POST",
          mode: "cors",
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({"access_token": accessToken}),
        })
          .then((response) => response.json())
          .then((data) => {
              console.log(data)
              if(data.status === "success"){
                  setEmail(data.user.email)
                  setUsername(data.user.name)
              }
          })
          .catch((error) => {
            console.log(error)
          });
      }
    }, [accessToken, navigate]);

    const updateProfile = () => {
      fetch(process.env.REACT_APP_SERVER+'/update-profile', {
        method: "POST",
        mode: "cors",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({"name": username,"email" : email,"access_token" : accessToken}),
      })
        .then((response) => response.json())
        .then((data) => {
           if(data.status === "success"){
            showToast(true)
            navigate("/")
           }
        })
        .catch((error) => {
          console.log(error)
        });
    }
    if (accessToken) {
      return (
        <>
          <header><NavBar pageTitle="Update Details" /></header>
          <div className='w-screen flex flex-row'>
            <SideBar />
            <div className="flex flex-row justify-center w-96 place-items-center border-2 border-cyan-500 px-96 mx-48">
            <form className="flex w-96 flex-col gap-4" onSubmit={updateProfile}>
        <div>
          <div className='w-96 flex flex-col justify-center align-center p-16'>
           
            <p className='font-thin text-7xl'>Update Details</p>
          </div>
          <TextInput value={username} onChange={(e) => { setUsername(e.target.value)}} className='pb-6' color="blue" id="username1" type="text"  placeholder="Name" required />
          <TextInput value={email} onChange={(e) => { setEmail(e.target.value)}} color="blue" id="email1" type="email" placeholder="Email" required />
        </div>
        <Button color='blue' className='bg-[#5793FB]' type="submit">Update Details</Button>
        
      </form >
      {showToast && (
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
            <MdOutlineDone className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">Details. Updated</div>
          <Toast.Toggle onDismiss={() => setShowToast(false)} />
        </Toast>
      )}
            </div>
          </div>
        </>
      )
    }
}
