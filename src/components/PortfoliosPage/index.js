import React, { Component } from 'react';
import './PortfoliosStyle.css';

class Porfolios extends Component{
    render(){
        return(
        <div>
            <ul className="listPortfolio">
                <li className="scratch">APP
                    <ul>
                        <li>
                            <a className="potfoliohref" href="https://www.youtube.com/embed/hpuBwVP2IEM">94要停車</a>
                            <a className="potfoliohref" href="https://play.google.com/store/apps/details?id=co.intella.Taxi">小黃掃碼通</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        );
    }
}
export default Porfolios;