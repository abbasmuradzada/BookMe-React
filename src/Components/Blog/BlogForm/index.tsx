import React, {FC} from 'react'
import {Box} from '@material-ui/core';
import './style.scss';

const BlogForm:FC = () => {
    return (
        <div id="add-comment">
            <form>
                <Box display='flex' flexDirection='column' alignItems='flex-start' >
                    <div className='comment-input'>
                        <label htmlFor="">
                            Name
                            <input type="text" />
                        </label>
                    </div>
                    <div className='comment-input'>
                        <label htmlFor="">
                            Subject:
                            <input type="text" />
                        </label>
                    </div>
                    <div className='comment-input'>
                        <label htmlFor="">
                            Name
                            <input type="text" />
                        </label>
                    </div>
                    <div className='comment-input'>
                        <label htmlFor="">
                            Message:
                            <textarea name="" id=""></textarea>
                        </label>
                    </div>
                    
                    <button className='comment-submit' type="submit">submit</button>
                </Box>
            </form>
        </div>
    )
}

export default BlogForm;