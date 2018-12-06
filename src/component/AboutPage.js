import React, { Component } from 'react'

export default class AboutPage extends Component {
    onClick=()=>{
        const{history}=this.props
        history.goBack()
        //histroy.go(-1)
    }
    render() {
        return (
        <div>
            <h1>About Page</h1>
            <button onClick={this.onClick}>goback</button>
        </div>
        )
    }
}
