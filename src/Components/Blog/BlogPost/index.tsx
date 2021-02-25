import React, {FC} from 'react'
import blogImg from '../../../Assets/Images/blog-img.png'
import releatedImg from '../../../Assets/Images/related-post-img.png'
import ReleatedPost from './ReleatedPost'
import { Container, Row, Col } from 'reactstrap';
import {Divider} from '../Common'
import './style.scss';

const BlogPost:FC = () => {
    return (
        <div id="blog-content">
            <img src={blogImg} alt="" />
            <span className="sec-title">
                Accounts
            </span>
            <h2 className="sec-heading">
                Heading title of image
            </h2>
            <div className="blog-info d-flex flex-wrap">
                <p className="blog-info_single">
                    ON : <span>Aug 12, 2015  </span>
                </p>
                <p className="blog-info_single">
                    <span>(10)</span> comments
                </p>
                <p className="blog-info_single">
                    posted by : <span>admin</span>
                </p>
                <p className="blog-info_single">
                    In : <span>Accounting</span>
                </p>
            </div>
            <p className="sec-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus interdum urna.  Phasellus ac lorem ut tellus ornare condimentum. Nulla facilisi. Nulla at facilisis nibh, in ultricies arcu. Fusce elementum mollis eros, vel ultricies enim consequat in. 
                <br/><br/> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteratio which don't look even slightly believable. If you are anything embarrassing hidden.It is a long established fact that aur reader will be nything embarrassing hidden.It is a long distracted by randomised words which don't lookinge eventhe readable content of fact that a reader a page when looking at its layout. 
                <br/><br/> Many desktop publishing packages and web page editors Ipsum. Lorem Ipsum is simy is text of the printing editors Ipsum. Lorem Ipsum and typesetting by words which don't look even slightly believable. If you arent its areinjected humour, don't looking even injected humour, or randomised words.
                <br/><br/> There are many variations of passages of Lorem Ipsum available, but the majority have suffered note alteration in some form, by injected humour, or randomised words which don't look even slightly our its  embarrassing hidden in the middle of text which don't lookinge eventhe readable content.
                <br/><br/> Utaerat vitae urna cursus tristique. Donec acmaximus magnatiam utaucibus enimam sapienenim ourese selve convalliseget gravidaeu pharetra quiseros auris idsemvel mauris commodo lacus.
            </p>
            <div className="blog-divider"></div>
            <div className="additional-pots">
                <Row md="12">
                    <Col md='6'>
                        <ReleatedPost title='HEADING TITLE HERE' desc='IN “Accounting”' imgUrl={releatedImg} />
                    </Col>
                    <Col md='6'>
                        <ReleatedPost title='HEADING TITLE HERE' desc='IN “Salary Management”' imgUrl={releatedImg} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default BlogPost