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
import { Box } from "../Components/Box";
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
    const recentDataString = sessionStorage.getItem("recent");
    let recentData = [];
    const drivesDataString = sessionStorage.getItem("drives");

    let drivesData = [];
    if (recentDataString !== "undefined" && recentDataString.length!==0) {
      console.log(recentDataString)
      recentData = JSON.parse(recentDataString).sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    if (drivesDataString !== "undefined") {
      console.log(drivesDataString)
      drivesData = JSON.parse(drivesDataString)
    }


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
                {Object.entries(drivesData).map(([driveKey, driveValue]) => {
                  if (driveValue.drive_name === 'Google Drive') {
                    return <GoogleDrive used={driveValue.used} total={driveValue.total} used_percent={driveValue.used_percent} key={driveKey} />;
                  } else if (driveValue.drive_name === 'Dropbox') {
                    return <DropBox used={driveValue.used} total={driveValue.total} used_percent={driveValue.used_percent} key={driveKey} />;
                  } else if (driveValue.drive_name === 'OneDrive') {
                    return <OneDrive used={driveValue.used} total={driveValue.total} used_percent={driveValue.used_percent} key={driveKey} />;
                  } else if (driveValue.drive_name === 'Mega') {
                    return <Mega used={driveValue.used} total={driveValue.total} used_percent={driveValue.used_percent} key={driveKey} />;
                  } else if (driveValue.drive_name === 'PCloud') {
                    return <PCloud used={driveValue.used} total={driveValue.total} used_percent={driveValue.used_percent} key={driveKey} />;
                  } else if (driveValue.drive_name === 'Box') {
                    return <Box used={driveValue.used} total={driveValue.total} used_percent={driveValue.used_percent} key={driveKey} />; 
                  }else {
                    return null;
                  }
                })}

              </div>
              {recentData.length!==0 ? <p><p className="font-bold lg:text-4xl text-lg lg:p-5 p-2">Recent Files</p>
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
              </div> </p>: null}
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
