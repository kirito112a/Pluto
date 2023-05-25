import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import ProfileMe from "@/pages/profile";
import Friend from "@/pages/friend";
import History_t_y from "@/pages/history_t_w";
import Modal_Boostrap from 'react-bootstrap/Modal';
import SignInFrom from "@/pages/signin";
import RegisterFrom from "@/pages/signUp";


var status = 0;
function Navbar() {
  const [show_signin, setShow_signin] = useState(false);
  const closeModal_signin = () => setShow_signin(false);
  const openModal_signin = () => setShow_signin(true);
  const [show_register, setShow_register] = useState(false);
  const closeModal_register = () => setShow_register(false);
  const openModal_register = () => setShow_register(true);


  return (<>
    <nav className="NavbarMain">
      <div className="logoIMG" > <Image className="img-fluid" src="/Logo.png" width={200} height={"75"} alt="logo"></Image>
      </div>
  


      <Link href="/"className="button_nav1">โอนย้ายสมาชิก</Link>

      <Link href="/"className="button_nav1">ลืมรหัสผ่าน</Link>&nbsp;&nbsp;


      <div >
        <span
          onClick={openModal_signin}>
          <div id="root"></div>
          <button className="button_nav2" type="submit"> เข้าสู่ระบบ </button>
        </span>
        &nbsp;&nbsp;
        <Modal_Boostrap show={show_signin} onHide={closeModal_signin}
          size="lg"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <div className="box_setting">
            <Modal_Boostrap.Body >
              <p className='closeBtn' onClick={closeModal_signin} >
                X
              </p>
              <SignInFrom></SignInFrom>
            </Modal_Boostrap.Body>
          </div>
        </Modal_Boostrap>
      </div>

      <div className="navfooterbar">
        <div className="container">
          <div className="row">
            <ul>
            <li><a className="active col-12" href="#home"> <img className="underbar_img  img-fluid" src="/home.png" alt="img1"  ></img>   <br></br> หน้าแรก</a></li>
              <li><a className="col-12" href="#contact">
              <img className="underbar_img  img-fluid" src="/register.png" alt="img1"  ></img> 
                <span
                  onClick={openModal_register}>
                  <div id="root"></div>
                  สมัครสมาชิก
                </span>
                <Modal_Boostrap show={show_register} onHide={closeModal_register}

                  size="xl"
                  aria-labelledby="example-custom-modal-styling-title"
                >

                  <div className="regis_scope">
                    <Modal_Boostrap.Body >
                      <p className='closeBtn' onClick={closeModal_register} >
                        X
                      </p>
                      <RegisterFrom></RegisterFrom>
                    </Modal_Boostrap.Body>
                  </div>

                </Modal_Boostrap>
              </a>
              </li>
              <li><a className="col-12" href="#news"><span onClick={openModal_signin}>
                <div id="root"></div>
                <img className="underbar_img  img-fluid" src="/home.png" alt="img1"  ></img><br></br> 
                เข้าสู่ระบบ
              </span></a></li>

              <li><a className="col-12" href="#news"><img className="underbar_img  img-fluid" src="/tranfer.png" alt="img1"  ></img><br></br> โอนย้ายสมาชิก </a></li>
              <li><a className="col-12" href="#about"><img className="underbar_img  img-fluid" src="/forgetPW.png" alt="img1"  ></img><br></br>ลืมรหัสผ่าน </a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </>)

}
function Navbar_user()  {
  const [show_w_t, setShow_w_t] = useState(false)
  const [show_friend, setShow_friend] = useState(false);
  const [show_profile, setShow_profile] = useState(false);

  const closeModal_w_t = () => setShow_w_t(false);
  const openModal_w_t = () => setShow_w_t(true);
  const closeModal_friend = () => setShow_friend(false);
  const openModal_friend = () => setShow_friend(true);
  const closeModal_profile = () => setShow_profile(false);
  const openModal_profile = () => setShow_profile(true);

  return (<>
    <nav className="NavbarMain">

      <div className="logoIMG" > <Image className="img-fluid" src="/Logo.png" width={200} height={"75"} alt="logo"></Image>
      </div>
      <div className="show_index_usere">
        <p><b> 0930041321</b></p>
        <p className="amount_money_index"> <b> 189.20</b></p>
        <p className="login_time">4/8/2023, t08.28 PM</p>
      </div>
      <div >
        <span
          onClick={openModal_w_t}
        >
          <div id="root"></div>
          <Link href="#" className="button_nav1" > ประวัติฝาก-ถอน&nbsp;</Link>
        </span>
        <Modal_Boostrap show={show_w_t} onHide={closeModal_w_t}

          size="lg"
          aria-labelledby="example-custom-modal-styling-title"
        >

          <div className="box_setting">
            <Modal_Boostrap.Body >
              <p className='closeBtn' onClick={closeModal_w_t} >
                X
              </p>
              <History_t_y></History_t_y>
            </Modal_Boostrap.Body>
          </div>

        </Modal_Boostrap>
      </div>
      <div >
        <span
          onClick={openModal_friend}
        >
          <div id="root"></div>
          <Link href="#" className="button_nav1" >ชวนเพื่อน&nbsp; </Link>

        </span>

        <Modal_Boostrap show={show_friend} onHide={closeModal_friend}

          size="lg"
          aria-labelledby="example-custom-modal-styling-title"
        >

          <div className="box_setting">
            <Modal_Boostrap.Body >
              <p className='closeBtn' onClick={closeModal_friend} >
                X
              </p>
              <Friend></Friend>
            </Modal_Boostrap.Body>
          </div>

        </Modal_Boostrap>
      </div>



      <div >
        <span onClick={openModal_profile}>
          <div id="root"></div>
          <Link href="#" className="button_nav1" >
            โปรไฟล์ &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16" >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg></Link>
        </span>

        <Modal_Boostrap show={show_profile} onHide={closeModal_profile}

          size="lg"
          aria-labelledby="example-custom-modal-styling-title"
        >

          <div className="box_setting">
            <Modal_Boostrap.Body >
              <p className='closeBtn' onClick={closeModal_profile} >
                X
              </p>
              <ProfileMe></ProfileMe>
            </Modal_Boostrap.Body>
          </div>

        </Modal_Boostrap>
      </div>
      <Link href="/"  > <button className="Logout" type="submit">ออกจากระบบ</button></Link>

      <div className="navfooterbar_phone">
        <div className="container">
          <div className="row justify-content-md-center">
            <ul>
              <li><a className="active col-12" href="#home"> <img className="underbar_img  img-fluid" src="/home.png" alt="img1"  ></img>   <br></br> หน้าแรก</a></li>
              <li><a className="col-12" >
                <div >
                  <span onClick={openModal_w_t}>

                    <img className="underbar_img  img-fluid" src="/wNt.png" alt="img1"  ></img>
                    <br></br>
                    ประวัติฝาก-ถอน

                  </span>
                </div>
              </a></li>
              <li><a className="col-12">   <div >
                <span onClick={openModal_profile}>
                  <div id="root"></div>
                  <img className="underbar_img  img-fluid" src="/profile.png" alt="img1"  ></img>
                  <br></br>
                  โปรไฟล์
                </span>

              </div></a></li>
              <li><a className="col-12" > <span onClick={openModal_friend}>
                <img className="underbar_img img-fluid" src="/friend.png" alt="img1"></img>
                <br></br>

                เชิญชวน
              </span>
              </a></li>

              <li><Link href={'/'} className="col-12"   >  <img className="underbar_img  img-fluid" src="/m8.png" alt="img1"  ></img>  <br></br>ออกจากระบบ</Link></li>

            </ul>
          </div>
        </div>
      </div>
    </nav>



  </>)
}

if (status > 0) {
  var Navbar_Run = Navbar_user;
}
else {
  var Navbar_Run = Navbar;
}

export default Navbar_Run;




