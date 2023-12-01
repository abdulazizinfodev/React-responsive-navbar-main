// Typewrit.js
import React, { useEffect } from 'react';
import './typeWriter.css';

const Typewrit = () => {
  useEffect(() => {
    class TxtType {
      constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 1500;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      }

      tick() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

        const that = this;
        let delta = 400 - Math.random() * 100;

        if (this.isDeleting) {
          delta /= 3;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 400;
        }

        setTimeout(() => {
          that.tick();
        }, delta);
      }
    }

    const initializeTypewrits = () => {
      const elements = document.getElementsByClassName('typewrite');
      for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-type');
        const period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
    };

    let cssStyleTag;

    const injectCSS = () => {
      cssStyleTag = document.createElement('style');
      cssStyleTag.type = 'text/css';
      cssStyleTag.innerHTML = `
        .typewrite > .wrap {
          border-right: 0.08em solid #fff;
          font-size: 18px;
          color: #361db5;
        }
        @media screen and (min-width: 601px) and (max-width: 1024px) {
            .typewrite > .wrap {
            font-size: 12px;
         }
        }
      `;
      document.body.appendChild(cssStyleTag);
    };

    initializeTypewrits();
    injectCSS();

    return () => {
      cssStyleTag.innerHTML = '';
    };
  }, []);

  return (
    <p>
      Biz Discord Serverda har kun   
      <a href="" className="typewrite" data-period="2000" data-type='[ " Fikir Almashamiz", " TakeProfit Uramiz", " Birga Rivojlanamiz", " Maqsad Sari Harakat Qilamiz" ]'>
        <span className="wrap"> </span>
      </a>
    </p>
  );
};

export default Typewrit;
