import React from 'react';
import PageList from '../containers/pageList';
import SearchBox from '../containers/searchBox';
import Header from './Header';
import {Link} from 'react-router-dom';
require('../../scss/style.scss');
const Home = () => (
    <div className = "container-fluid">
        <SearchBox/>
        <PageList/>
    </div>
)

export default Home;