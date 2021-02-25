import React, {FC} from 'react'
import { SideBarTitle, Divider} from '../../Common';
import './style.scss';

const SearchBar:FC = () => {
    return (
        <>
            <SideBarTitle title='Category' />
            <div className="categories">
                <div className="category">
                    <i className="fas fa-arrow-right"></i>&nbsp;&nbsp;General Account <span>(07)</span>
                </div>
                <Divider/>
                <div className="category">
                    <i className="fas fa-arrow-right"></i>&nbsp;&nbsp;Tax Account <span>(05)</span>
                </div>
                <Divider/>
                <div className="category">
                    <i className="fas fa-arrow-right"></i>&nbsp;&nbsp;Accounting <span>(08)</span>
                </div>
                <Divider/>
                <div className="category">
                    <i className="fas fa-arrow-right"></i>&nbsp;&nbsp;Tax Account <span>(09)</span>
                </div>
                <Divider/>
                <div className="category">
                    <i className="fas fa-arrow-right"></i>&nbsp;&nbsp;General Account <span>(10)</span>
                </div>
            </div>
        </>
    )
}

export default SearchBar;