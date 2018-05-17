// @flow

import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import PageCounter from '../../pages/PageCounter'
import PageSettings from '../../pages/PageSettings'

const PAGES = [
    { path:'/'        , label:'Counter' , component:PageCounter  },
    { path:'/settings', label:'Settings', component:PageSettings }
]

type Props = {||}

class MainRoutesDumb extends Component<Props, void> {
    render() {
        return (
            <Switch>
                { PAGES.map( ({ component, path }) => <Route path={path} key={path} exact component={component} /> ) }
            </Switch>
        )
    }
}

const MainRoutes = withRouter(MainRoutesDumb)

export { PAGES }
export default MainRoutes
