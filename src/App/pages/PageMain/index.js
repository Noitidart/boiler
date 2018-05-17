// @flow

import React, { Component } from 'react'

import MainRoutes, { PAGES as MAIN_PAGES } from '../../routes/MainRoutes'
import Header from './Header'

import './index.css'

type Props = {|
    // no props
|}

class PageMain extends Component<Props> {
    render() {
        return (
            <div className="PageMain">
                <Header pages={MAIN_PAGES} />
                <MainRoutes />
            </div>
        )
    }
}


export default PageMain
