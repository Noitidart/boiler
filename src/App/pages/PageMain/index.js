// @flow

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './Header'
import PageCounter from '../PageCounter'
import PageSettings from '../PageSettings'


import './index.css'

type Props = {|
    // no props
|}

const PAGES = [
    { path:'/'        , label:'Counter' , component:PageCounter  },
    { path:'/settings', label:'Settings', component:PageSettings }
]

class PageMain extends Component<Props> {
    render() {
        return (
            <div className="PageMain">
                <Header pages={PAGES} />
                <div className="PageMain__body">
                    <Switch>
                        { PAGES.map( ({ component, path }) => <Route path={path} key={path} exact component={component} /> ) }
                    </Switch>
                </div>
            </div>
        )
    }
}


export default PageMain
