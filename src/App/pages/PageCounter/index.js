// @flow

import React, { PureComponent } from 'react'

import AppIntro from '../../components/AppIntro'
import Counter from '../../components/Counter'

import './index.css'

type Props = {||}

class PageCounter extends PureComponent<Props> {
    render() {
        return (
            <div>
                <AppIntro>
                    Let&apos;s count... 1.. 2.. 3..
                </AppIntro>
                <Counter />
            </div>
        )
    }
}

export default PageCounter
