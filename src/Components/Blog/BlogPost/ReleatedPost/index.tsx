import React, {FC} from 'react'
import blogImg from '../../../Assets/Images/blog-img.png'
import { Container, Row, Col } from 'reactstrap';
import './style.scss';

interface IProps {
    title: string;
    desc: string;
    imgUrl: string;
}

const ReleatedPost:FC<IProps> = ({title, desc, imgUrl}:IProps) => {
    return (    
        <div className="related-post">
            <img src={imgUrl} alt="" />
            <h4 className="related-post_heading">{title}</h4>
            <p className="related-post_desc">{desc}</p>
        </div>          
    )
}

export default ReleatedPost