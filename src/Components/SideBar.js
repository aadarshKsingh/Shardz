import { React } from 'react'
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
  fetch(process.env.REACT_APP_SERVER+"/progress",{
    method: "GET",
    headers: { 'Authorization': sessionStorage.getItem('accessToken') },
    body: {"file_id":sessionStorage.getItem("file_id")}
  }).then((response)=>response.json()).then((data)=>{
    sessionStorage.setItem("process",data.process)
    sessionStorage.setItem("progress",data.progress)
    if(data.process!==""){
      setTimeout(() => {
        checkProgress()
      }, 2000);
    }
  }).catch((error)=>{
    console.log(error)
  })
}


export const SideBar = () => {
  const storageData = JSON.parse(sessionStorage.getItem('storage'))
  const addedDrives = (sessionStorage.getItem("addedDrives")).split(",")
  const navigate = useNavigate()
  const { openFilePicker, filesContent, loading } = useFilePicker({
    onFilesSuccessfullySelected: ({ plainFiles, filesContent }) => {
      const files = new FormData()
      filesContent.forEach((fileContent, index) => {
        files.append(`file${index}`, fileContent);
      });

      fetch(process.env.REACT_APP_SERVER + "/upload", {
        method: "POST",
        headers: {
          Authorization: sessionStorage.getItem("accessToken"),
        },
        body: files
      })
        .then((response) => response.json())
        .then(async (data) => {
          sessionStorage.setItem("file_id",data.file_id)
          checkProgress()
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  });
  return (
    <div className='flex flex-row -px-20'><Sidebar className='lg:pr-0 pr-0'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item>
            <Button onClick={() => { openFilePicker() }} className='px-10' color='blue'>Upload</Button>
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
          <Sidebar.Item icon={LuShare2}  >
            <p onClick={() => navigate("/sharedfiles")} className="pr-20">Shared Files</p>
          </Sidebar.Item>
          <Sidebar.Item icon={LuLayers} labelColor="dark" label={addedDrives.length}>
            <p onClick={() => navigate("/drives")} className="pr-20">Drives</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item className="bg-[#5793FB] bg-opacity-20 scale-75 lg:scale-100 lg:mx-0 -mx-8">
            <span className='flex flex-row -mx-3'><LuHardDrive className='h-7 w-7 opacity-60 py-50' /><span className='pl-2'>Storage</span></span>
            <span className='font-thin text-sm pt-3 pb-2'>{storageData.used} of {storageData.total} used</span>
            <span className='pb-5'><Progress progress={storageData.used_percent} color="blue" /></span>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>

  )
}
