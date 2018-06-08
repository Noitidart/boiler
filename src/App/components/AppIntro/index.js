// @flow

import React, { Component } from 'react'

import './index.css'

type Props = {|
    children: string
|}

class AppIntro extends Component<Props> {
    render() {
        const { children } = this.props;
        return (
            <p className="AppIntro">
                { children }
            </p>
        )
    }
}

export default AppIntro
