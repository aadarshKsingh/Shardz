import React from 'react'

export const PrivacyPolicy = () => {
    return (
        <div className="flex flex-col w-screen pt-24 justify-center items-center px-36">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <div className='items-start'>
          <p className="mb-4">
            This Privacy Policy describes how we collect, use, and disclose information when you use Shardz that utilizes various cloud storage providers. By using our platform, you agree to the collection and use of information as outlined in this policy.
          </p>
    
          <h2 className="text-xl font-bold mt-6 mb-3">Information We Collect</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Personal Information: When you create an account on our platform, we may collect personal information such as your name, email address, and contact details.</li>
            <li>File Information: When you upload files to our platform, we may collect information about the files, including their size, type, and content.</li>
            <li>Usage Information: We may collect information about how you interact with our platform, such as the features you use and the actions you take.</li>
          </ul>
    
          <h2 className="text-xl font-bold mt-6 mb-3">How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>File Splitting: We use the information you provide to split your uploaded files across different cloud storage providers based on their storage capacity.</li>
            <li>Service Improvement: We may use your information to analyze usage patterns and improve our platform's performance and user experience.</li>
            <li>Communication: We may use your contact information to send you updates, notifications, and important information related to our platform.</li>
          </ul>
    
          <h2 className="text-xl font-bold mt-6 mb-3">Information Sharing</h2>
          <p>We may share your information with third-party cloud storage providers to facilitate the file splitting process. However, we will not sell or rent your personal information to third parties for marketing purposes.</p>
    
          <h2 className="text-xl font-bold mt-6 mb-3">Data Security</h2>
          <p>We take appropriate measures to secure your information and protect it from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.</p>
    
          <h2 className="text-xl font-bold mt-6 mb-3">Changes to This Privacy Policy</h2>
          <p>We reserve the right to update or change this Privacy Policy at any time. Any modifications will be effective immediately upon posting on this page. Your continued use of our platform after any changes indicate your acceptance of the updated Privacy Policy.</p>
    
          <p>If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:quackquack198@duck.com" className="text-blue-500">contact@email.com</a>.</p>
    
          <p className="mt-8">Last updated: 25 Feb, 2024</p>
          </div>
        </div>
      );
}
