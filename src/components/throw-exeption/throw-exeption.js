import React from 'react';

export default class ThrowExeption extends React.Component{
    state = {
        getError:false
    }

    componentDidCatch() {
        console.log('mistake');
    }
    throwExeption() {
        this.setState({
            getError:true
        })
    }

    render() {
        if (this.state.getError) this.foo.bar = 0;

        return (
            <button type="button" className="btn btn-warning btn-lg" onClick={() => this.setState({getError:true})}>
                Throw exception
            </button>

        )
    }
}