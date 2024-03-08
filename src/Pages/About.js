import React from 'react'

export const About = () => {
  return (
        <div className="flex flex-col w-screen pt-24 justify-center items-center px-36">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <div className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-4">
          Shardz is a cutting-edge platform that revolutionizes file storage and management by splitting files and distributing them across multiple storage platforms. Our innovative approach allows users to utilize different storage platforms as a collective single storage solution, ensuring enhanced security, reliability, and accessibility for their data.
        </p>

        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          At Shardz, our mission is to empower users with a secure and efficient file storage solution that leverages the power of distributed storage technologies. We aim to simplify the file management process while ensuring data integrity and availability for our users.
        </p>

        <div>
          <h3 className="text-xl font-bold mb-2">Core Values:</h3>
          <ul className="list-disc pl-4">
            <li>Innovation: We are committed to pushing the boundaries of technology to deliver cutting-edge solutions.</li>
            <li>Security: Ensuring the privacy and security of our users' data is our top priority.</li>
            <li>Reliability: We strive to provide a reliable and robust platform that meets the needs of our users.</li>
            <li>Collaboration: We believe in teamwork and collaboration to achieve shared goals and success.</li>
          </ul>
        </div>

        <p className="text-lg mt-4">
          Join us on our mission to transform file storage and management with Shardz!
        </p>
      </div>
    </div>
        </div>
      
  )
}
