import React from 'react';
import {Link} from 'react-router-dom';
import Body from './Body';
export default function(){
    return (
        <div>
            <nav className="navbar navbar-inverse resize-nav">
                  <div className="container top">
                    <div className="navbar-header">
                      <a className="navbar-brand resize" href="#">Welcome to Facebook Page Finder</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                      <li className="active"><Link to='/home'>Home</Link></li>
                      <li><Link to='/services'>Services</Link></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Contact Us</a></li>
                    </ul>
                  </div>
            </nav>
            <Body/>
         </div>

    )
}
