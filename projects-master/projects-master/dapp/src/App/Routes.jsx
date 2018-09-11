import React from 'react';
import {Route} from 'react-router-dom';

import AppLayout from "../views/layouts/AppLayout";
import EmptyLayout from "../views/layouts/EmptyLayout";

import * as Rules from "../config/rules";

import { HomePage, SearchPage, CategoryPage, ProjectDetail } from '../views/pages';

export const routes = [
    {
        path: Rules.ROUTE_HOME,
        exact: true,
        component: HomePage,
        layout: "app",
        isPrivate: false
    }, 
    {
        path: Rules.ROUTE_SEARCH,
        exact: false,
        component: SearchPage,
        layout: "app",
        isPrivate: false
    }
    , {
        path: Rules.ROUTE_CATEGORY + "/:c",
        component: CategoryPage,
        layout: "app",
        exact: false,
        isPrivate: false
    }
    , {
        path: Rules.ROUTE_PROJECT_DETAIL + "/:slug",
        component: ProjectDetail,
        layout: "app",
        exact: false,
        isPrivate: false
    }
    //, {
    //     path: Rules.ROUTE_WALLET,
    //     component: WalletPage,
    //     layout: "app",
    //     exact: false,
    //     isPrivate: true
    // }, {
    //     path: Rules.ROUTE_REFERRAL,
    //     component: ReferralPage,
    //     layout: "app",
    //     exact: false,
    //     isPrivate: true
    // }, {
    //     path: Rules.ROUTE_REGISTER,
    //     component: RegisterPage,
    //     layout: "empty",
    //     exact: false,
    //     isPrivate: false
    // }, {
    //     path: Rules.ROUTE_RECOVER_PASSWORD,
    //     component: ForgetPasswordPage,
    //     layout: "empty",
    //     exact: false,
    //     isPrivate: false
    // }, {
    //     path: Rules.ROUTE_LOGIN,
    //     component: LoginPage,
    //     layout: "empty",
    //     exact: false,
    //     isPrivate: false
    // }
];

export const SubRouteWithSubRoutes = route => (
    <Route
        exact={route.exact}
        path={route.path}
        isPrivate={route.isPrivate}
        render={props => (<route.component {...props} routes={route.routes}/>)}/>
);

export const RouteWithSubRoutes = route => {
    switch (route.layout) {
        case 'app':
            return (
                <AppLayout
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                    routes={route.routes}
                    isPrivate={route.isPrivate}
                    render={props => (<route.component {...props} routes={route.routes}/>)}/>
            );
        case 'empty':
            return (
                <EmptyLayout
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                    routes={route.routes}
                    isPrivate={route.isPrivate}
                    render={props => (<route.component {...props} routes={route.routes}/>)}/>
            );
        default:
            return (
                <EmptyLayout
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                    routes={route.routes}
                    isPrivate={route.isPrivate}
                    render={props => (<route.component {...props} routes={route.routes}/>)}/>
            );
    }
};