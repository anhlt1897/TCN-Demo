import React from 'react';
import {Router} from 'react-router-dom';
import {connect} from 'react-redux';

import {history} from '../helpers';
import {alertActions, commonActions} from '../actions';
import {RouteWithSubRoutes, routes} from './Routes';

class App extends React.Component {
    constructor(props) {
        super(props);

        const {dispatch} = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    componentDidMount(){
        // let user = JSON.parse(localStorage.getItem('user')); 
        // if(user){
        //     console.log('call init app', user);
        //     const {dispatch} = this.props;
        //     dispatch(commonActions.initRequest(user.token));
        // }
        const {dispatch} = this.props;
        dispatch(commonActions.initRequest("abc"));
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route}/>)}
                </div>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App};