import React, {Component} from 'react';
import {connect} from 'react-router-redux';

class Notifications extends Component{
    render(){
        return(
            <div></div>
        )
    }
}

const mapStateToProps = state => ({
    ...state.notificationsReducer
})

const mapDispatchToProps = dispatch => ({
    onLoad: () => getNotifications(),
    dispatch
})

export default Notifications;