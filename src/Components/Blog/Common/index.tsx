import React from 'react'

interface ITitle {
    title? :string
}
export const SideBarTitle = ({title}:ITitle) => {
    return (
        <div>
            <p className="comment-sec-title">{title}</p>
        </div>
    )
}

export const Divider = () => {
    return (
        <div className="blog-divider"></div>
    )
}
