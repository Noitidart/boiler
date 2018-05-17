// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { up, upAsync, dn } from '../../store/count'

import './index.css'

import type { Shape as AppShape } from '../../store'
import type { Shape as CountShape } from '../../store/count'

type Props = {|
    // connect
    dispatch: Dispatch,
    count: CountShape
|}

class CounterDumb extends Component<Props, void> {
    render () {
        const { count } = this.props;

        return (
            <div>
                <div>
                    Count: {count}
                </div>
                <button onClick={this.handleUp}>Up</button>
                <button onClick={this.handleUpAsync}>Up Async</button>
                <button onClick={this.handleDn}>Dn</button>
            </div>
        )
    }

    handleUp = () => this.props.dispatch(up());
    handleUpAsync = () => this.props.dispatch(upAsync(5));
    handleDn = () => this.props.dispatch(dn());

}

const CounterConnected = connect(
    function({ count }: AppShape) {
        return {
            count
        }
    }
)

const Counter = CounterConnected(CounterDumb)

export default Counter
