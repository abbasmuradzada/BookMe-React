import React, {FC} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory  } from "react-router-dom";


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
                    <div className='container'>Home Page</div>
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
