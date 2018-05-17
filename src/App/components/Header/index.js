// @flow

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Nav from './Nav'

import LOGO from './logo.svg'
import './index.css'

type Props = {|
    pages: { path:string, label:string }[]
|}

class Header extends Component<Props> {
    render() {
        const { pages } = this.props;

        return (
            <div className="Header">
                <img src={LOGO} className="Header__logo" alt="This is my apps logo" />
                <h1 className="Header__title">Welcome to React</h1>
                <Nav pages={pages} />
            </div>
        )
    }
}

export default Header
