import React, { Component } from 'react'
import Header from './Header';
import Main from './Main';
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}
