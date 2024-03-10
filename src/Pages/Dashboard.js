import { React, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBarMobile from "../Components/NavBarMobile";
import { SideBar } from "../Components/SideBar";
import { Table } from 'flowbite-react';
import { OneDrive } from "../Components/OneDrive";
import { GoogleDrive } from "../Components/GoogleDrive";
import { Mega } from "../Components/Mega";
import { DropBox } from "../Components/DropBox";
import { PCloud } from "../Components/PCloud";
import { BrowserView, MobileView } from 'react-device-detect';
import NavBar from '../Components/NavBar';
export const Dashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('accessToken')) {
      navigate("/login");
    }
  },);
  if (sessionStorage.getItem('accessToken')) {
    const recentData = JSON.parse(sessionStorage.getItem("recent")).sort((a, b) => new Date(a.date) - new Date(b.date));
    return (
      <div className='-mb-96'>
        <header>
          <BrowserView><NavBar pageTitle="Dashboard" />
          </BrowserView>
          <MobileView>
            <NavBarMobile pageTitle="Dashboard" />

          </MobileView>
        </header>
        <div className="flex flex-row">
          <BrowserView>
            <SideBar />
          </BrowserView>
          <div className="lg:m-0 -ml-0">
            <p className="font-bold lg:text-4xl text-lg lg:p-5 p-1">Dashboard</p>
            <div className="flex flex-col">
              <div className="flex lg:flex-row flex-col">
                {JSON.parse(sessionStorage.getItem("drives")).map((drive, index) => {
                  if (drive.brand === 'gdrive') {
                    return <GoogleDrive used={drive.used} total={drive.total} used_percent={drive.used_percent} key={index} />;
                  } else if (drive.brand === 'dropbox') {
                    return <DropBox used={drive.used} total={drive.total} used_percent={drive.used_percent} key={index} />;
                  } else if (drive.brand === 'onedrive') {
                    return <OneDrive used={drive.used} total={drive.total} used_percent={drive.used_percent} key={index} />;
                  } else if (drive.brand === 'mega') {
                    return <Mega used={drive.used} total={drive.total} used_percent={drive.used_percent} key={index} />;
                  } else if (drive.brand === 'pcloud') {
                    return <PCloud used={drive.used} total={drive.total} used_percent={drive.used_percent} key={index} />;
                  } else {
                    return null;
                  }
                })}

              </div>
              <p className="font-bold lg:text-4xl text-lg lg:p-5 p-2">Recent Files</p>
              <div className="overflow-x-auto lg:ml-5 ml-5">
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
                  <Table.Body className="divide-x-0">
                    {recentData.map(recent =>
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={recent.id}>
                        <Table.Cell className="whitespace-nowrap p-1  text-gray-900 dark:text-white">
                          {recent.name}
                        </Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell className='whitespace-nowrap'>{recent.date}</Table.Cell>
                        <Table.Cell className='whitespace-nowrap'>{recent.size}</Table.Cell>
                      </Table.Row>
                    )}
                  </Table.Body>
                </Table>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
