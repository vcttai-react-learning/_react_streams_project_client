import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
            PageOne
            {/* USING <a> TAG IS A BAD NAVIGATION */}
            {/* <a href='/pagetwo'>To pagetwo</a> */}
            <br />
            <Link to='/pagetwo'>To pagetwo</Link>
        </div>
    );
}

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <br />
            <Link to='/'>To pageone</Link>
        </div>
    );
}

class App extends React.Component
{
    render() {
        return (            
            <div>
                <BrowserRouter>
                    <Route path='/' exact component={ PageOne } />
                    <Route path='/pagetwo' exact component={ PageTwo } />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;