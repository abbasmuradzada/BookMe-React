import React, {FC} from 'react';
import Header from '../Header';
import Home from '../Home'
import Blog from '../Blog'
import Footer from '../Footer';
import GoToTop from '../GoToTop';
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
                    <Home/>         
                </Route>
                <Route path = "/blog">
                    <Blog/>
                </Route>
            </Switch>
            <Footer/>
            <GoToTop/>
        </Router>
    </div>
  );
}

export default Layout;
