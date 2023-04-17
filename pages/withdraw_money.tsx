import React from 'react';
import Image from 'next/image';


function Withdraw_money() {
    return (
        <>
            <label htmlFor="" className=''><h1>ถอนเงิน</h1></label>
            <div className="img_truewallet"> <Image className="img_truewallet_hover img-fluid " src="/truewallet.png" width={150} height={30} alt="img1" ></Image></div>
            <Image className="img-fluid" src="/scblogo.png" width={50} height={30} alt="img1" ></Image>
            <br></br>
            <div className="bankname_account">
                <label htmlFor="" ><b>เมธี หีบหงส์</b></label>
                <label htmlFor="" className='enter_line'><a>797 72 0642</a></label>
            </div>
            <label htmlFor="" className='enter_line'><b>จำนวนเงินที่ต้องการถอน ถอนขั้นต่ำ 50 บาท</b></label>
            <input className='enter_line' type="text" placeholder="บัญชีธนาคาร" name="email" id="email" maxLength={12} required pattern="[0-9]{12}" size={20} />
            <hr></hr>
            <button type="submit" className="registerbtn">ยืนยัน</button>
            <br></br> <br></br>
        </>
    );
}
export default Withdraw_money