import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Sidebar">


          
          <div className = "closed">
            <div className = "openicon">
              <FaBars onClick={toggleSidebar} />
            </div>
          </div>
          

      {isOpen && (
        <div className="sidebar">
          <div className="sidenav">
            <div className = "closeicon"><AiOutlineClose onClick={toggleSidebar} /></div>
            <h1>My Reports</h1>
            <a href="#" >My Dashboard</a>
            <a href="#">Department</a>
            <a href="#">Skillwise Data</a>
            <a href="#">My Schedule</a>
    
    
            <h1>Assessments</h1>
            <a href="#">Explore Skills</a>
            <a href="#">Placement test</a>
            <a href="#">Pre Assessments</a>
    
            <h1>Organization</h1>
            <a href="#">Assign Skills</a>
            <a href="#">Manage students</a>
            <a href="#">Report</a>
          </div>
          <div className="flex items-center">
        <img className="w-10 h-10 rounded-full mr-4" src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="Avatar of Writer"></img>
          <div className="text-sm">
            <p className={`text-gray-100  leading-none` }>College Admin</p>
            <p className={`text-gray-100  leading-none text-xs mt-1` }>College Admin</p>
            </div>
        </div>          


        </div>
      )}


    </div>
  );
}

export default Sidebar;
