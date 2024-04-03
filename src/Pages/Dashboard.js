import { React, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBarMobile from "../Components/NavBarMobile";
import { SideBar } from "../Components/SideBar";
import { Table, Button } from 'flowbite-react';
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
    const recentDataString = sessionStorage.getItem("recent_files");
    let recentData = [];
    const drivesDataString = sessionStorage.getItem("drives");

    let drivesData = [];
    if (recentDataString !== "undefined" && recentDataString.length !== 0) {
      console.log(JSON.parse(recentDataString))
      recentData = JSON.parse(recentDataString)
    }
    if (drivesDataString !== "undefined") {
      drivesData = JSON.parse(drivesDataString)
    }

    const downloadFile = async (id, name) => {
      fetch(process.env.REACT_APP_SERVER + "/download", {
        method: "POST",
        headers: {
          Authorization: sessionStorage.getItem("accessToken"),
          "content-type": "application/json",
        },
        body: JSON.stringify({ "file_id": id })
      })
        .then(async (response) => {
          console.log(id)
          const blob = await response.blob();
          const blobUrl = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = blobUrl;
          a.download = name;
          document.body.appendChild(a);
          a.click();
          URL.revokeObjectURL(blobUrl);
        })

        .catch((error) => {
          console.error("Error fetching data:", error);
        });
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
            <p className="font-bold lg:text-4xl text-lg lg:p-5 p-1">Drives</p>
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
                  } else {
                    return null;
                  }
                })}

              </div>
              {<p><p className="font-bold lg:text-4xl text-lg lg:p-5 p-2">Recent Files</p>
                <div className="overflow-x-auto lg:ml-5 ml-5">
                  <Table>

                    <Table.Head>
                      <Table.HeadCell>File Name</Table.HeadCell>
                      <Table.HeadCell></Table.HeadCell>
                      {/* <Table.HeadCell>Date</Table.HeadCell> */}
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
                          {/* <Table.Cell className='whitespace-nowrap'>{recent.date}</Table.Cell> */}
                          <Table.Cell className='whitespace-nowrap'>{(recent.size / 1048576).toFixed(2)} MB</Table.Cell>
                          <Table.Cell className='whitespace-nowrap'><Button onClick={() => downloadFile(recent.id, recent.name)}>Download</Button></Table.Cell>
                        </Table.Row>
                      )}
                    </Table.Body>
                  </Table>
                </div> </p>}
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
