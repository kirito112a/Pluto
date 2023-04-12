import React from 'react';
import styles from '@/styles/Home.module.css'
import Image from 'next/image';


function Topup() {
    return (
        <>
            <label htmlFor="" className=''><h1>เติมเงิน</h1></label>
            <br></br><br></br>
            <label htmlFor="" className=''><h5>กรุณาเติมเงินตามจำนวนที่ต้องการเติม</h5></label>
            <hr></hr>
            <Image className="img-fluid" src="/scblogo.png" width={50} height={30} alt="img1" ></Image>
            <div className="bankname_account">
                <label htmlFor="" ><b>เมธี หีบหงส์</b></label>
                <label htmlFor="" className='enter_line'><a>797 72 0642</a></label>
            </div>
            <hr></hr>
            <label htmlFor="" ><b>ยอดเงินปัจจุบันของคุณคือ <b className='cradit_total'> 189.20</b> บาท</b></label>
            <hr></hr>
            <label htmlFor="" className=''><b>กรุณาโอนเข้าเลขบัญชีข้างบนนี้ ระบบจะเติมเครดิตโดยอัตโนมัติภายใน 3-5 นาที หากยังไม่ได้รับเครดิตหรือมีปัญหาสงสัย กรุณาติดต่อ ฝ่ายบริการลูกค้า 24 ชม. ขอบพระคุณค่ะ</b></label>
            <label htmlFor="" className=''><b>กรุณาโอนจากบัญชีที่ท่านได้ลงทะเบียนไว้เท่านั้น บริษัทขอสงวนสิทธิ์ในการยกเลิกยอดที่ไม่ได้โอนมาจากบัญชีที่ลงทะเบียนไว้</b></label>
            <br></br><br></br>
        </>
    );
}
export default Topup