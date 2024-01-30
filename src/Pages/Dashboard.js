import { React, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from "../Components/NavBar";
import { SideBar } from "../Components/SideBar";
import { Table } from 'flowbite-react';
import { OneDrive } from "../Components/OneDrive";
import { GoogleDrive } from "../Components/GoogleDrive";
import { Mega } from "../Components/Mega";
import { Proton } from "../Components/Proton";
import { useSessionStorage } from "react-storage-complete";
export const Dashboard = () => {
  const [accessToken] = useSessionStorage('access_token', '');
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);
  if (accessToken) {
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
                <OneDrive />
                <GoogleDrive />
                <Mega />
                <Proton />
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
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {'A Clockwork Orange (1971) (1080p x265 10bit Tigole).mkv'}
                      </Table.Cell>
                      <Table.Cell></Table.Cell>
                      <Table.Cell>2023-10-10 19:11:43</Table.Cell>
                      <Table.Cell>3.30 GB</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        [DODI] Ghostrunner 2.tar
                      </Table.Cell>
                      <Table.Cell></Table.Cell>
                      <Table.Cell>2023-12-5 17:20:32</Table.Cell>
                      <Table.Cell>21.31 GB</Table.Cell>

                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Heat.1995.Director's.Definitve.Edition.BluRay.A.I.REMASTERED.1080p.x265.10Bit.HEVC.(English 384Kbps DD 5.1).VITOENCODES.mkv
                      </Table.Cell>
                      <Table.Cell></Table.Cell>
                      <Table.Cell>2024-01-15 10:15:24</Table.Cell>
                      <Table.Cell>2.85 GB</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Oppenheimer.2023.IMAX.1080p.10bit.DS4K.BluRay.[Org.DDP5.1-Hindi+DDP5.1-English].ESub.HEVC-The.PunisheR.mkv
                      </Table.Cell>
                      <Table.Cell></Table.Cell>
                      <Table.Cell>2023-11-15 15:20:11</Table.Cell>
                      <Table.Cell>7.75 GB</Table.Cell>

                    </Table.Row>
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
