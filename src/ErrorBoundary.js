import { Component } from 'react'; //error boundaries must be class components!!
import { Link, Navigate } from 'react-router-dom';

class ErrorBoundary extends Component {
    state = { hasError: false, redirect: false };
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) { //catches error
        console.error(error, info);
    }

    componentDidUpdate() {   //if component updates (like a use effect that is dependant on something happens)
        if (this.state.hasError) {
            setTimeout(() => {
                this.setState({ redirect: true }), 5000;
            })
        }
    }

    render() {
        if (this.state.redirect) {
            return <Navigate to="/"/>
        }else if (this.state.hasError) {
            return (
                <h2>There was an error! What are we going to do? Sike, {" "}
                    <Link to= "/">Click Here</Link> to go back to homepage.</h2>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;