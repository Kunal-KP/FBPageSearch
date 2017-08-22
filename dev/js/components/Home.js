import React from 'react';
import PageList from '../containers/pageList';
import SearchBox from '../containers/searchBox';
require('../../scss/style.scss');
const Home = () => (
    <div className = "container-fluid">
        <nav className="navbar navbar-inverse resize-nav">
          <div className="container top">
            <div className="navbar-header">
              <a className="navbar-brand resize" href="#">Welcome to Facebook Page Finder</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </nav>
        <SearchBox/>
        <PageList/>
    </div>
)

export default Home;