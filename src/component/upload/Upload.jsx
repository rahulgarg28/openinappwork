import React from 'react'
import Calender from '../../images/2/Calendar.png'
import Category from '../../images/2/Category.png'
import Chart from '../../images/2/Chart.png'
import Document from '../../images/2/Document.png'
import Notification from '../../images/2/Notification.png'
import Setting from '../../images/2/Setting.png'
import Subtract from '../../images/2/Subtract.png'
import Ticket from '../../images/2/Ticket.png'
import bell from '../../images/2/nav/Vector.png'
import img1 from '../../images/2/nav/image.png'
import ms from '../../images/2/ms.png'
import upload from '../../images/2/upload.png'
import { Link } from 'react-router-dom'

function Upload() {
  return (
    <div className="Upload_con">
      <div className="Upload_main">
        
        <div className="left_up">
          <div className="logo">
            <img src={Subtract} alt="" />
            <h1>Base</h1>
          </div>
          <div className="list">

            <div className="id_list">
              <img src={Category} alt="" />
              <p>Dashboard</p>
            </div>

            <div className="id_list">
              <img src={Chart} alt="" />
              <p className='active'>Upload</p>
            </div> 
            
            <div className="id_list">
              <img src={Ticket} alt="" />
              <p>Invoice</p>
            </div>
            <div className="id_list">
              <img src={Document} alt="" />
              <p>Schedule</p>
            </div>
            <div className="id_list">
              <img className='fil' src={Calender} alt="" />
              <p>Calendar</p>
            </div>
            <div className="id_list">
              <img src={Notification} alt="" />
              <p>Notification</p>
            </div> <div className="id_list">
              <img src={Setting} alt="" />
              <p>Settings</p>
            </div>
          </div>
        </div>
        <div className="right_up">
          <div className="nav">
            <h1>Upload CSV</h1>
            <div className="nav_s">
              <input type="text" name="" id="" />
              <img className='bell' src={bell} alt="" />
              <img className='per' src={img1} alt="" />
            </div>
          </div>
          <div className="right_con">
            <div className="con1">
              <img src={ms} alt="" />
              <p>Drop your excel sheet here or <span>browse</span></p>
            </div>
            <button>
              <img src={upload} alt="" />
              <Link to={'/'} className='up'>Upload</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload