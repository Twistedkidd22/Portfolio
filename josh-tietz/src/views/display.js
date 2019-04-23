import React, { Component } from 'react'
import Nav from "../Components/nav"

class Display extends Comment{
    constructor(props) {
        super(props),
        this.state = {

        }
    }

    render() {
        let displayedComponent 
        return(
            <div>
                <Nav />
                {displayedComponent}
            </div>
        )
    }
}

export default Display;