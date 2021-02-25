import React, {FC} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Services from '../Home/Services';
import Facts from '../Home/Facts';
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
