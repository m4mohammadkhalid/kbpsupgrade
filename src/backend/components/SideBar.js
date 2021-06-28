import React from 'react'
import { Link } from 'react-router-dom'


const SideBar = () => {
   
    return (
        <>
            
  <div className="sidebar" id="sidebar">
    <div className="sidebar-inner slimscroll">
      <div id="sidebar-menu" className="sidebar-menu">
  
        <ul>
          <li className="menu-title"> 
            <span>Main Menu</span>
          </li>
          <li className="active"> 
            <Link to="/dashboard"><i className="fas fa-th-large" /> <span>Dashboard</span></Link>
          </li>
          <li > 
            <Link to="/Blank"><i className="fas fa-code" /> <span>Blank</span></Link>
          </li>
          <li className="submenu">
         
            <Link  id="basic-nav-dropdown"><i className="fas fa-user-graduate" /> <span> Students</span> <span className="menu-arrow" /></Link>
            <ul>
           

              <li><Link to="/student">Student List</Link></li>
              <li><Link to="studentdetails">Student View</Link></li>
              <li><Link to="/create">Student Add</Link></li>
              <li><Link to="edit-student">Student Edit</Link></li>
            </ul>
        
          </li>

          <li className="submenu">
            <Link to="#"><i className="fas fa-chalkboard-teacher" /> <span> Teachers</span> <span className="menu-arrow" /></Link>
            <ul>
              <li><Link to="teachers">Teacher List</Link></li>
              <li><Link to="teacher-details">Teacher View</Link></li>
              <li><Link to="add-teacher">Teacher Add</Link></li>
              <li><Link to="edit-teacher">Teacher Edit</Link></li>
            </ul>
          </li>
          <li className="submenu">
            <Link to="#"><i className="fas fa-building" /> <span> Departments</span> <span className="menu-arrow" /></Link>
            <ul>
              <li><Link to="departments">Department List</Link></li>
              <li><Link to="add-department">Department Add</Link></li>
              <li><Link to="edit-department">Department Edit</Link></li>
            </ul>
          </li>
          <li className="submenu">
            <Link to="#"><i className="fas fa-book-reader" /> <span> Subjects</span> <span className="menu-arrow" /></Link>
            <ul>
              <li><Link to="subjects">Subject List</Link></li>
              <li><Link to="add-subject">Subject Add</Link></li>
              <li><Link to="edit-subject">Subject Edit</Link></li>
            </ul>
          </li>
          <li className="menu-title"> 
            <span>Management</span>
          </li>
          <li className="submenu">
            <Link to="#"><i className="fas fa-file-invoice-dollar" /> <span> Accounts</span> <span className="menu-arrow" /></Link>
            <ul>
              <li><Link to="fees-collections">Fees Collection</Link></li>
              <li><Link to="expenses">Expenses</Link></li>
              <li><Link to="salary">Salary</Link></li>
              <li><Link to="add-fees-collection">Add Fees</Link></li>
              <li><Link to="add-expenses">Add Expenses</Link></li>
              <li><Link to="add-salary">Add Salary</Link></li>
            </ul>
          </li>
          <li> 
            <Link to="holiday"><i className="fas fa-holly-berry" /> <span>Holiday</span></Link>
          </li>
          <li> 
            <Link to="fees"><i className="fas fa-comment-dollar" /> <span>Fees</span></Link>
          </li>
          <li> 
            <Link to="exam"><i className="fas fa-clipboard-list" /> <span>Exam list</span></Link>
          </li>
          <li> 
            <Link to="event"><i className="fas fa-calendar-day" /> <span>Events</span></Link>
          </li>
          <li> 
            <Link to="time-table"><i className="fas fa-table" /> <span>Time Table</span></Link>
          </li>
          <li> 
            <Link to="library"><i className="fas fa-book" /> <span>Library</span></Link>
          </li>
{/*          <li className="menu-title"> 
            <span>Pages</span>
          </li>
          <li className="submenu">
            <Link to="#"><i className="fas fa-shield-alt" /> <span> Authentication </span> <span className="menu-arrow" /></Link>
            <ul>
              <li><Link to="login">Login</Link></li>
              <li><Link to="register">Register</Link></li>
              <li><Link to="forgot-password">Forgot Password</Link></li>
              <li><Link to="error-404">Error Page</Link></li>
            </ul>
          </li>
          <li> 
            <Link to="blank-page"><i className="fas fa-file" /> <span>Blank Page</span></Link>
          </li>
          <li className="menu-title"> 
            <span>Others</span>
          </li>
          <li> 
            <Link to="sports"><i className="fas fa-baseball-ball" /> <span>Sports</span></Link>
          </li>
          <li> 
            <Link to="hostel"><i className="fas fa-hotel" /> <span>Hostel</span></Link>
          </li>
          <li> 
            <Link to="transport"><i className="fas fa-bus" /> <span>Transport</span></Link>
          </li>
          <li className="menu-title"> 
            <span>UI Interface</span>
          </li>
          <li> 
            <Link to="components"><i className="fas fa-vector-square" /> <span>Components</span></Link>
          </li>
          <li className="submenu">
            <Link to="#"><i className="fas fa-columns" /> <span> Forms </span> <span className="menu-arrow" /></Link>
            <ul>
              <li><Link to="form-basic-inputs">Basic Inputs </Link></li>
              <li><Link to="form-input-groups">Input Groups </Link></li>
              <li><Link to="form-horizontal">Horizontal Form </Link></li>
              <li><Link to="form-vertical"> Vertical Form </Link></li>
              <li><Link to="form-mask"> Form Mask </Link></li>
              <li><Link to="form-validation"> Form Validation </Link></li>
            </ul>
          </li>
          <li className="submenu">
            <Link to="#"><i className="fas fa-table" /> <span> Tables </span> <span className="menu-arrow" /></Link>
            <ul>
              <li><Link to="tables-basic">Basic Tables </Link></li>
              <li><Link to="data-tables">Data Table </Link></li>
            </ul>
          </li>
           
          <li className="submenu">
            <Link to=""><i className="fas fa-code" /> <span>Multi Level</span> <span className="menu-arrow" /></Link>
            <ul>
              <li className="submenu">
                <Link to=""> <span>Level 1</span> <span className="menu-arrow" /></Link>
                <ul>
                  <li><Link to=""><span>Level 2</span></Link></li>
                  <li className="submenu">
                    <Link to=""> <span> Level 2</span> <span className="menu-arrow" /></Link>
                    <ul>
                      <li><Link to="">Level 3</Link></li>
                      <li><Link to="">Level 3</Link></li>
                    </ul>
                  </li>
                  <li><Link to=""> <span>Level 2</span></Link></li>
                </ul>
              </li>
              <li>
                <Link to=""> <span>Level 1</span></Link>
              </li>
            </ul>
          </li> */}
        
        </ul>
      </div>
    </div>
  </div>

        </>
    )
}

export default SideBar
