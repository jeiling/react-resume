import React, { Component } from 'react';
import './ExperienceStyle.css';

class Experience extends Component{
    render(){
        return(
            <div>
              <ul className="listExperience">
                <li className="year">2018.1<br></br> - 
                  <ul>
                    <li>新生命小組教會 資訊部</li>
                    <li>教會會員管理系統</li>
                    <li>負責內容 : 驗證頁面</li>
                  </ul>
                </li>
                <li className="year">2018.2 <br></br>- <br></br>2018.6
                  <ul>
                    <li>北祥股份有限公司</li>
                    <li>擔任 : 實習生</li>
                    <li>負責內容 : 台灣銀行網頁改版案</li>
                    <li>測試文件製作 檢查功能妥善性、測試程式、學習企業規模MVC架構、協助工程師測試網頁伺服器</li>
                  </ul>
                </li>  
                <li className="year">2017.2 <br></br>- <br></br>2018.1
                  <ul>
                    <li>畢業專題</li>
                    <li>擔任 : 組長 </li>
                    <li>APP作品 : 94要停車</li>
                    <li> 負責內容 : 功能發想、畫面設計、模仿第三方支付功能、文書內容</li>
                  </ul>
                </li>
                <li className="year">2018.7<br></br>- <br></br>2019
                  <ul>
                    <li>英特拉金融科技股份有限公司</li>
                    <li>擔任 : Frontend Engineer APP 工程師</li>
                    <li>負責專案 : Acer 計程車</li>
                    <li> 負責內容 : 撰寫程式、畫面設計、測試程式</li>
                  </ul>
                </li>
              </ul>
            </div>
        );
    }
}
export default Experience;