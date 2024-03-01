import { React, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from "../Components/NavBar";
import { SideBar } from "../Components/SideBar";
import { Table } from 'flowbite-react';
import { OneDrive } from "../Components/OneDrive";
import { GoogleDrive } from "../Components/GoogleDrive";
import { Mega } from "../Components/Mega";
import { DropBox } from "../Components/DropBox";
import { PCloud } from "../Components/PCloud";

export const Dashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('accessToken')) {
      navigate("/login");
    }
  }, );
  if (sessionStorage.getItem('accessToken')) {
    const recentData = JSON.parse(sessionStorage.getItem("recent")).sort((a, b) => new Date(a.date) - new Date(b.date));
    return (
      <div>
        <header>
          <NavBar pageTitle="Dashboard" />
        </header>
        <div className="flex flex-row">
          <SideBar />
          <div className="">
            <p className="font-bold text-4xl p-5">Dashboard</p>
            <div className="flex flex-col">
              <div className="flex flex-row">
              {JSON.parse(sessionStorage.getItem("drives")).map((drive,index) => {
                if (drive.brand === 'gdrive') {
                 return <GoogleDrive used={drive.used} total={drive.total} used_percent={drive.used_percent} key={index}/>;
                 } else if (drive.brand === 'dropbox') {
                  return <DropBox used={drive.used} total={drive.total} used_percent={drive.used_percent} key={index}/>;
                 } else if (drive.brand === 'onedrive') {
                 return <OneDrive used={drive.used} total={drive.total} used_percent={drive.used_percent} key={index}/>;
                 } else if (drive.brand === 'mega') {
                 return <Mega used={drive.used} total={drive.total} used_percent={drive.used_percent} key={index}/>;
                } else if (drive.brand === 'pcloud') {
                 return <PCloud used={drive.used} total={drive.total} used_percent={drive.used_percent} key={index}/>;
                } else {
                  return null;
            }
           })}

              </div>
              <p className="font-bold text-4xl p-5">Recent Files</p>
              <div className="overflow-x-auto">
                <Table>
                  <Table.Head>
                    <Table.HeadCell>File Name</Table.HeadCell>
                    <Table.HeadCell></Table.HeadCell>
                    <Table.HeadCell>Date</Table.HeadCell>
                    <Table.HeadCell>Size</Table.HeadCell>
                    <Table.HeadCell>
                      <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                  {recentData.map(recent => 
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={recent.id}>
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {recent.name}
                      </Table.Cell>
                      <Table.Cell></Table.Cell>
                      <Table.Cell>{recent.date}</Table.Cell>
                      <Table.Cell>{recent.size}</Table.Cell>
                    </Table.Row>
                   )}
                  </Table.Body>
                </Table>
              </div>
              <div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
