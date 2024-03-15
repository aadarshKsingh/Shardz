import { React, useState } from "react";
import { Button, Dropdown, Navbar, Modal, Avatar, Progress } from "flowbite-react";
import cloud from "../Assets/cloud.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { slide as Menu } from 'react-burger-menu'
import { LuFileStack, LuLayers, LuLayoutDashboard, LuShare2, LuHardDrive } from "react-icons/lu";
import { CiMenuBurger } from "react-icons/ci";
function NavBar(props) {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [driveModal, setDriveModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
    sessionStorage.setItem("useremail", "");
  }
  const handleLogout = () => {
    onCloseModal();
    sessionStorage.setItem("accessToken", "");
    navigate("/login");
  };
  const storageData = JSON.parse(sessionStorage.getItem('storage'))

  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '13px',
      top: '13px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
      left: '250px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#F8F8FF',
      border: '2px solid grey',
      borderRadius: '20px',
      marginLeft: '-60px',
      marginRight: '100px',
      marginTop: '-25px',
      fontSize: '1.15em',
      paddingLeft: '50px'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      paddingTop: "30px",
      color: 'black',
      display: 'flex',
      flexDirection: 'column'
      // padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block',
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingLeft: '20px'
    },
    bmOverlay: {
      background: 'transparent'
    }
  }

  const getOauth = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_SERVER + "/add-storage", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: sessionStorage.getItem('accessToken') },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      sessionStorage.setItem("available_drives", JSON.stringify(data));
      setDriveModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddDrive = async (e) => {
    e.preventDefault();
    await getOauth();
  };


  return (
    <Navbar fluid rounded>
      <Menu styles={styles} customBurgerIcon={<CiMenuBurger />}>
        <NavLink to="/dashboard"><p id="dashboard" className="flex flex-row" href="/dashboard"><LuLayoutDashboard size="25" /><span className="px-3">Dashboard</span></p></NavLink>
        <NavLink to="/myfiles"><p id="myfiles" className="flex flex-row" href="/myfiles"><LuFileStack size="25" /> <span className="px-3">My Files</span></p></NavLink>
        <NavLink to="/sharedfiles"><p id="sharedfiles" className="flex flex-row" href="/sharedfiles"><LuShare2 size="25" /> <span className="px-3">SharedFiles</span></p></NavLink>
        <NavLink to="/drives"><p id="drives" className="flex flex-row" href="/drives"><LuLayers size="25" /> <span className="px-3">Drives</span></p></NavLink>
        <div className="bg-[#5793FB] bg-opacity-20 mx-3 rounded-xl mt-5">
          <span className='flex flex-row -mx-3'><LuHardDrive className='h-7 w-7 opacity-60 py-50' /><span className='pl-2'>Storage</span></span>
          <span className='font-thin text-sm pt-3 pb-2'>{storageData.used} of {storageData.total} used</span>
          <span className='pb-5'><Progress progress={storageData.used_percent} color="blue" /></span>
        </div>
      </Menu>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/dashboard">Dashboard</Navbar.Link>
        <Navbar.Link href="/myfiles">MyFiles</Navbar.Link>
        <Navbar.Link href="/sharedfiles">SharedFiles</Navbar.Link>
        <Navbar.Link href="/drives">Drives</Navbar.Link>
      </Navbar.Collapse>
      <Navbar.Brand href="/" className="ml-5 -mr-20">
        <img src={cloud} className="mr-3 h-6 sm:h-9" alt="Shardz" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Shardz
        </span>
        {props.pageTitle === "Drives" ? (
          <Button
            color="blue"
            className="bg-[#5793FB] ml-24"
            onClick={handleAddDrive}
          >
            Add Drive
          </Button>
        ) : null}
      </Navbar.Brand>
      <div className="flex md:order-2 pl-24">
        <Dropdown
          arrowIcon={false}
          inline
          onClick={openModal}
          label={
            <p className="flex flex-row items-center font-bold">
              <span className="px-5">{sessionStorage.getItem("username")}</span>
              {sessionStorage.getItem("pfp") === "null" ?
                <FaRegUser />
                : <Avatar
                  img={sessionStorage.getItem("pfp")}
                  height="40"
                  width="40"
                  className="ml-5 rounded-full"
                />
              }
            </p>
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">
              {sessionStorage.getItem("username")}
            </span>
            <span className="block truncate text-sm font-medium">
              {sessionStorage.getItem("useremail")}
            </span>
          </Dropdown.Header>
          <Dropdown.Item onClick={() => navigate("/update-details")}>
            Update Details
          </Dropdown.Item>
          <Dropdown.Item onClick={() => navigate("/update-password")}>
            Update Password
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>
            <p onClick={() => handleLogout}>Sign out</p>
          </Dropdown.Item>
        </Dropdown>
        <Modal show={driveModal} onClose={() => setDriveModal(false)}>
          <Modal.Header>Add a drive</Modal.Header>
          <Modal.Body>
            <div className="space-x-6 flex flex-row">
              {JSON.parse(sessionStorage.getItem("available_drives")).map((drive) => {
                return <div className="flex flex-col" onClick={() => window.open(drive.url, '_blank', 'noopener,noreferrer')}>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <img
                      className="mt-3"
                      src={drive.logo}
                      alt={drive.drive}
                      height={70}
                      width={70}
                    />
                  </p>
                  <p className="pl-5 pt-5">{drive.name}</p>
                </div>
              }
              )}
            </div>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
      <Navbar.Collapse>
        <p className="text-lg">{props.pageTitle}</p>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;
