import React, {FC} from 'react'
import Path from './Path'
import Quote from './Quote'
import Sidebar from './Sidebar'
import {Grid} from '@material-ui/core';
import { Container, Row, Col } from 'reactstrap';


const Blog:FC = () => {
    return (
        <>
            <Path/>
            <div className="container">
                <Container>
                    <Row md="12">
                        <Col md='8'>Column</Col>
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