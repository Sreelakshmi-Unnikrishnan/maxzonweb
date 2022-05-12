import React from 'react'
import './NavBar.css'
import logo from "./Images/logo.png";
import {AiFillCopyrightCircle} from 'react-icons/ai';
function NavBar() {
  return (
    <div>
            <div class="header">
              <img src={logo}></img>
                <div className='buttons'>
                  <button className='exam' style={{marginLeft:"750px"}}>Exam</button>
                    <button className='examresult' style={{marginLeft:"40px"}}>Exam Result</button>
                    <button className='assignments' style={{marginLeft:"40px"}}>Assignments</button>
                    <button className='studymaterial' style={{marginLeft:"40px"}}>Study Material</button>
                </div>
            </div>
          <div className='banner'>
            <h1>TimeTable</h1>
            <button className='time'><h5 style={{marginTop:"10px",fontSize:"18px"}}>Monday 9am - 10am English</h5>
                <h6 style={{marginTop:"-18px",fontSize:"14px"}}>click to join</h6>
            </button>
          </div>
          <div className='timetable'>
              <table>
                <tr>
                  <th></th>
                  <th>9am-10am</th>
                  <th>10am-11am</th>
                  <th>11am-12pm</th>
                  <th>12pm-1pm</th>
                  <th>1pm-2pm</th>
                  <th>2pm-3pm</th>
                  <th>3pm-4pm</th>
                  <th>4pm-5pm</th>
                </tr>
                <tr>
                  <td>Monday</td>
                  <td style={{backgroundColor:"white"}}>English</td>
                  <td>English</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
          <div className='attend'>
              <h1>Attendence</h1>
              <button className='btns'>
                  <h3 className='presents' style={{marginLeft:"60px",fontSize:"16px",alignItems:"center"}}>March<h3 style={{marginTop:"3px"}}>2022</h3></h3>
                  <div  style={{borderRight:" 2px solid #000000",height:"50px",marginLeft:"100px",marginTop:"14px"}}></div>
                  <h3 className='pres' style={{marginLeft:"140px"}}>Presents <h3 style={{marginTop:"3px"}}>12</h3></h3>
                  <div style={{borderRight:" 2px solid #000000",height:"50px",marginLeft:"100px",marginTop:"14px"}}></div>
                  <h3 className='absents' style={{marginLeft:"140px"}}>Absents <h3 style={{marginTop:"3px"}}>02</h3></h3>
                  <div className='da' style={{borderRight:" 2px solid #000000",height:"50px",marginLeft:"80px",marginTop:"14px"}}></div>
                  <h3 className='holidays'style={{marginLeft:"140px"}}>Holidays <h3 style={{marginTop:"3px"}}>03</h3></h3>
              </button>
            <div className='attendence'>
                  <table className='table'>
                    <tr>
                      <th>Mon</th>
                      <th>Tue</th>
                      <th>Wed</th>
                      <th>Thu</th>
                      <th>Fri</th>
                      <th>Sat</th>
                      <th>Sun</th>
                    </tr>
                    <tr>
                      <td><button className='btn' style={{backgroundColor:"#2BFD72"}}>01</button></td>
                      <td><button className='btn' style={{backgroundColor:"#2BFD72"}}>01</button></td>
                      <td><button className='btn' style={{backgroundColor:"#2BFD72"}}>01</button></td>
                      <td><button className='btn'style={{backgroundColor:"#ED2323"}}>01</button></td>
                      <td><button className='btn' style={{backgroundColor:"#2BFD72"}}>01</button></td>
                      <td><button className='btn'style={{backgroundColor:"#414141",color:"white"}}>01</button></td>
                      <td><button className='btn'style={{backgroundColor:"#414141",color:"white"}}>01</button></td>
                    </tr>
                    <tr>
                      <td><button className='btn'style={{backgroundColor:"#ED2323"}}>01</button></td>
                      <td><button className='btn'>01</button></td>
                      <td><button className='btn'>01</button></td>
                      <td><button className='btn'>01</button></td>
                      <td><button className='btn'>01</button></td>
                      <td><button className='btn'>01</button></td>
                      <td><button className='btn'>01</button></td>
                    </tr>
                    <tr>
                      <td><button className='btn'>01</button></td>
                      <td><button className='btn'>01</button></td>
                      <td><button className='btn'>01</button></td>
                      <td><button className='btn'>01</button></td>
                      <td><button className='btn'>01</button></td>
                      <td><button className='btn'>01</button></td>
                      <td><button className='btn'>01</button></td>
                    </tr>
                    <tr>
                      <td><button className='btn'>01</button></td>
                      <td><button className='btn'>01</button></td>
                      <td><button className='btn'>01</button></td>
                      <td><button className='btn'>01</button></td>
                      <td><button className='btn'>01</button></td>
                      <td><button className='btn'>01</button></td>
                      <td><button className='btn'>01</button></td>
                    </tr>
                  </table>
                <div className='symbols'>
                    <button className='present' style={{backgroundColor:"#2BFD72"}}></button><h3>Present</h3>
                    <button className='absent' style={{backgroundColor:"#ED2323"}}></button><h3>Absent</h3>
                    <button className='holiday' style={{backgroundColor:"#414141"}}></button><h3>Holy day</h3>
                </div>
              </div>
          </div>
      <div className='head'>
        <button className='exam1' style={{marginLeft:"400px"}}>Exam</button>
        <button className='examresult1' style={{marginLeft:"40px"}}>Exam Result</button>
        <button className='assignments1' style={{marginLeft:"40px"}}>Assignments</button>
        <button className='studymaterial1' style={{marginLeft:"40px"}}>Study Material</button>
    </div>
    <div className='footer'>
      <h3>Copyright <AiFillCopyrightCircle /> 2022, Maxzon Academy. All rights reserved.</h3>
    </div>
  </div>  
  )
}

export default NavBar