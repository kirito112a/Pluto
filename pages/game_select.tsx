import { profile } from 'console';
import Image from 'next/image';
import Table from 'react-bootstrap/Table';
import Link from 'next/link';

function Game_select() {
    return (
        <>     
        <div className='drop_data'>
                <label htmlFor="" className=''><h1>เลือกเกม</h1>  </label>
                <hr></hr>
                <div className="img_truewallet"> <Image className="img_truewallet_hover img-fluid "  src="/betflix.png"  height={100} width={250} alt="img1" ></Image> </div>
                <label htmlFor="" className=''>  <Link href="#"> Betflix</Link> </label>
                <hr></hr>
                <div className="img_truewallet"> <Image className="img_truewallet_hover img-fluid "  src="/spin.png"  height={100} width={250} alt="img1" ></Image> </div>
                <label htmlFor="" className=''>  <Link href="#"> เกมกงล้อ</Link> </label>
            </div>
        </>
    );
}
export default  Game_select