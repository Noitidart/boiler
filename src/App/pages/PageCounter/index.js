// @flow

import React, { PureComponent } from 'react'

import Counter from '../../components/Counter'

import './index.css'

class PageCounter extends PureComponent<void, void> {
    render() {
        return (
            <div className="Page">
                <p className="App__intro">
                    Let&apos;s count... 1.. 2.. 3..
                </p>
                <Counter />
            </div>
        )
    }
}

export default PageCounter
