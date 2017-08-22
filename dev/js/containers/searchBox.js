import React from 'react';
import {pageRepo} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class SearchBox extends React.Component {

    searchText(e) {
        console.log('Value of typeyii: '+e.target.value);
        if(e.target.value) {
            {this.props.pageRepo(e.target.value)}
        }
        else {
            {this.props.pageRepo(" ")}
        }
    }

    render(){
        return(
            <div className="container">
                <span className = "inline format"> Start typing to search for a Facebook page</span>
                <span><input type = 'text' className="form-control" onChange={this.searchText.bind(this)}/></span>
            </div>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({pageRepo:pageRepo},dispatch);
}

function mapStateToProps(state) {
    return {
        //pageList: state.pageList
    };
}

export default connect(mapStateToProps,matchDispatchToProps)(SearchBox);