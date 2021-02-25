import React, {FC} from 'react'
import { SideBarTitle} from '../../Common';
import './style.scss';

const SearchBar:FC = () => {
    return (
        <>
            <SideBarTitle title='Search bar' />
            <input className="search-input" placeholder="Search here" type="text"></input>
        </>
    )
}

export default SearchBar;