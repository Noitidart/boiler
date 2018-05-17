// @flow

import './boot'

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from './store'

import PageMain from './pages/PageMain'

import './index.css'

class App extends Component<{||}> {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <PageMain />
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App
