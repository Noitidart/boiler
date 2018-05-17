// @flow

import React, { Component } from 'react'

import { persistor } from '../../store'

import './index.css'

type Props = {|
    // no props
|}

class PageSettings extends Component<Props> {
    render() {
        return (
            <div className="Page">
                <p className="App__intro">
                    Customize your experience ^_^
                </p>
                <div className="SettingsContainer">
                    <div className="SettingRow">
                        <label className="SettingRow__label">
                            Memory
                        </label>
                        <div className="SettingRow__value">
                            <button className="SettingRow__button" href="#" onClick={this.purgeStore}>
                                Clear Memory
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    purgeStore = () => {
        persistor.purge();
        alert('Memory was cleared! On the next load, none of the current state will be restored. Unless you do more actions right now, that will cause the state to be saved again.');
    }
}


export default PageSettings
