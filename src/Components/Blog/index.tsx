import React, {FC} from 'react'
import Path from './Path'
import Quote from './Quote'
import BlogPost from './BlogPost'
import Comment from './Comment'
import Sidebar from './Sidebar'
import {Box} from '@material-ui/core';
import {Divider, SideBarTitle} from './Common'
import { Container, Row, Col } from 'reactstrap';


const Blog:FC = () => {
    return (
        <>
            <Path/>
            <div className="container">
                <Container>
                    <Row md="12">
                        <Col md='8'>
                            <BlogPost/>
                            <Divider/>
                            slider
                            <Divider/>
                            <SideBarTitle title='comment' />
                            <Comment owner='HOVIS GEON' date='AUG 12, 2015' thanNow='1 HOUR AGO' />
                            <Comment owner='Abbas Muradzada' date='AUG 12, 2015' thanNow='1 HOUR AGO' />
                            <Comment owner='Samir Ahmadov' date='AUG 12, 2015' thanNow='1 HOUR AGO' />
                            <SideBarTitle title='leave a comment' />
                        </Col>
                        <Col md='4'>
                            <Sidebar/>
                        </Col>
                    </Row>
                </Container>     

            </div>
            <Quote/> 
        </>
    )
}

export default Blog