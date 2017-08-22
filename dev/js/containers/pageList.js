import React from 'react';
import {showFav} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';

class PageList extends React.Component {

    componentWillMount() {
        {this.props.showFav()}
    }
    addFav(name,id) {
        console.log('Name selected is: '+name);
        if(localStorage.getItem('favList')) {
            var fav = JSON.parse(localStorage.getItem('favList'));
            var i =0;
            for(; i<fav.length; i++){
                if(fav[i].id == id){
                    break;
                }
            }
            if(i == fav.length) {
                var ob = {};
                ob.id = id;
                ob.name = name;
                fav.push(ob);
                localStorage.setItem('favList',JSON.stringify(fav));
            }
        }
        else {
            var favList=[];
            var obj ={};
            obj.id = id;
            obj.name = name;
            favList.push(obj);
            localStorage.setItem('favList',JSON.stringify(favList));
        }
        {this.props.showFav()}
    }

    removeFav(name,id) {
        var fav = JSON.parse(localStorage.getItem('favList'));
        var i =0;
        for(; i<fav.length; i++){
            if(fav[i].id == id){
                fav.splice(i,1);
                localStorage.setItem('favList',JSON.stringify(fav));
            }
        }
        {this.props.showFav()}
    }

    showList() {
        return this.props.pageList.map((obj) => {
            return(
                <div key={obj.id}>
                    <span className = "inline"><h3>{obj.name}</h3></span>
                    <span>
                        <a href="#" data-toggle="tooltip" title="Add to Favourite" onClick={()=>this.addFav(obj.name,obj.id)}><img src='img/fav.png' width='30px'/></a>
                    </span>
                </div>
            );
        });
    }

    showFavList() {
        if(this.props.favList){
            return this.props.favList.map((fav) => {
                    return (
                    <div key={fav.id}>
                        <span className="inline"><h3>{fav.name}</h3></span>
                        <span><a href="#" data-toggle="tooltip" title="Remove from Favourite" onClick={()=>this.removeFav(fav.name,fav.id)}><img src='img/unfav.png' width='30px'/></a></span>
                    </div>
                    )
                });
        }
        else {
            return;
        }

    }
    render() {
        if(!this.props.pageList){
            return (
            <div className="container">
               <div className="leftDiv">
                <center>
                     <p className="content-head">Pages Found</p>
                     <img src="gears.gif"/>
                </center>
               </div>
               <div className = "rightDiv">
               <center>
                    <p className="content-head">My Favourite Pages</p>
               </center>
                   {this.showFavList()}
               </div>
            </div>
            )
        }
        return (
            <div className="container">
                <div className = "leftDiv">
                <center>
                <p className="content-head">Pages Found</p>
                </center>
                {this.showList()}
                </div>
                <div className = "rightDiv">
                <center>
                <p className="content-head">My Favourite Pages</p>
                </center>
                {this.showFavList()}
                </div>
                <div className = "clear">
                </div>
            </div>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({showFav:showFav},dispatch);
}

function mapStateToProps(state) {
    return {
        pageList: state.pageList,
        favList: state.favList
    };
}
export default connect(mapStateToProps,matchDispatchToProps)(PageList);