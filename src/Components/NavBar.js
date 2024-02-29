import {React, useState} from 'react'
import { Dropdown, Navbar } from 'flowbite-react';
import cloud from '../Assets/cloud.png'
import { useSessionStorage } from 'react-storage-complete';
import { useNavigate } from 'react-router-dom';

function NavBar(props) {
  const [accessToken,setAccessToken] = useSessionStorage('access_token', '');
  const navigate = useNavigate()
   const [openModal, setOpenModal] = useState(false);
   const [name,setName] = useSessionStorage('name', '');
   const [email,setEmail] = useSessionStorage('email', '');
   const [profilePicture,setProfilePicture] = useSessionStorage('profilePicture', '');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }
  const handleLogout = () =>{
    onCloseModal()
    setAccessToken('')
    navigate("/login")
  }
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/" className='pl-10'>
        <img src={cloud} className="mr-3 h-6 sm:h-9" alt="Shartz" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Shardz</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <p className='flex flex-row items-center font-bold'>{name}<img src={profilePicture} height="40" width="40" className='ml-5 rounded-full' alt={email}/></p>
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{name}</span>
            <span className="block truncate text-sm font-medium">{email}</span>
          </Dropdown.Header>
          <Dropdown.Item onClick={()=>navigate("/update-details")}>Update Details</Dropdown.Item>
          <Dropdown.Item onClick={()=>navigate("/update-password")}>Update Password</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}><p onClick={()=>handleLogout}>Sign out</p></Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <p className='text-lg'>{props.pageTitle}</p>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default NavBar