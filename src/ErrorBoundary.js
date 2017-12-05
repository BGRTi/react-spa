import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    componentDidCatch(error, info) {
        console.log('error', error);
        console.log('info', info);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1 className='error'>That was an error :C</h1>
                </div>
            )
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
