import React, {FC} from 'react'
import { SideBarTitle, Divider } from '../Common';
import SearchBar from '../Sidebar/SearchBar'
import Category from '../Sidebar/Category'
import RecentPost from './RecentPost'
import Tags from './Tags'
import recentPostImg from '../../../Assets/Images/recent-post-img.png'
import './style.scss'

const SideBar:FC = () => {
    return (
        <div id='sidebar'>
            <SearchBar/>
            <Divider/>
            <Category/>
            <Divider/>
            <SideBarTitle title='RECENT POSTS' />
            <div className="recent-posts">
                <RecentPost title='HEADING TITLE HERE' date='AUG 12, 2015' imgUrl={recentPostImg} />
                <RecentPost title='HEADING TITLE HERE' date='AUG 12, 2015' imgUrl={recentPostImg} />
            </div>
            <Divider/>
            <div className="archives">
                <p className="comment-sec-title">archives </p>
                <select name="" id="">
                    <option value="">Aug 2015 </option>
                    <option value="">Dec 2014 </option>
                </select>
            </div>
            <Divider/>
            <SideBarTitle title='tags' />
            <Tags/>
        </div>
    )
}

export default SideBar