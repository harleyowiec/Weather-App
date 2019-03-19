import React, { Component } from 'react';

import Navbar from '../components/navbar/Navbar';

import classes from './Layout.module.css';

class Layout extends Component {

    render() {
        return (
            <>
                <Navbar />
                <main className={classes.Container}>
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default Layout;