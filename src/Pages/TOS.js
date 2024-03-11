import React from 'react'

export const TOS = () => {
    return (
        <div className='flex flex-col w-screen lg:pt-24 pt-5 justify-center items-center lg:px-36 px-5'>
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <div className="text-lg leading-relaxed">
        <p className="mb-4">
          Welcome to Shardz! By using our service, you agree to the following terms and conditions:
        </p>
        <ol className="list-decimal pl-6 mb-4">
          <li className='py-2'>
            <strong>Acceptance of Terms:</strong> By accessing or using our platform, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our service.
          </li>
          <li className='py-2'>
            <strong>File Splitting:</strong> Shardz allows users to upload a file and have it split into smaller parts based on the storage capacity available on different cloud storage providers such as Google Drive, OneDrive, etc. The split files will be stored on the respective cloud storage providers.
          </li>
          <li className='py-2'>
            <strong>User Responsibilities:</strong> You are responsible for the files you upload to Shardz. You must have the necessary rights to upload and split the file, and you must not upload any files that violate any laws or infringe on the rights of others.
          </li>
          <li className='py-2'>
            <strong>Privacy:</strong> We take your privacy seriously and will only use your personal information in accordance with our Privacy Policy. We will not sell or share your information with third parties without your consent.
          </li>
          <li className='py-2'>
            <strong>Limitation of Liability:</strong> Shardz will not be liable for any damages arising from the use of our platform, including but not limited to direct, indirect, incidental, consequential, or punitive damages.
          </li>
          <li className='py-2'>
            <strong>Modification of Terms:</strong> Shardz reserves the right to modify these terms at any time. Any changes will be effective immediately upon posting on our platform. It is your responsibility to review these terms regularly to stay informed of any updates.
          </li>
          <li className='py-2'>
            <strong>Termination:</strong> Shardz reserves the right to terminate your access to our platform at any time, for any reason, without notice.
          </li>
          <li className='py-2'>
            <strong>Governing Law:</strong> These terms are governed by the laws of India. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in India.
          </li>
        </ol>
        <p>If you have any questions or concerns about these terms, please contact us at <a href="mailto:quackquack198@duck.com" className="text-blue-500">contact@email.com</a>. Thank you for using Shardz!</p>
      </div>
        </div>
    )
}
