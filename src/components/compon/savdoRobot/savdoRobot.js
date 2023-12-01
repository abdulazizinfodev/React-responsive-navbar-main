import React, { useEffect, useState } from 'react';
import '../odiscardServer/discardServer.css'
// import Navbar from '../navbar'
import Robot from '../images/robot-removebg-previewRobot.png'
import headRobot from '../images/robot-bosh-removebg-previewHeADRo.png'
import CounterRobot1 from '../counterUp/counterUpRobot1'
import CounterRobot2 from '../counterUp/counterUpRobot2'
import CounterRobot3 from '../counterUp/counterUpRobot3'

const SavdoRobot = () => {
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
          <div className="discordSto"></div>
          <div className="discordText">
            <div className="discordTxt">
              <h1>ishonchli trading  <br /> savdo roboti</h1>
              <br />
              <p>smc yo'nalishida sizga maslaxatchi <br /> bo'la oladigan shaxsiy robot xizmati</p>
              <br />
            </div>
          </div>
        </div>
        <img src={Robot} className='imgRobot fade-right' />

      </div>
      <div className="discordServerBoxs flex contain reveal fade-bottom">
        <CounterRobot1 className="counter" />
        <CounterRobot2 className="counter" />
        <CounterRobot3 className="counter" />
      </div>
      <div className="onlineDarspage2 contain">
        <div className="page2Book reveal fade-left">
          <img src={headRobot} />
        </div>
        <div className="page2Box reveal fade-right">
          <h1><span>ROBOT</span> HAQIDA</h1>
          <br />
          <h2>Noxon Savdo Roboti:</h2>
          <p>Bizning savdo robotimiz bozor tendentsiyalarini tahlil qilish va avtomatik ravishda savdolarni amalga oshirish uchun ilg'or algoritmlardan foydalanadi. robot bozordagi o'zgarishlarni aks ettirish va uning ish faoliyatini yaxshilash uchun doimiy ravishda yangilanadi.</p>
          <p>- barchasi bizning Robot bilan va albatta tajribaga asoslanib yaratilgan qulay birlashtirilgan sistemada. </p>
        </div>
      </div>
      <div className="onlinePrice contain reveal fade-bottom">
        <div className="onLPriceH1">
          <h3>YORDAMCHI ROBOT</h3>
          <h1>NARXLAR</h1>
          <span></span>
        </div>
        <div className="onlinePriceBoxs">
          <div className="onlinePriceBox">
            <h3>ODDIY</h3>
            <p>TA'RIF</p>
            <h1>$0</h1>
            <h4>BIR  OYLIK  TO'LOV</h4>
            <button className='mybtn'>Boshlash</button>
          </div>
          <div className="onlinePriceBox">
            <h3>PREMIUM</h3>
            <p>TA'RIF</p>
            <h1>$0</h1>
            <h4>UCH  OYLIK  TO'LOV</h4>
            <button className='mybtn'>Boshlash</button>
          </div>
          <div className="onlinePriceBox">
            <h3>PLATINUM</h3>
            <p>TA'RIF</p>
            <h1>$300</h1>
            <h4>LIFE TIME</h4>
            <button className='mybtn'>Boshlash</button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default SavdoRobot;
