import React, { Component } from 'react'

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError:false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError:true
        }
    }

    componentDidCatch(error,info) {
        console.log("error", error);
        console.log("info", info);
    }
    render() {
        if(this.state.hasError) {
            return <h2>Something went Wrong</h2>
        }
        return (
            <div>
                {this.props.children }
            </div>
        )
    }
}

export default ErrorBoundary

