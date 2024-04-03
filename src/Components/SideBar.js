import { React, useState } from 'react'
import { Sidebar, Progress, Button } from "flowbite-react"
import {
  LuLayoutDashboard,
  LuFileStack,
  LuShare2,
  LuHardDrive,
  LuLayers,
} from "react-icons/lu"
import { useNavigate } from 'react-router-dom'
import { useFilePicker } from 'use-file-picker';

const checkProgress = () => {
  fetch(process.env.REACT_APP_SERVER + "/progress", {
    method: "GET",
    headers: { 'Authorization': sessionStorage.getItem('accessToken') },
    body: { "file_id": sessionStorage.getItem("file_id") }
  }).then((response) => response.json()).then((data) => {
    sessionStorage.setItem("process", data.process)
    sessionStorage.setItem("progress", data.progress)
    if (data.process !== "Uploaded") {
      setTimeout(() => {
        checkProgress()
      }, 2000);
    }
  }).catch((error) => {
    console.log(error)
  })
}

const byte2gig = (bytes) => {
  return (bytes / (1024 * 1024 * 1024)).toFixed(2);
}

const calculateStoragePercentage = (usedStorage, totalStorage) => {
  return ((usedStorage / totalStorage) * 100).toFixed(2);
};
export const SideBar = () => {
  const [file, setFile] = useState('')
  let storageData = sessionStorage.getItem('storage');

  if (storageData !== "undefined" && storageData !== "") {
    console.log(storageData)
    storageData = JSON.parse(storageData);
  }
  let addedDrives = (sessionStorage.getItem("addedDrives"))
  if (addedDrives != null) {
    addedDrives = (sessionStorage.getItem("addedDrives")).split(",")
  }
  const navigate = useNavigate()
  const { openFilePicker, filesContent, loading } = useFilePicker({
    readAs: "BinaryString",
    onFilesSuccessfullySelected: ({ plainFiles, filesContent }) => {

      const form = new FormData()
      console.log(filesContent[0])
      form.append(`file`, filesContent[0]);

      fetch(process.env.REACT_APP_SERVER + "/upload", {
        method: "POST",
        headers: {
          Authorization: sessionStorage.getItem("accessToken")
        },
        body: form
      })
        .then((response) => response.json())
        .then(async (data) => {
          console.log(data)
          sessionStorage.setItem("file_id", data.file_id)
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  });

  const uploadFile = () => {
    const form = new FormData()
    console.log(file[0])
    form.append(`file`, file[0]);

    fetch(process.env.REACT_APP_SERVER + "/upload", {
      method: "POST",
      headers: {
        Authorization: sessionStorage.getItem("accessToken")
      },
      body: form
    })
      .then((response) => response.json())
      .then(async (data) => {
        console.log(data)
        sessionStorage.setItem("file_id", data.file_id)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <div className='flex flex-row -px-20'><Sidebar className='lg:pr-0 pr-0'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item>
            {/* <Button onClick={() => { openFilePicker() }} className='px-10' color='blue'>Upload</Button> */}
            <div class="container">
              <div class="button-wrap">
                <label class="button" for="upload">Select files</label>
                <input type="file" className='p-4 ml-56' onChange={(e) => {
                  setFile(e.target.files);
                }} />
                <label for="file-picker" id="file-picker-label">Choose a file</label>
              Upload file
              </div>
            </div>
          </Sidebar.Item>
          <Sidebar.Item>
            
            <Button onClick={()=>uploadFile()}>Upload</Button>
          </Sidebar.Item>
          <Sidebar.Item icon={LuLayoutDashboard}>
            <p onClick={() => navigate("/dashboard")} className="pr-20">Dashboard</p>
          </Sidebar.Item>
          <Sidebar.Item
            icon={LuFileStack}
            labelColor="dark"
          >
            <p onClick={() => navigate("/myfiles")} className="pr-20">My Files</p>
          </Sidebar.Item>
          {/* <Sidebar.Item icon={LuShare2}  >
            <p onClick={() => navigate("/sharedfiles")} className="pr-20">Shared Files</p>
          </Sidebar.Item> */}
          <Sidebar.Item icon={LuLayers} labelColor="dark" label={addedDrives === null ? 0 : addedDrives.length}>
            <p onClick={() => navigate("/drives")} className="pr-20">Drives</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item className="bg-[#5793FB] bg-opacity-20 scale-75 lg:scale-100 lg:mx-0 -mx-8">
            <span className='flex flex-row -mx-3'><LuHardDrive className='h-7 w-7 opacity-60 py-50' /><span className='pl-2'>Storage</span></span>
            <span className='font-thin text-sm pt-3 pb-2'>{byte2gig(sessionStorage.getItem("remaining"))} GB of {byte2gig(sessionStorage.getItem("total"))} GB used</span>
            <span className='pb-5'><Progress progress={calculateStoragePercentage(sessionStorage.getItem("total") - sessionStorage.getItem("remaining"), sessionStorage.getItem("total"))} color="blue" /></span>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>

  )
}
