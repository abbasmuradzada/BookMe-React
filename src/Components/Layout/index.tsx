import React, {FC} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Services from '../Home/Services';
import Facts from '../Home/Facts';
import AboutMe from '../Home/AboutMe';
import Clients from '../Home/Clients';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


const Layout:FC = () => {
  return (
    <div className="">
        <Router>
            <Header/>
        
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home"/>
                </Route>  
                <Route path = "/home">
                    <Services/>
                    <Facts/>
                    <AboutMe/>
                    <Clients/>
                </Route>
                <Route path = "/blog">
                    <div className='container'>Blog Page</div>
                </Route>
            </Switch>
        <Footer/>
    </Router>
    </div>
  );
}

export default Layout;
