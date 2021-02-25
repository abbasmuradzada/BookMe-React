import React, {FC} from 'react';
import './style.scss';

interface IProps {
    name:string;
    icon:string;
}

const Feature:FC<IProps> = ({name, icon}:IProps) => {
    return (
        <div className="about-me_card">
            <i className={icon}></i>
            <span className="about-me_card_name">{name}</span>
            <p className="sec-desc">Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Pellent esque dignissim eros a sapien tempus, 
                ut eleifend neque convallis.</p>
        </div>
    )
}

export default Feature;