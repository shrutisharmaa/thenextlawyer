import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import Services from './Components/Services/Services';
import About from './Components/About';
import Contact from './Components/Contact';

 class App extends Component {
    render() {
        return(
            <React.Fragment>
                {/* Main Router for the App */}
                <BrowserRouter>
                    {/* Browser Router can only have one child */}
                    <React.Fragment>
                        <Route exact path = '/' component = { Home } />
                        <Route exact path = '/services' component = { Services } />
                        <Route path = '/contactus' component = { Contact } />
                        <Route path = '/about' component = { About } />
                    </React.Fragment> 
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default App;