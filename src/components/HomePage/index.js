import React, { Component } from 'react';
import './HomeStyle.css';
import About from '../AboutPage/index.js';
import Skills from '../SkillPage/index.js';
import Portfolios from '../PortfoliosPage/index.js';
import Experience from '../ExperiencePage/index.js';

class HomePage extends Component{
    componentDidMount() {
		this.consoleText(['Hello World.', 'I am JeiLing'], 'text', ['#fc7676', '#e6a8a8']);
    }
    consoleText(words, id, colors) {
        let visible = true;
        let con = document.getElementById('console');
        let letterCount = 1;
        let x = 1;
        let waiting = false;
        let target = document.getElementById(id)
        if (colors === undefined) colors = ['#fff'];
        target.setAttribute('style', 'color:' + colors[0])
        window.setInterval(function () {
          if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
              var usedColor = colors.shift();
              colors.push(usedColor);
              var usedWord = words.shift();
              words.push(usedWord);
              x = 1;
              target.setAttribute('style', 'color:' + colors[0])
              letterCount += x;
              waiting = false;
            }, 1000)
          } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
              x = -1;
              letterCount += x;
              waiting = false;
            }, 1000)
          } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
          }
        }, 120)
        window.setInterval(function () {
          if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;
          } else {
            con.className = 'console-underscore'
            visible = true;
          }
        }, 400)
      }
      render() {
        return (
          <div>
            <div className='console-container'>
              <span id='text'></span>
              <div className='console-underscore' id='console'>&#95;
              </div>
            </div>
            <div className="resume">
              <div className="left">
                <h1>高婕苓</h1>
                <h2>Jei Ling Kao</h2>
                <h4>資訊管理學系</h4>
                <hr />
                <div className="block">
                  <h4>About</h4>
                  <h2>自我介紹</h2>
                  <About />
                </div>
                <div className="block">
                  <h4>Programing Skills</h4>
                  <h2>程式技能</h2>
                  <Skills/>
                </div>
              </div>
              <div className="right">
                <img className='profile' src={process.env.PUBLIC_URL + '/img/jeiling2.jpg'} alt="jeiling" />
                <div className="decoration"></div>
                <ul className="listPortfolio">
                  <h4>Portfolios</h4>
                  <h2>作品集</h2>
                  <Portfolios/>
                  <div className="block">
                    <h4>Experience / Works</h4>
                    <h2>工作經歷</h2>
                    <Experience/>
                  </div>
                  <div className="block">
                    <h4>More About Me</h4>
                    <h2>連結</h2>
                    <div className="buttons">
                      <a className="btn" href="https://github.com/jeiling">GitHub</a>
                    </div>
                  </div>
                  <div className="decoration2"></div>
                  <div className="decoration3">
                  </div>
                </ul>
              </div>
            </div>
          </div>
        );
      }
}
export default HomePage;