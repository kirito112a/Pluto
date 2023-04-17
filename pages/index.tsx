/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from "next/link"
import Carousel from 'react-bootstrap/Carousel';
import Marquee from "react-fast-marquee";
import React, { useState } from "react";
import Modal_Boostrap from 'react-bootstrap/Modal';
import Withdraw_money from './withdraw_money'
import Topup from './topuop'
import Game_select from './game_select'
import Promotions from './promotions'
import RegisterFrom from './signUp'

const status = 1;

function Home() {

  const [show_register, setShow_register] = useState(false);

  const closeModal_register = () => setShow_register(false);
  const openModal_register = () => setShow_register(true);

  return (
    <>
      <Head>

        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar ></Navbar>
      
      <div className='container'>

        <section className={styles.sticky}>
          <div className={styles.bubbles}>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
          </div>
        </section>
        <div className={styles.line_icon} > <Image className="img-fluid" src="/line.png" width={70} height={"500"} alt="img1" ></Image>
         
         </div>

        <div className={styles.fly_box}>
          <Marquee gradient={false}> <span>ยินดีต้อนรับเข้าสู่เว็บไซต์ สล็อต คาสิโนออนไลน์ pgauto-108.com พร้อมระบบฝาก-ถอนออโต้ 10 วินาที พนันออนไลน์ อันดับหนึ่ง ให้บริการ สล็อต คาสิโนออนไลน์ เราให้บริการด้านการเดิมพันคาสิโนบนเว็บแบบครบวงจรตลอด 24ชม. </span> </Marquee>
        </div>
        
        <nav className={styles.menu_button}>
        

              <div className={styles.box}>
                <Link href="#promotions" className={styles.gamestart}>โปรโมชัน</Link>
              </div>


          

              <div className={styles.box}>
              <span
                  onClick={openModal_register}
                  className={styles.gamestart}>
                  <div id="root"></div>
                  สมัครสมาชิก
              </span>
                <Modal_Boostrap show={show_register} onHide={closeModal_register} size="xl" aria-labelledby="example-custom-modal-styling-title">

                  <div className={styles.regis_scope}>
                    <Modal_Boostrap.Body >
                      <p className='closeBtn' onClick={closeModal_register} >
                        X
                      </p>
                      <RegisterFrom></RegisterFrom>
                    </Modal_Boostrap.Body>
                  </div>

                </Modal_Boostrap>
              </div>

              <div className={styles.box}>

                <Link href="" className={styles.gamestart} > ติดต่อ</Link>
              </div>
       

          </nav>


        <div className={styles.container}>

          <div className={styles.imgmain1} > <Image className="img-fluid" src="/present.png" width={9000} height={"500"} alt="img1" ></Image>
         
          </div>



        </div>
        <div className={styles.imgmain2} > <Image className="img-fluid" src="/promote.png" width={1300} height={"500"} alt="img1" ></Image>
        </div>
        <div className={styles.imgmain2} > <Image className="img-fluid" src="/allgameimg.png" width={1300} height={"500"} alt="img1" ></Image>
        </div>
        <div className={styles.imgmain2} > <Image className="img-fluid" src="/minigmeimg.png" width={1300} height={"500"} alt="img1" ></Image>
        </div>


        <div className={styles.imgmain2} id="promotions" >
          <Carousel fade>
            <Carousel.Item>
              <Image className="img-fluid" src="/freecrdit.png" width={1300} height={"500"} alt="img1" ></Image>

              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image className="img-fluid" src="/pro2.png" width={1300} height={"500"} alt="img1" ></Image>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image className="img-fluid" src="/pro3.png" width={1300} height={"500"} alt="img1" ></Image>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </div>

        <div className={styles.imgmain2} > <Image className="img-fluid" src="/bank_all.png" width={1300} height={"500"} alt="img1" ></Image>
        </div>
      </div>

      <Footer></Footer>
      <div id="root"></div>
    </>)

}

function Home_user() {
 
  const [show_promotions, setShow_promotions] = useState(false);
  const [show_withdraw, setShow_withdraw] = useState(false);
  const [show_topup, setShowtopup] = useState(false);
  const [show_game, setShow_game] = useState(false);

  const closeModal_topup = () => setShowtopup(false);
  const openModal_topup = () => setShowtopup(true);

  const closeModal_withdraw = () => setShow_withdraw(false);
  const openModal_withdraw = () => setShow_withdraw(true);

  const closeModal_promotions = () => setShow_promotions(false);
  const openModal_promotions = () => setShow_promotions(true);

  const closeModal_game = () => setShow_game(false);
  const openModal_game = () => setShow_game(true);

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar></Navbar>
      <div className='container'>

        <section className={styles.sticky}>
          <div className={styles.bubbles}>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
            <div className={styles.bubble}></div>
          </div>
        </section>
        <div className={styles.line_icon} > <Image className="img-fluid" src="/line.png" width={70} height={"500"} alt="img1" ></Image>
         <label>ติดต่อ</label>
         </div>

        <div className={styles.fly_box}>
          <Marquee gradient={false}> <a >ยินดีต้อนรับเข้าสู่เว็บไซต์ สล็อต คาสิโนออนไลน์ pgauto-108.com พร้อมระบบฝาก-ถอนออโต้ 10 วินาที พนันออนไลน์ อันดับหนึ่ง ให้บริการ สล็อต คาสิโนออนไลน์ เราให้บริการด้านการเดิมพันคาสิโนบนเว็บแบบครบวงจรตลอด 24ชม. </a> </Marquee>
        </div>


        <nav className={styles.menu_button}>


  <div className={styles.box}>
    <span
      onClick={openModal_game}
      className={styles.gamestart}>
      <div id="root"></div>
      เริ่มเกม
    </span>
    <Modal_Boostrap show={show_game} onHide={closeModal_game}

      size="xl"
      aria-labelledby="example-custom-modal-styling-title">

      <div className={styles.regis_scope}>
        <Modal_Boostrap.Body >
          <p className='closeBtn' onClick={closeModal_game} >
            X
          </p>
          <Game_select></Game_select>
        </Modal_Boostrap.Body>
      </div>
   
    </Modal_Boostrap>
  </div>



  <div className={styles.box}>
    <span
      onClick={openModal_topup}
      className={styles.gamestart}>
      <div id="root"></div>
      ฝากเงิน
    </span>
    <Modal_Boostrap show={show_topup} onHide={closeModal_topup}
      size="xl" aria-labelledby="example-custom-modal-styling-title">
      <div className={styles.regis_scope}>
        <Modal_Boostrap.Body >
          <p className='closeBtn' onClick={closeModal_topup} >
            X
          </p>
          <Topup></Topup>
        </Modal_Boostrap.Body>
      </div>

    </Modal_Boostrap>
  </div>

  <div className={styles.box}>
    <span
      onClick={openModal_withdraw}
      className={styles.gamestart}>
      <div id="root"></div>
      ถอนเงิน
    </span>
    <Modal_Boostrap show={show_withdraw} onHide={closeModal_withdraw}
      size="xl" aria-labelledby="example-custom-modal-styling-title"
    >

      <div className={styles.regis_scope}>
        <Modal_Boostrap.Body >
          <p className='closeBtn' onClick={closeModal_withdraw} >
            X
          </p>
          <Withdraw_money></Withdraw_money>
        </Modal_Boostrap.Body>
      </div>

    </Modal_Boostrap>
  </div>

  <div className={styles.box}>
    <span
      onClick={openModal_promotions}
      className={styles.gamestart}>
      <div id="root"></div>
      โปรโมชัน
    </span>
    <Modal_Boostrap show={show_promotions} onHide={closeModal_promotions}

      size="xl"
      aria-labelledby="example-custom-modal-styling-title">
      <div className={styles.regis_scope}>
        <Modal_Boostrap.Body >
          <p className='closeBtn' onClick={closeModal_promotions} >
            X
          </p>
          <Promotions></Promotions>
        </Modal_Boostrap.Body>
      </div>

    </Modal_Boostrap>
  </div>


</nav>



        <div className={styles.container}>
          <div className={styles.imgmain1} > <Image className="img-fluid" src="/present.png" width={9000} height={"400"} alt="img1" ></Image>
         
          </div>

        </div>
       
        <div className={styles.imgmain2} > <Image className="img-fluid" src="/promote.png" width={1300} height={"500"} alt="img1" ></Image>
        </div>
        <div className={styles.imgmain2} > <Image className="img-fluid" src="/allgameimg.png" width={1300} height={"500"} alt="img1" ></Image>
        </div>
        <div className={styles.imgmain2} > <Image className="img-fluid" src="/minigmeimg.png" width={1300} height={"500"} alt="img1" ></Image>
        </div>
        <div className={styles.imgmain2} id="promotions" >
          <Carousel fade>
            <Carousel.Item>
              <Image className="img-fluid" src="/freecrdit.png" width={1300} height={"500"} alt="img1" ></Image>

              <Carousel.Caption>
              </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
              <Image className="img-fluid" src="/pro2.png" width={1300} height={"500"} alt="img1" ></Image>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="img-fluid" src="/pro3.png" width={1300} height={"500"} alt="img1" ></Image>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className={styles.imgmain2} > <Image className="img-fluid" src="/bank_all.png" width={1300} height={"500"} alt="img1" ></Image>
        </div>
      </div>
      <Footer></Footer>
      <div id="root"></div>
    </>)

}

if (status > 0) {
  var Home_Run = Home_user;
}
else {
  var Home_Run = Home;
}
export default Home_Run
