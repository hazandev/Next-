import React from 'react'
import PageHeader from '../component/util/HeaderPage'
import ArticlList from '../component/article/ArticleList'
const article = () => {
    return (
        <div className="article">
            <PageHeader title={"יוסי אשרוב | עורך דין - מאמרים"} />
            <div className="wrapper">
                <ArticlList />
            </div>
        </div>
    )
}

export default article