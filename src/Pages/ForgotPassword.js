import { React, useState } from "react";
import cloud from "../Assets/cloud.png";
import { Button, TextInput, Modal } from "flowbite-react";
import { CiCircleInfo } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
export const ForgotPassword = () => {
    const forgotPassword = (e) => {
        e.preventDefault();

        fetch(process.env.REACT_APP_SERVER + "/forgot-password", {
            method: "POST",
            mode: "cors",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: userEmail }),
        })
            .then((response) => {
                if (response.status === 200)
                    setMessage("Password reset mail has been sent.")
                else
                    setMessage("Password reset email can't be sent. Some error message")
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const [userEmail, setEmail] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [message, setMessage] = useState("")
    const navigate = useNavigate()
    return (
        <div>
            <div className="flex flex-col w-screen h-screen justify-center text-center items-center">
                <form className="flex w-96 flex-col gap-4" onSubmit={forgotPassword}>
                    <div>
                        <div className="w-96 flex flex-col justify-center align-center p-16">
                            <img src={cloud} alt="cloud" />
                            <p className="font-thin text-7xl">Forgot Password</p>
                        </div>
                        <TextInput
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            color=""
                            id="email1"
                            type="email"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <Button
                        color="blue"
                        className="bg-[#5793FB]"
                        type="submit"
                        onClick={() => setOpenModal(true)}
                    >
                        Reset Password
                    </Button>
                    <Modal
                        show={openModal}
                        size="md"
                        onClose={() => setOpenModal(false)}
                        popup
                    >
                        <Modal.Header />
                        <Modal.Body>
                            <div className="text-center">
                                <CiCircleInfo className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                    {message}
                                </h3>
                                <div className="flex justify-center gap-4">
                                    <Button className="bg-[#5793FB]" onClick={() => { setOpenModal(false); navigate("/login") }}>
                                        Okay
                                    </Button>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </form>
            </div>
        </div>
    );
};
