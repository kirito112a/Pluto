import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import ProfileMe from "@/pages/profile";
import Friend from "@/pages/friend";
import History_t_y from "@/pages/history_t_w";
import Modal_Boostrap from 'react-bootstrap/Modal';
import SignInFrom from "@/pages/signin";
import RegisterFrom from "@/pages/signUp";

var status = 1;
function Navbar() {
  const [show_signin, setShow_signin] = useState(false);
  const closeModal_signin = () => setShow_signin(false);
  const openModal_signin = () => setShow_signin(true);
  const [show_register, setShow_register] = useState(false);
  const closeModal_register = () => setShow_register(false);
  const openModal_register = () => setShow_register(true);


  return (<>
    <nav>
      <div className="logoIMG" > <Image className="img-fluid" src="/Logo.png" width={200} height={"75"} alt="logo"></Image>
      </div>
      <Link href="/">     <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="homeicon bi bi-house-door-fill" viewBox="0 0 16 16">
        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
      </svg>

        หน้าแรก </Link>
      <Link href="/"> โอนย้ายสมาชิก</Link>
      <Link href="/"> ลืมรหัสผ่าน</Link>
      <div >
        <span
          onClick={openModal_signin}>
          <div id="root"></div>
          <button type="submit">เข้าสู่ระบบ</button>
        </span>
        <Modal_Boostrap show={show_signin} onHide={closeModal_signin}
          size="xl"
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
              <li><a className="active col-12" href="#home">หน้าแรก</a></li>
              <li><a className="col-12" href="#contact">
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
                เข้าสู่ระบบ
              </span></a></li>

              <li><a className="col-12" href="#news">โอนย้ายสมาชิก</a></li>
              <li><a className="col-12" href="#about">ลืมรหัสผ่าน</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </>)

}
function Navbar_user() {
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
    <nav>

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
          <Link href="/">
            ประวัติฝาก-ถอน</Link>
        </span>
        <Modal_Boostrap show={show_w_t} onHide={closeModal_w_t}

          size="xl"
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
          <Link href="/">
            ชวนเพื่อน</Link>
        </span>
        <Modal_Boostrap show={show_friend} onHide={closeModal_friend}

          size="xl"
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
          <Link href="/">
            ข้อมูลส่วนตัว</Link>
        </span>
        <Modal_Boostrap show={show_profile} onHide={closeModal_profile}

          size="xl"
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
      <Link href="/"  >
        <button type="submit">ออกจากระบบ</button></Link>

      <div className="navfooterbar_phone">
        <div className="container">
          <div className="row justify-content-md-center">
            <ul>
              <li><a className="active col-12" href="#home">หน้าแรก</a></li>
              <li><a className="col-12" >
                <div >
                  <span onClick={openModal_w_t}>
                    <div id="root"></div>
                    ประวัติฝาก-ถอน
                  </span>
                </div>
              </a></li>
              <li><a className="col-12">   <div >
                <span onClick={openModal_profile}>
                  <div id="root"></div>
                  ข้อมูลส่วนตัว
                </span>

              </div></a></li>
              <li><a className="col-12" > <span onClick={openModal_friend}>
                <div id="root"></div>
                เชิญชวน
              </span>
              </a></li>
              <li><a className="col-12"   >ออกจากระบบ</a></li>
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

export default Navbar_Run




