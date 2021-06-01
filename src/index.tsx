import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from '@components/errors/ErrorBoundary'
import App from './App'

const HelloWorld = () => {
    return (
        <ErrorBoundary>
            <App/>
        </ErrorBoundary>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));