import React, { useState, useEffect } from 'react'
import axios from 'axios'
import INewsArticle from './interfaces/INewsArticle'
import ArticleCard from './ArticleCard'
import styles from './NewsBoard.module.scss'

const NewsBoard = () => {
  const [articleData, setArticleData] = useState<INewsArticle[] | null>(null)

  useEffect((): void => {
    axios
      .get('http://localhost:4000/articles')
      .then(response => {
        setArticleData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className={styles.newsBoardContainer}>
      {articleData &&
        articleData.map(article => {
          return <ArticleCard article={article} />
        })}
    </div>
  )
}

export default NewsBoard
