import React from 'react'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import cloud from '../Assets/cloud.png'

function NavBar(props) {
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
            <p className='flex flex-row items-center font-bold'>DeFalco64<Avatar className='pl-2' alt="User settings" img="https://i.ibb.co/17xBQBr/IMG-20240125-184804-539.jpg" rounded /></p>
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">DeFalco64</span>
            <span className="block truncate text-sm font-medium">defalco64@shitposter.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
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