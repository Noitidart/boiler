// @flow

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import './index.css'

type OwnProps = {|
    pages: { path:string, label:string }[]
|}

type Props = {|
    ...OwnProps,
    // withRouter
    location: *
    // match: *
    // history: *
|}

class NavDumb extends Component<Props> {
    render() {
        const { location, pages } = this.props;

        return (
            <div className="Nav">
                { pages.filter(page => page.label).map( ({path, label}) =>
                    <NavLink className="Nav__link" activeClassName="Nav__link--selected" key={path} to={path} location={location} exact>
                        {label}
                    </NavLink>
                ) }
            </div>
        )
    }
}

const NavRouted = withRouter

const Nav = NavRouted(NavDumb)

export default Nav
