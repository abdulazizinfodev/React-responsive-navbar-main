import React, { useState } from "react";
import './Home.css'
import trade from '../../images/5773ddec-frame-37_10gy0j70gr0h0000027000.jpg'
import discord from '../../images/discord.png'
import ReactPlayer from "react-player";
import YourComponent from '../Pages/counterUp1'
import YourComponent2 from '../Pages/counterUp2'
import YourComponent3 from '../Pages/counterUp3'
import YourComponent4 from '../Pages/counterUp4'
import phone from '../../images/fwx.png'
import mail from '../../images/fax.jpg'
import loc from '../../images/location.png'
import instagram1 from '../../images/instagram-svgrepo-com (3).svg'
import telegram from '../../images/telegram-svgrepo-com.svg'
import youtube from '../../images/youtube-svgrepo-com.svg'
import discord1 from '../../images/discord-svgrepo-com.svg'
import video from '../../images/mobile-app-video-new.webm'
import ftmo from '../compon/images/fxm.png'
import xm from '../compon/images/XM-BROKER copy.png'
import mymo from '../compon/images/mym.png'
import { Link } from "react-router-dom";
import robo from '../../images/robo.png';
import online from '../../images/shlyapa.png'
export const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handClick = () => {
    handleOpenModal();
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOutsideClick = (e) => {
    // Agar modal oynasi tashqarisidan boshqa joyga bosilsa, modalni yopish
    if (isModalOpen && !e.target.closest(".modal") && !e.target.closest(".modal-toggle")) {
      setModalOpen(false);
    }
  }





  return (
    <div className="home">
      <div className="wrapper">
        <span className="first-text">NOXON Team bilan o'zingizni</span>
        <ul className="sec-texts">
          <li><span>Erkin</span></li>
          <li><span>Barqaror</span></li>
          <li><span>Baxtli</span></li>
          <li><span>Hotirjam</span></li>
        </ul>
        <span className="first-text">kelajagingizni quring</span>
      </div>
      <div className="mysection">
        <div className="contain">
          <div className="flax">
            <div className="videoMain">
              <video src={video} autoPlay loop muted/>
            </div>
            {/* <img src={trade} alt="" className="flexImg" /> */}
            <div className="clone ">
              <div className="text">
                <h1>DUNYO MIQYOSIDAGI TRADING JAMIYAT</h1>
                <h2>BIZ BILAN TRADING BILIMLARINGIZNI YANGI DARAJAGA OLIB CHIQING</h2>
                <Link to="https://www.noxonfx-platform.com"><button>Hoziroq boshlang</button></Link>

              </div>
              {/* <div className="high"></div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="mycontent">
        <div className="flex-side">
          <div className="video">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=P1wq234sOJQ"
            />
          </div>
          <div className="text1">
            <h2>Bizning obunachilarda</h2>
            <h4><span>√</span>Swing yoki DayTrade uchun strategiyalar</h4>
            <h4><span>√</span> SMC Pro darsliklar</h4>
            <h4><span>√</span>Sodda va Mexanik yo'nalish</h4>
            <h4><span>√</span>Minimum RR 1:4 Entry lar</h4>
            <h4><span>√</span>PropKompaniyalarda savdo qilish</h4>
            <h4><span>√</span>Kasbingizni tark etmagan holda o'rganish</h4>
            <h4><span>√</span>6 no'lga ega hisoblarni boshqarish</h4>
            <h4><span>√</span>Iqtisodiy barqarorlikni ta'minlash</h4>
            <h4><span>√</span>Traderlar uchun tayyorlangan Community</h4>
            <Link to="https://www.noxonfx-platform.com"><button>Hoziroq boshlash</button></Link>


          </div>
        </div>
      </div>

      <div className="products">
        <div className="box box1">
          <img src={discord} alt="" />
          <h3>Discord server</h3>
          <p><span>√</span>kundalik analizlar</p>
          <p><span>√</span>grafikda misollar</p>
          <p><span>√</span> trade recaplar</p>
          <p><span>√</span>trade ideyalar</p>
          <p><span>√</span>pro darsliklar</p>
          <p><span>√</span> trade qo'llanmalar</p>
          <p><span>√</span>qo'shimcha strategiyalar</p>
          <p><span>√</span>premium chatlar</p>
          <p><span>√</span>fundamental yangiliklar</p>
          <p><span>√</span>hamfikr traderlar</p>
          <p><span>√</span>mentorlar</p>
          <p><span>√</span>interaktiv mashqlar</p>
          <p><span>√</span>psixologik yordamlar</p>
          <Link to='/discord'><button>Batafsil</button></Link>

        </div>
        <div className="box box1">
          <img src={online} alt="" />
          <h3>Online Darslik</h3>
          <p><span>√</span>0 dan 100 gacha darslar</p>
          <p><span>√</span>40+ soat darslar</p>
          <p><span>√</span>Mentor yordami</p>
          <p><span>√</span>11 ta modul</p>
          <p><span>√</span>Discord Serverga ulanish</p>
          <p><span>√</span>Teoriya va Grafikda ishlangan darslar</p>
          <p><span>√</span>Grafikda misollar</p>
          <p><span>√</span>Zoom uchrashuvlar</p>
          <p><span>√</span>24/7 online o'rganish</p>
          <p><span>√</span>Istalgan joydan o'rganish imkoniyati</p>
          <p><span>√</span>Davomiy yangi materiallar</p>
          {/* <p><span>√</span>interaktiv mashqlar</p>
            <p><span>√</span>psixologik yordamlar</p> */}
          <Link to='/onlineDars'><button>Batafsil</button></Link>
        </div>
        <div className="box box1">
          <img src={robo} alt="" />
          <h3>Savdo Robotlar</h3>
          <p><span>√</span>70-85% aniqlik</p>
          <p><span>√</span>15-60% oylik davomiy daromad</p>
          <p><span>√</span>Algoritmik g'oyalar</p>
          <p><span>√</span>Minimum , Medium , Agressiv ishlash qobilyati</p>
          <p><span>√</span>Kunlik Limit va Targetda to'xtatish</p>
          <p><span>√</span>PropSho'tlarda ham ishlatish mumkinligi</p>
          <p><span>√</span>Butunlay yoki qisqa muddatlik obuna</p>
          <p><span>√</span>Yarim va To'liq avtomat robotlar</p>
          <p><span>√</span>Vaqtingizni tejash</p>
          {/* <p><span>√</span>Asosiy ishda ishlab turib ham Tradingda daromad qilish</p> */}
          {/* <p><span>√</span>mentorlar</p>
            <p><span>√</span>interaktiv mashqlar</p>
            <p><span>√</span>psixologik yordamlar</p> */}
          <Link to='/' onClick={handClick}><button>Batafsil</button></Link>
        </div>
        <div className="box box1">
          <img src={discord} alt="" />
          <h3>Prop Sho't Xizmatlari</h3>
          <p><span>√</span>Yuqori Aniqlikda imtihondan o'tish</p>
          <p><span>√</span>PropKompaniya haqida ma'lumot berish</p>
          <p><span>√</span>QIsqa muddat ichida real sho'tga ega bo'lish</p>
          <p><span>√</span>PropHisoblardan davomiy daromadda yordam berish</p>
          <p><span>√</span>Realiga o'tganda ham robotlar bilan tanishtirish</p>
          <br />
          {/* <p><span>√</span> trade qo'llanmalar</p>
            <p><span>√</span>qo'shimcha strategiyalar</p>
            <p><span>√</span>premium chatlar</p>
            <p><span>√</span>fundamental yangiliklar</p>
            <p><span>√</span>hamfikr traderlar</p>
            <p><span>√</span>mentorlar</p>
            <p><span>√</span>interaktiv mashqlar</p>
            <p><span>√</span>psixologik yordamlar</p> */}
          <Link to='/' onClick={handClick}><button>Batafsil</button></Link>
        </div>
      </div>

      <div className="natija">
        <h1 className="myh1">Bizning natijalarimiz</h1>
        <div className="results">
          <div className="boxs box-1"><YourComponent /></div>
          <div className="boxs box-1"><YourComponent2 /></div>
          <div className="boxs box-1"><YourComponent3 /></div>
          <div className="boxs box-1"><YourComponent4 /></div>
        </div>
      </div>
      <div className="natija">
        <h1 className="biznigh1">Bizning hamkorlar</h1>
        <div className="bizningXomkorlarBoxs ">
          <img src={ftmo} alt="" />
          <img src={xm} alt="" />
          <img src={mymo} alt="" />
        </div>
      </div>

      <div className="news">
        <div className="ticker-wrap">
          <div className="ticker">
            <div className="ticker__item">Platforma Sinov Muddatida</div>
            <div className="ticker__item">Yangilanish Ishlari Olib Borilmoqda </div>
            <div className="ticker__item">Tez Orada Yangi Imkoniyatlar Kiritiladi</div>
            <div className="ticker__item">Kamchiliklar Uchun Uzr So'raymiz</div>
            <div className="ticker__item">2024 Yildan Yangiliklarni Kutib Qoling!</div>

          </div>
        </div>
      </div>

      <div className="connect">
        <h1 className="myh1">
          Biz bilan bog'lanish
        </h1>
        <div className="fex">
          <div className="frst">
            <h2>Bizga habar jo'nating</h2>
            <p>HAR QANDAY SAVOL-TAKLIFLARINGIZNI BIZGA YOZIB QOLDIRING. IMKON QADAR SIZ BILAN TEZROQ ALOQAGA CHIQAMIZ</p>
            <div className="frx">
              <img src={loc} alt="" />
              <h2>Manzil: <br />Tashkent, O'ZBEKISTON</h2>
            </div>
            <div className="frx">
              <img src={phone} alt="" />
              <h2>Toshkent Filial:<br />+998959805111</h2>
            </div><div className="frx">
              <img src={phone} alt="" />
              <h2>Farg'ona Filial:<br />+998950166968</h2>
            </div>
            <div className="frx">
              <img src={phone} alt="" />
              <h2>Toshkent ICT:<br />+998909656996</h2>
            </div>
            <div className="frx">
              <img src={mail} alt="" />
              <h2>Email: <br />noxonfx@gmail.com</h2>
            </div>
          </div>
          <div className="scnd">
            <div className="ref">
              <input type="text" placeholder="ISMINGIZ" className="myinp" />
              <input type="number" placeholder="TELEFON RAQAM" className="myinp" />
            </div>
            <input type="text" placeholder="MAVZU" className="mavzu" />
            <textarea name="hold" id="" cols="73" rows="10"></textarea>
            <button className="send">Jo'natish</button>
            <div className="icons">
              <Link to="https://discord.gg/gAukeQWZP6"><img src={discord1} alt="" className="discord icnsImg" /></Link>
              <Link to="https://t.me/noxonfx_community"><img src={telegram} alt="" className="telegram icnsImg" /></Link>
              <Link to="https://www.youtube.com/@noxonfx"><img src={youtube} alt="" className="youtube icnsImg" /></Link>
              <Link to="https://instagram.com/noxonfx?igshid=YmMyMTA2M2Y="><img src={instagram1} alt="" className="instagarm icnsImg" /></Link>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <h1>Tez kunda</h1>
          <button onClick={handleCloseModal} className="modal-toggle">yopish</button>
        </div>
      )}
    </div>
  );
};
