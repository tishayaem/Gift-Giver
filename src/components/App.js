import React from 'react'

export default class App extends React.Component {
    constructor() {
        super();

        this.state = { gifts: []};
    }
    
    render() {
        return (
            <div>
                <h2>Gift Giver</h2>
            </div>
        )
    }
}