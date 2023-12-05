import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player";
import "./discardServer.css";
import './scrol.css'
// import Navbar from "../../NavBar";
import discordComp from "../images/Noutbuk-midDiscord.png";
// import discord from '../../../images/discord.mp4'
import discordNot from '../images/dISCORDNOUTBOOK.png'
import analizDiscord from "../images/polni-logosi-yoqDiscord.png";
import Counter1 from "../counterUp/counterUpDiscord1";
import Counter2 from "../counterUp/counterUpDiscord2";
import Counter3 from "../counterUp/counterUpDiscord3";
import Typewriter from './typeWriter';
import Typer from './typer';



const DiscardServer = () => {
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
        <div className="flex3  fade-left">
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
        {/* <div className="videoDiscorMain">
              <video src={discord} autoPlay loop muted className='videDiscord'/>
          </div> */}
        {/* <div className='fade-right '>
          <img src={discordNot} className='discoedImg' />
        </div> */}
        {/* <ReactPlayer
              url="https://www.youtube.com/watch?v=P1wq234sOJQ"
            /> */}
        <div className='video2'> 
            <ReactPlayer
              url="https://www.youtube.com/watch?v=P1wq234sOJQ"
            />
          </div>
      </div>
      <div className="discordServerBoxs flex contain reveal fade-bottom">
        <Counter1 className="counter" />
        <Counter2 className="counter" />
        <Counter3 className="counter" />
      </div>


      <div className="onlineDarspage2 contain">
        <div className="page2Book reveal fade-left">
          <img src={analizDiscord} className='page2Analiz' />
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
            <h3 className='tarif'>TA'RIF</h3>
            <div className="colum3">
              <p>Noxon Academy 1.0 Telegram Yopiq Darslar </p><br />
              <p className='middle'><span>√</span>Haftalik Analizlar</p>
              <p><span>√</span>EUR/USD</p>
              <p><span>√</span>AUD/USD</p>
              <p><span>√</span>GBP/USD</p>
              <p><span>√</span>XAU/USD</p>
              <p><span>√</span>Fundamental News</p>
              <p><span>√</span>Signal</p>
              <p><span>√</span>Trade Reap</p>
              <p><span>√</span>Team Setup</p>
              <p className='middle'><span>√</span>Darsliklar</p>
              <p><span>√</span>Struktura</p>
              <p><span>√</span>Supply & Demand</p>
              <p><span>√</span>OrderFlow</p>
              <p><span>√</span>Likvidnost</p>
              <p><span>√</span>Entry</p>
              <p><span>√</span>PAT</p>
              <p><span>√</span>Savol & Javob</p>
              <p className='middle'><span>√</span>Community</p>
              <p><span>√</span>Boshqalar</p>
              <p><span>√</span>Premium Chat</p>
              <p><span>√</span>Team Recap</p>
              <p><span>√</span>Psixologiya</p>
              <p><span>√</span>Live Trade</p>
              <p className='middle'><span>√</span>Strategiyalar</p>
              <p><span>√</span>Terminlar</p>
              <p><span>√</span>Killzonalar</p>
              <p><span>√</span>Likvidnost</p>
              <p><span>√</span>Asosiy LQD</p>
              <p><span>√</span>Premium & Discount</p>
              <p><span>√</span>OTE</p>
              <p><span>√</span>Silver Bullet</p>
              <p className='middle'><span>√</span>Trade Floor</p>
              <p><span>√</span>Winning Trades</p>
              <p><span>√</span>Losing Trades</p>
              <p><span>√</span>Session Markups</p>
            </div>
            <h1>$150</h1>
            <h3>BIR OYLIK TO'LOV</h3>
            <Link to='https://t.me/noxonfx_admin'><button className="mybtn">Boshlash</button></Link>
            
          </div>
          <div className="onlinePriceBox ommabopBox">
            <h2>3 Oylik</h2>
            <h3 className='tarif'>TA'RIF</h3>
            <div className="colum3">
            <p>Noxon Academy 1.0 Telegram Yopiq Darslar </p><br />
              <p className='middle'><span>√</span>Haftalik Analizlar</p>
              <p><span>√</span>EUR/USD</p>
              <p><span>√</span>AUD/USD</p>
              <p><span>√</span>GBP/USD</p>
              <p><span>√</span>XAU/USD</p>
              <p><span>√</span>Fundamental News</p>
              <p><span>√</span>Signal</p>
              <p><span>√</span>Trade Reap</p>
              <p><span>√</span>Team Setup</p>
              <p className='middle'><span>√</span>Darsliklar</p>
              <p><span>√</span>Struktura</p>
              <p><span>√</span>Supply & Demand</p>
              <p><span>√</span>OrderFlow</p>
              <p><span>√</span>Likvidnost</p>
              <p><span>√</span>Entry</p>
              <p><span>√</span>PAT</p>
              <p><span>√</span>Savol & Javob</p>
              <p className='middle'><span>√</span>Community</p>
              <p><span>√</span>Boshqalar</p>
              <p><span>√</span>Premium Chat</p>
              <p><span>√</span>Team Recap</p>
              <p><span>√</span>Psixologiya</p>
              <p><span>√</span>Live Trade</p>
              <p className='middle'><span>√</span>Strategiyalar</p>
              <p><span>√</span>Terminlar</p>
              <p><span>√</span>Killzonalar</p>
              <p><span>√</span>Likvidnost</p>
              <p><span>√</span>Asosiy LQD</p>
              <p><span>√</span>Premium & Discount</p>
              <p><span>√</span>OTE</p>
              <p><span>√</span>Silver Bullet</p>
              <p className='middle'><span>√</span>Trade Floor</p>
              <p><span>√</span>Winning Trades</p>
              <p><span>√</span>Losing Trades</p>
              <p><span>√</span>Session Markups</p>
            </div>
            <h1>$300</h1>
            <h3> <span>$150</span> Saqlab Qolasiz</h3>
            <Link to='https://t.me/noxonfx_admin'><button className="mybtn">Boshlash</button></Link>
          </div>
          <div className="onlinePriceBox ">
            <h2>6 Oylik</h2>
            <h3 className='tarif'>TA'RIF</h3>
            <div className="colum3">
            <p>Noxon Academy 1.0 Telegram Yopiq Darslar </p><br />
              <p className='middle'><span>√</span>Haftalik Analizlar</p>
              <p><span>√</span>EUR/USD</p>
              <p><span>√</span>AUD/USD</p>
              <p><span>√</span>GBP/USD</p>
              <p><span>√</span>XAU/USD</p>
              <p><span>√</span>Fundamental News</p>
              <p><span>√</span>Signal</p>
              <p><span>√</span>Trade Reap</p>
              <p><span>√</span>Team Setup</p>
              <p className='middle'><span>√</span>Darsliklar</p>
              <p><span>√</span>Struktura</p>
              <p><span>√</span>Supply & Demand</p>
              <p><span>√</span>OrderFlow</p>
              <p><span>√</span>Likvidnost</p>
              <p><span>√</span>Entry</p>
              <p><span>√</span>PAT</p>
              <p><span>√</span>Savol & Javob</p>
              <p className='middle'><span>√</span>Community</p>
              <p><span>√</span>Boshqalar</p>
              <p><span>√</span>Premium Chat</p>
              <p><span>√</span>Team Recap</p>
              <p><span>√</span>Psixologiya</p>
              <p><span>√</span>Live Trade</p>
              <p className='middle'><span>√</span>Strategiyalar</p>
              <p><span>√</span>Terminlar</p>
              <p><span>√</span>Killzonalar</p>
              <p><span>√</span>Likvidnost</p>
              <p><span>√</span>Asosiy LQD</p>
              <p><span>√</span>Premium & Discount</p>
              <p><span>√</span>OTE</p>
              <p><span>√</span>Silver Bullet</p>
              <p className='middle'><span>√</span>Trade Floor</p>
              <p><span>√</span>Winning Trades</p>
              <p><span>√</span>Losing Trades</p>
              <p><span>√</span>Session Markups</p>
            </div>
            <h1>$500</h1>
            <h3> <span>$400</span> Saqlab Qolasiz</h3>
            <Link to='https://t.me/noxonfx_admin'><button className="mybtn">Boshlash</button></Link>
          </div>
          <div className="onlinePriceBox">
            <h2>12 Oylik</h2>
            <h3 className='tarif'>TA'RIF</h3>
            <div className="colum3">
            <p>Noxon Academy 1.0 Telegram Yopiq Darslar </p><br />
              <p className='middle'><span>√</span>Haftalik Analizlar</p>
              <p><span>√</span>EUR/USD</p>
              <p><span>√</span>AUD/USD</p>
              <p><span>√</span>GBP/USD</p>
              <p><span>√</span>XAU/USD</p>
              <p><span>√</span>Fundamental News</p>
              <p><span>√</span>Signal</p>
              <p><span>√</span>Trade Reap</p>
              <p><span>√</span>Team Setup</p>
              <p className='middle'><span>√</span>Darsliklar</p>
              <p><span>√</span>Struktura</p>
              <p><span>√</span>Supply & Demand</p>
              <p><span>√</span>OrderFlow</p>
              <p><span>√</span>Likvidnost</p>
              <p><span>√</span>Entry</p>
              <p><span>√</span>PAT</p>
              <p><span>√</span>Savol & Javob</p>
              <p className='middle'><span>√</span>Community</p>
              <p><span>√</span>Boshqalar</p>
              <p><span>√</span>Premium Chat</p>
              <p><span>√</span>Team Recap</p>
              <p><span>√</span>Psixologiya</p>
              <p><span>√</span>Live Trade</p>
              <p className='middle'><span>√</span>Strategiyalar</p>
              <p><span>√</span>Terminlar</p>
              <p><span>√</span>Killzonalar</p>
              <p><span>√</span>Likvidnost</p>
              <p><span>√</span>Asosiy LQD</p>
              <p><span>√</span>Premium & Discount</p>
              <p><span>√</span>OTE</p>
              <p><span>√</span>Silver Bullet</p>
              <p className='middle'><span>√</span>Trade Floor</p>
              <p><span>√</span>Winning Trades</p>
              <p><span>√</span>Losing Trades</p>
              <p><span>√</span>Session Markups</p>
            </div>
            <h1>$900</h1>
            <h3> <span>$900</span> Saqlab Qolasiz</h3>
            <Link to='https://t.me/noxonfx_admin'><button className="mybtn">Boshlash</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscardServer;
