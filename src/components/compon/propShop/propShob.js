import React, { useEffect, useState } from 'react';
import "../odiscardServer/discardServer.css";
import '../odiscardServer/scrol.css'
// import Navbar from "../../NavBar";
import discordComp from "../images/Noutbuk-midDiscord.png";
import analizDiscord from "../images/polni-logosi-yoqDiscord.png";
import Counter1 from "../counterUp/counterUpDiscord1";
import Counter2 from "../counterUp/counterUpDiscord2";
import Counter3 from "../counterUp/counterUpDiscord3";
import Typewriter from '../odiscardServer/typeWriter';
import Typer from '../odiscardServer/typer';

const PropShob = () => {
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
            <div className="discordTxt typewriter">
              <h1>discord serverga xush kelibsiz !</h1>

              <br />
              <p>
                O'rta Osiyo va O'zbekiston bo'ylab 5,000 ga yaqin Traderlarni o'z ichiga jamlagan Discord Trading Community!
              </p>
              <br />
              <Typer />
              <p>sizni ham discordda kutib qolamiz</p>
            </div>
          </div>
          
        </div>
        <div className=' fade-right'>
          <img src={discordComp} className='discoedImg ' />
        </div>
        
      </div>
      <div className="discordServerBoxs flex contain reveal fade-bottom">
        <Counter1 className="counter" />
        <Counter2 className="counter" />
        <Counter3 className="counter" />
      </div>


      <div className="onlineDarspage2 contain">
        <div className="page2Book reveal fade-left">
          <img src={analizDiscord}  className='page2Analiz'/>
        </div>
        <div className="page2Box reveal fade-right" >
          <Typewriter>
            <h1>
              <span>DISCORD</span> HAQIDA
            </h1>
          </Typewriter>
          <p>
            Bu dastur orqali NoxonFX katta oilasiga qo'shilasiz
            va siz kabi maqsad sari intiladigan, doimiy analizlar
            bilan fikr almashadigan, kun davomida savdo bitimlarini
            amalga oshirib daromad qiladigan 2500 dan oshiq traderlar
            safida bo'lasiz
          </p>
          <p>-Kunlik Sessiyalar + Savdo Recap videolar </p>
          <p>-Kunlik Analizlar</p>
          <p>-Savdo g'oyalaringizni Pro Treyderlar bilan almashishi</p>
          <p>-24/7 Mentorlar qo'llab-quvvatlashi</p>
        </div>
      </div>
      <div className="onlinePrice contain reveal fade-bottom">
        <div className="onLPriceH1">
          <h3>DISCORD SERVER</h3>
          <h1>NARXLAR</h1>
          <span></span>
        </div>
        <div className="onlinePriceBoxs ">
          <div className="onlinePriceBox">
            <h2>1 Oylik</h2>
            <p className='tarif'>TA'RIF</p>
            <div className="colum3">
              <p>Noxon Academy 1.0 Telegram Yopiq Darslar </p><br />
              <p>- Haftalik Analizlar</p>
              <p>- EUR/USD</p>
              <p>- AUD/USD</p>
              <p>- GBP/USD</p>
              <p>- XAU/USD</p>
              <p>- Fundamental News</p>
              <p>- Signal</p>
              <p>- Trade Reap</p>
              <p>- Team Setup</p>
              <p>-- Darsliklar --</p>
              <p>- Struktura</p>
              <p>- Supply & Demand</p>
              <p>- OrderFlow</p>
              <p>- Likvidnost</p>
              <p>- Entry</p>
              <p>- PAT</p>
              <p>- Savol & Javob</p>
              <p>-- Community --</p>
              <p>- Boshqalar</p>
              <p>- Premium Chat</p>
              <p>- Team Recap</p>
              <p>- Psixologiya</p>
              <p>- Live Trade</p>
              <p>- Terminlar</p>
              <p>- Killzonalar</p>
              <p>- Likvidnost</p>
              <p>-  Asosiy LQD</p>
              <p>- Premium & Discount</p>
              <p>- OTE</p>
              <p>- Silver Bullet</p>
              <p>-- Trade Floor --</p>
              <p>- Winning Trades</p>
              <p>- Losing Trades</p>
              <p>- Session Markups</p>
            </div>
            <h1>$150</h1>
            <h3>BIR OYLIK TO'LOV</h3>
            <button className="mybtn">Boshlash</button>
          </div>
          <div className="onlinePriceBox">
            <h2>3 Oylik</h2>
            <p className='tarif'>TA'RIF</p>
            <div className="colum3">
              <p>Noxon Academy 1.0 Telegram Yopiq Darslar </p><br />
              <p>- Haftalik Analizlar</p>
              <p>- EUR/USD</p>
              <p>- AUD/USD</p>
              <p>- GBP/USD</p>
              <p>- XAU/USD</p>
              <p>- Fundamental News</p>
              <p>- Signal</p>
              <p>- Trade Reap</p>
              <p>- Team Setup</p>
              <p>-- Darsliklar --</p>
              <p>- Struktura</p>
              <p>- Supply & Demand</p>
              <p>- OrderFlow</p>
              <p>- Likvidnost</p>
              <p>- Entry</p>
              <p>- PAT</p>
              <p>- Savol & Javob</p>
              <p>-- Community --</p>
              <p>- Boshqalar</p>
              <p>- Premium Chat</p>
              <p>- Team Recap</p>
              <p>- Psixologiya</p>
              <p>- Live Trade</p>
              <p>- Terminlar</p>
              <p>- Killzonalar</p>
              <p>- Likvidnost</p>
              <p>-  Asosiy LQD</p>
              <p>- Premium & Discount</p>
              <p>- OTE</p>
              <p>- Silver Bullet</p>
              <p>-- Trade Floor --</p>
              <p>- Winning Trades</p>
              <p>- Losing Trades</p>
              <p>- Session Markups</p>
            </div>
            <h1>$300</h1>
            <h3> <span>$150</span> Saqlab Qolasiz</h3>
            <button className="mybtn">Boshlash</button>
          </div>
          <div className="onlinePriceBox ">
            <h2>6 Oylik</h2>
            <p className='tarif'>TA'RIF</p>
            <div className="colum3">
              <p>Noxon Academy 1.0 Telegram Yopiq Darslar </p><br />
              <p>- Haftalik Analizlar</p>
              <p>- EUR/USD</p>
              <p>- AUD/USD</p>
              <p>- GBP/USD</p>
              <p>- XAU/USD</p>
              <p>- Fundamental News</p>
              <p>- Signal</p>
              <p>- Trade Reap</p>
              <p>- Team Setup</p>
              <p>-- Darsliklar --</p>
              <p>- Struktura</p>
              <p>- Supply & Demand</p>
              <p>- OrderFlow</p>
              <p>- Likvidnost</p>
              <p>- Entry</p>
              <p>- PAT</p>
              <p>- Savol & Javob</p>
              <p>-- Community --</p>
              <p>- Boshqalar</p>
              <p>- Premium Chat</p>
              <p>- Team Recap</p>
              <p>- Psixologiya</p>
              <p>- Live Trade</p>
              <p>- Terminlar</p>
              <p>- Killzonalar</p>
              <p>- Likvidnost</p>
              <p>-  Asosiy LQD</p>
              <p>- Premium & Discount</p>
              <p>- OTE</p>
              <p>- Silver Bullet</p>
              <p>-- Trade Floor --</p>
              <p>- Winning Trades</p>
              <p>- Losing Trades</p>
              <p>- Session Markups</p>
            </div>
            <h1>$500</h1>
            <h3> <span>$400</span> Saqlab Qolasiz</h3>
            <button className="mybtn">Boshlash</button>
          </div>
          <div className="onlinePriceBox">
            <h2>12 Oylik</h2>
            <p className='tarif'>TA'RIF</p>
            <div className="colum3">
              <p>Noxon Academy 1.0 Telegram Yopiq Darslar </p>
              <p>- Haftalik Analizlar</p>
              <p>- EUR/USD</p>
              <p>- AUD/USD</p>
              <p>- GBP/USD</p>
              <p>- XAU/USD</p>
              <p>- Fundamental News</p>
              <p>- Signal</p>
              <p>- Trade Reap</p>
              <p>- Team Setup</p>
              <p>-- Darsliklar --</p>
              <p>- Struktura</p>
              <p>- Supply & Demand</p>
              <p>- OrderFlow</p>
              <p>- Likvidnost</p>
              <p>- Entry</p>
              <p>- PAT</p>
              <p>- Savol & Javob</p>
              <p>-- Community --</p>
              <p>- Boshqalar</p>
              <p>- Premium Chat</p>
              <p>- Team Recap</p>
              <p>- Psixologiya</p>
              <p>- Live Trade</p>
              <p>- Terminlar</p>
              <p>- Killzonalar</p>
              <p>- Likvidnost</p>
              <p>-  Asosiy LQD</p>
              <p>- Premium & Discount</p>
              <p>- OTE</p>
              <p>- Silver Bullet</p>
              <p>-- Trade Floor --</p>
              <p>- Winning Trades</p>
              <p>- Losing Trades</p>
              <p>- Session Markups</p>
            </div>
            <h1>$900</h1>
            <h3> <span>$900</span> Saqlab Qolasiz</h3>
            <button className="mybtn">Boshlash</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropShob;
