import React, {FC} from 'react';
import Header from '../Header';
import About from '../Home/About';
import Slider from '../Home/Slider';
import Services from '../Home/Services';
import News from '../Home/News';
import Facts from '../Home/Facts';
import AboutMe from '../Home/AboutMe';
import Clients from '../Home/Clients';
import Book from '../Home/Book';
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
                    <Slider/>
                    <About/>
                    <Services/>
                    <News/>
                    <Facts/>
                    <AboutMe/>
                    <Clients/>
                    <Book/>
                </Route>
                <Route path = "/blog">
                    <div className='container'>Blog Page</div>
                </Route>
            </Switch>
            <Footer/>
            abbas
            <GoToTop/>
            abbas
        </Router>
    </div>
  );
}

export default Layout;
