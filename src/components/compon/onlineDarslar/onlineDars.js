import React, { useEffect, useState } from 'react';
import '../odiscardServer/discardServer.css'
// import Navbar from '../../NavBar'
import Comp from '../images/Noutbuk.png'
import Book from '../images/disk-toplamOnlaniDars.png'
import Counter from "../counterUp/counterUpBoxOnlineDars";
import Counter1 from "../counterUp/counterUpBoxOnlineDars1";
import Counter2 from "../counterUp/counterUpBoxOnlineDars2";
import Typewriter from '../odiscardServer/typeWriter'
import { Link } from 'react-router-dom';


const OnlineDarslar = () => {
  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener("scroll", reveal);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []); // Empty dependency array ensures the effect runs once after mount

  return (
    <div>
      {/* <Navbar /> */}
      <div className="discordServer flex contain">
        <div className="flex3 fade-left">
          {/* <div className="discordSto"></div> */}
          <div className="discordText">
            <div className="discordTxt">
              <Typewriter>
                <h1>YUQORI SIFATDAGI</h1>
              </Typewriter>
              <h1>ONLINE TA'LIM</h1>
              <br />
              <p>
                3 YILLIK TAJRIBA VA RRO USTOZLARDAN OLINGAN BILIMLAR JAMLANMASI, <br />
                10000 SOATLAB REAL VA BACKTEST ORQALI SINALGAN DARSLIKLAR JAMLANMASI
              </p>
              <br />
            </div>
          </div>
        </div>
        <img src={Comp} className='OnlineImg reveal fade-right' />

      </div>
      <div className="discordServerBoxs flex contain fade-bottom">
        <Counter className="counter" />
        <Counter1 className="counter" />
        <Counter2 className="counter" />
      </div>
      <div className="onlineDarspage2 contain">
        <div className="page2Book reveal fade-left">
          <img src={Book} />
        </div>
        <div className="page2Box reveal fade-right">
          <Typewriter>
            <h1><span>KURS</span> HAQIDA</h1>
          </Typewriter>

          <h2>ONLINE TRADING KURS:</h2>
          <p>TAJRIBALI MUTAXXASISLARLARDAN CHUQUR TEXNIK TAHLILNI QANDAY AMALGA OSHIRISHNI VA TURLI BOZOR SHAROITLARIDAN YILLAR DAVOMIDA QAY TARZDA DAVOMLI FOYDA OLISHINI VAQTNI TEJASGAN HOLDA O'RGANING VA PROFITLI SAVDO JARAYONINGIZNI TEZLASHTIRING.</p>
          <p>-DAROMADINGIZNI OSHIRING</p>
          <p>-BILMINGIZNI KENGAYTIRING</p>
          <p>-ISH VAQTINGIZNI QISQARTIRING</p>
        </div>
      </div>
      <div className="onlinePrice contain reveal fade-bottom ">
        <div className="onLPriceH1 contain">
          <h3>ONLINE DARS</h3>
          <h1>NARXLAR</h1>
          <span></span>
        </div>
        <div className="onlinePriceBoxs flex contain grid-container">
          <div className="onlinePriceBox">
            <h2>3 Oylik</h2>
            <h3 className='tarif'>TA'RIF</h3>
            <div className="colum3">
              <p><span>√</span> 1 oylik discord server (<span>-150$</span>)</p>
              <p><span>√</span> 1 oylik mentor yordami</p>
              <p><span>√</span> 10 ta bo'lim </p>
              <p><span>√</span> 50+ darslar</p>
              <p></p>
              <p>0. Intro Kirish</p>
              <p>1. Trading Sohasi 0 dan</p>
              <p>2. Bozor Strukturasi</p>
              <p>3. Supply va Demand</p>
              <p>4. OrderFlow</p>
              <p>5. Likvidnost</p>
              <p>6. Entry</p>
              <p>7. Psixologiya</p>
              <p>8. Trade Recaps</p>
              <p>9. Qo'shimcha Materiallar</p>
              <p>10. Fake-Choch oldini olish (2024)</p>
            </div>
            <h1>$299</h1>
            <Link to='https://t.me/noxonfx_uzbot'><button className="mybtn">Boshlash</button></Link>
            
          </div>
          <div className="onlinePriceBox ommabopBox">
            <h2>6 Oylik</h2>
            <h3 className='tarif'>TA'RIF</h3>
            <div className="colum3">
              <p><span>√</span> 1 oylik discord server  (<span>-300$</span>)</p>
              <p><span>√</span> 1 oylik mentor yordami</p>
              <p><span>√</span> 10 ta bo'lim </p>
              <p><span>√</span> 50+ darslar</p>
              <p></p>
              <p>0. Intro Kirish</p>
              <p>1. Trading Sohasi 0 dan</p>
              <p>2. Bozor Strukturasi</p>
              <p>3. Supply va Demand</p>
              <p>4. OrderFlow</p>
              <p>5. Likvidnost</p>
              <p>6. Entry</p>
              <p>7. Psixologiya</p>
              <p>8. Trade Recaps</p>
              <p>9. Qo'shimcha Materiallar</p>
              <p>10. Fake-Choch oldini olish (2024)</p>
            </div>
            <h1>$399</h1>
            
            <Link to='https://t.me/noxonfx_uzbot'><button className="mybtn">Boshlash</button></Link>
          </div>
          <div className="onlinePriceBox">
            <h2>12 Oylik</h2>
            <h3 className='tarif'>TA'RIF</h3>
            <div className="colum3">
              <p><span>√</span> 1 oylik discord server  (<span>-500$</span>)</p>
              <p><span>√</span> 1 oylik mentor yordami</p>
              <p><span>√</span> 10 ta bo'lim </p>
              <p><span>√</span> 50+ darslar</p>
              <p></p>
              <p>0. Intro Kirish</p>
              <p>1. Trading Sohasi 0 dan</p>
              <p>2. Bozor Strukturasi</p>
              <p>3. Supply va Demand</p>
              <p>4. OrderFlow</p>
              <p>5. Likvidnost</p>
              <p>6. Entry</p>
              <p>7. Psixologiya</p>
              <p>8. Trade Recaps</p>
              <p>9. Qo'shimcha Materiallar</p>
              <p>10. Fake-Choch oldini olish (2024)</p>
            </div>
            <h1>$499</h1>
            
            <Link to='https://t.me/noxonfx_uzbot'><button className="mybtn">Boshlash</button></Link>
          </div>
          <div className="onlinePriceBox">
            <h2>12 Oylik</h2>
            <h3 className='tarif pro'>PRO</h3>
            <div className="colum3">
              <p><span>√ </span>Barcha Qulayliklar Ichida Jamlangan</p>
              <p><span>√ </span>Doniyor Niyozov bilan 3 Oy Davomida Xaftasiga 1 marotaba ofline Suhbat</p>
              <p><span>√ </span>Bilimlarni Mustaxkamlash</p>
              <p><span>√ </span>Barcha Qiziqtirgan Savollaringizga Javob olishingiz mumkin</p>
            </div>
            <h1 className='pro990'>$990</h1>
            <h3></h3>
            <Link to='https://t.me/noxonfx_uzbot'><button className="mybtn">Boshlash</button></Link>
          </div>
        </div>
      </div>

    </div>

  )
}

export default OnlineDarslar
