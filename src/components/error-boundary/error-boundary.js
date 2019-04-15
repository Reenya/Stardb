import React from "react";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        const {hasError} = this.state;
        if (hasError) return <ErrorIndicator/>
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )

    }
}