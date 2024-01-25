import React from 'react'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import cloud from '../Assets/cloud.png'
function NavBar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="#" className='pl-10'>
        <img src={cloud} className="mr-3 h-6 sm:h-9" alt="Shartz" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Shardz</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <p className='flex flex-row items-center font-bold'>DeFalco64<Avatar className='pl-2' alt="User settings" img="https://1rch2c-my.sharepoint.com/personal/realityislie_1rch2c_onmicrosoft_com/_layouts/15/download.aspx?UniqueId=b0dc6ecd-7327-4c5e-a5bc-8719bb6dda00&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvMXJjaDJjLW15LnNoYXJlcG9pbnQuY29tQDY3YTBlMDNlLWUxYTAtNGMzMS1iZjhkLTYyMjI2NDkyNGY4ZCIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE3MDYxODg4ODIiLCJleHAiOiIxNzA2MTkyNDgyIiwiZW5kcG9pbnR1cmwiOiI2QUVCbGVnS2E1aHQvcGFEU1FVMHVXUVRvaFRSQkVpTTJ3bFBGVGk3SEk4PSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTY1IiwiaXNsb29wYmFjayI6IlRydWUiLCJjaWQiOiJ1R2UzWlhUekFrT2ZDZnVEVE9CWk1nPT0iLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIiwic2l0ZWlkIjoiWmpjeE9HSmxaamN0T1RNNU5DMDBPRGM1TFdFek9EVXRaR0ZoWkROak5XUmhZVEkxIiwiYXBwX2Rpc3BsYXluYW1lIjoiQ2hpaGVpc2VuIEluZGV4IiwiZ2l2ZW5fbmFtZSI6IkZOVSIsImZhbWlseV9uYW1lIjoiTE5VIiwiYXBwaWQiOiI5Mjg0NzJjNS0zMzJlLTRjZmMtYjBmYS1lZDIwNWU3NWEwY2EiLCJ0aWQiOiI2N2EwZTAzZS1lMWEwLTRjMzEtYmY4ZC02MjIyNjQ5MjRmOGQiLCJ1cG4iOiJyZWFsaXR5aXNsaWVAMXJjaDJjLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMkU1MTUyOTkwIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDJlNTE1Mjk5MEBsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLnJlYWQgYWxscHJvZmlsZXMucmVhZCIsInR0IjoiMiIsImlwYWRkciI6IjIwLjE5MC4xNTIuMjQifQ.9oNkz4lIKmIzvx-iRHj_cLICW0NoS2RxtmI0CBjCO5A&ApiVersion=2.0" rounded /></p>
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
        Dashboard
      </Navbar.Collapse>
    </Navbar>
  )
}
export default NavBar