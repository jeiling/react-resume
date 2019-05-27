import React, { Component } from 'react';
import './SkillStyle.css';

class Skill extends Component{
    render(){
        return(
            <div>
            <ul class="listProgram">
              <li>
              HTML
                <div class="bar">
                  <div class="valueP50"></div>
                </div>
              </li>
              <li>
              JAVA(Android)
                <div class="bar">
                  <div class="valueP80"></div>
                </div>
              </li>
              <li>
              C#(.net)
                <div class="bar">
                  <div class="valueP60"></div>
                </div>
              </li>
              <li>
              MSSQL
                <div class="bar">
                  <div class="valueP50"></div>
                </div>
              </li>
              <li>
              React 持續學習中
                <div class="bar">
                  <div class="valueP40"></div>
                </div>
              </li>  
              <br/>
              
            </ul>
            </div>
        );
    }
}
export default Skill;