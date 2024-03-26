import { React, useState } from "react";
import { Button, Dropdown, Navbar, Modal, Avatar } from "flowbite-react";
import cloud from "../Assets/cloud.png";
import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
function NavBar(props) {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [driveModal, setDriveModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
    sessionStorage.setItem("useremail", "");
  }
  const handleLogout = () => {
    onCloseModal();
    sessionStorage.setItem("accessToken", "");
    navigate("/login");
  };

  const getOauth = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_SERVER + "/add-storage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: sessionStorage.getItem("accessToken"),
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      sessionStorage.setItem("available_drives", JSON.stringify(data));
      setDriveModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddDrive = async (e) => {
    e.preventDefault();
    await getOauth();
  };

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img src={cloud} className="mr-3 h-6 sm:h-9" alt="Shardz" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Shardz
        </span>
        {props.pageTitle === "Drives" ? (
          <Button
            color="blue"
            className="bg-[#5793FB] ml-24"
            onClick={handleAddDrive}
          >
            Add Drive
          </Button>
        ) : null}
      </Navbar.Brand>
      <div className="flex md:order-2 pl-24">
        <Dropdown
          arrowIcon={false}
          inline
          onClick={openModal}
          label={
            <p className="flex flex-row items-center font-bold">
              <span className="px-5">{sessionStorage.getItem("username")}</span>
              {sessionStorage.getItem("pfp") === "null" ? (
                <FaRegUser />
              ) : (
                <Avatar
                  img={sessionStorage.getItem("pfp")}
                  height="40"
                  width="40"
                  className="ml-5 rounded-full"
                />
              )}
            </p>
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">
              {sessionStorage.getItem("username")}
            </span>
            <span className="block truncate text-sm font-medium">
              {sessionStorage.getItem("useremail")}
            </span>
          </Dropdown.Header>
          <Dropdown.Item onClick={() => navigate("/update-details")}>
            Update Details
          </Dropdown.Item>
          <Dropdown.Item onClick={() => navigate("/update-password")}>
            Update Password
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>
            <p onClick={() => handleLogout}>Sign out</p>
          </Dropdown.Item>
        </Dropdown>
        <Modal show={driveModal} onClose={() => setDriveModal(false)}>
          <Modal.Header>Add a drive</Modal.Header>
          <Modal.Body>
            <div className="space-x-6 flex flex-row">
              {JSON.parse(sessionStorage.getItem("available_drives")) === null
                ? null
                : JSON.parse(sessionStorage.getItem("available_drives")).map(
                    (drive) => {
                      return (
                        <div
                          key={drive.name}
                          className="flex flex-col"
                          onClick={() =>
                            window.open(
                              drive.url,
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }
                        >
                          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            <img
                              className="mt-3"
                              src={drive.logo}
                              alt={drive.drive}
                              height={70}
                              width={70}
                            />
                          </p>
                          <p className="pl-5 pt-5">{drive.name}</p>
                        </div>
                      );
                    }
                  )}
            </div>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
      <Navbar.Collapse>
        <p className="text-lg">{props.pageTitle}</p>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;
