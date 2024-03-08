import { React, useState } from 'react'
import { Button, Dropdown, Navbar, Modal } from 'flowbite-react';
import cloud from '../Assets/cloud.png'
import { useNavigate } from 'react-router-dom';

function NavBar(props) {
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false);
  const [driveModal, setDriveModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
    sessionStorage.setItem('useremail','')
  }
  const handleLogout = () => {
    onCloseModal()
    sessionStorage.setItem('accessToken','')
    navigate("/login")
  }
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/" className='pl-10'>
        <img src={cloud} className="mr-3 h-6 sm:h-9" alt="Shartz" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Shardz</span>
        {props.pageTitle==="Drives"? <Button color='blue' className='bg-[#5793FB] ml-24' onClick={(e) => {
        e.preventDefault(); 
         setDriveModal(true);
        }}>Add Drive
        </Button> : null}
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          onClick={openModal}
          label={
            <p className='flex flex-row items-center font-bold'>{sessionStorage.getItem("username")}<img src={sessionStorage.getItem("pfp")} height="40" width="40" className='ml-5 rounded-full' alt={sessionStorage.getItem("useremail")} /></p>
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{sessionStorage.getItem('username')}</span>
            <span className="block truncate text-sm font-medium">{sessionStorage.getItem("useremail")}</span>
          </Dropdown.Header>
          <Dropdown.Item onClick={() => navigate("/update-details")}>Update Details</Dropdown.Item>
          <Dropdown.Item onClick={() => navigate("/update-password")}>Update Password</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}><p onClick={() => handleLogout}>Sign out</p></Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
        <Modal show={driveModal} onClose={() => setDriveModal(false)}>
        <Modal.Header>Add a drive</Modal.Header>
        <Modal.Body>
          <div className="space-x-6 flex flex-row">
            <div className='flex flex-col'>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <img className='mt-3' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Box%2C_Inc._logo.svg/1200px-Box%2C_Inc._logo.svg.png' alt='box' height={70} width={70}/>
            </p>
            <p className='pl-5 pt-5'>Box</p>
            </div>
            <div className='flex flex-col'>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <img src='data:image/png;base64,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' alt='dropbox' height={70} width={70} />
            </p>
            <p className='pt-1'>Dropbox</p>
            </div>
            <div className='flex flex-col'>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <img src='https://avatars.githubusercontent.com/u/6308081?s=280&v=4' alt='storj' height={70} width={70} />
            </p>
            <p className='pl-4'>Storj</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
      </div>
      <Navbar.Collapse>
        <p className='text-lg'>{props.pageTitle}</p>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default NavBar