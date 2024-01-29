import React from "react";
import NavBar from "../Components/NavBar";
import { SideBar } from "../Components/SideBar";
import { Card, Progress } from "flowbite-react";
import { DiOnedrive } from "react-icons/di";
import { DiGoogleDrive } from "react-icons/di";
import { SiMega } from "react-icons/si";
import { SiProtondrive } from "react-icons/si";
import { Table } from 'flowbite-react';
export const Dashboard = () => {
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
              <Card className="rounded-3xl shadow-xl px-5 mx-5 bg-gradient-to-r  from-[#0078D4] via-[#1490DF] to-[#28A8EA] opacity-70">
                <DiOnedrive className=" h-36 w-36 invert" />
                <p className="text-2xl -my-2 invert">OneDrive</p>
                <Progress progress={20} className="border" color="blue" />
                <p className="invert opacity-65">200 GB / 1000 GB</p>
              </Card>

              <Card className="rounded-3xl shadow-xl px-5  mx-5 bg-gradient-to-r  from-[#1b9359] via-[#1fa463] to-[#62bf91] opacity-70">
                <DiGoogleDrive className=" h-36 w-36 invert" />
                <p className="text-2xl -my-2 invert">Google Drive</p>
                <Progress progress={4} className="border" color="green" />
                <p className="invert opacity-65">81 GB / 2000 GB</p>
              </Card>

              <Card className="rounded-3xl shadow-xl px-5  mx-5 bg-gradient-to-r  from-[#ca1205] via-[#dd1405] to-[#fa3223] opacity-70">
                <SiMega className=" h-36 w-36 invert" />
                <p className="text-2xl -my-2 invert">MEGA</p>
                <Progress progress={90} className="border" color="red" />
                <p className="invert opacity-65">45 GB / 50 GB</p>
              </Card>

              <Card className="rounded-3xl shadow-xl px-5  mx-5 bg-gradient-to-r  from-[#5948ca] via-[#6351e1] to-[#7262e4] opacity-70">
                <SiProtondrive className=" h-36 w-36 invert" />
                <p className="text-2xl -my-2 invert">Proton</p>
                <Progress progress={40} className="border" color="purple" />
                <p className="invert opacity-65">2 GB / 5 GB</p>
              </Card>
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
};
