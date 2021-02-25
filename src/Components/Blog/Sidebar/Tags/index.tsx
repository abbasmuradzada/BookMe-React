import React, {FC, useState} from 'react'
import { SideBarTitle} from '../../Common';
import './style.scss';

const Tags:FC = () => {
    const [tag, setTag] = useState<any>([
        {
            active: false,
            name: 'lorem'
        },
        {
            active: true,
            name: 'ipsum'
        },
        {
            active: false,
            name: 'dolar'
        },
        {
            active: false,
            name: 'ipsums'
        },
        {
            active: true,
            name: 'Loremipsum'
        },
        {
            active: true,
            name: 'Ipsumses'
        },
    ])
    return (
        <div className="tags">
            {tag.map((tagObg:any) => (
                <div className={tagObg.active ? "tag active" : "tag"}>{tagObg.name}</div>
            ))}
        </div>
    )
}

export default Tags