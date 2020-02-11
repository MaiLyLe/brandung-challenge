import React, { useState, useEffect } from 'react'
import { get } from 'lodash'
import { useLocation, matchPath } from 'react-router-dom' //useParams did not work for some reason
import axios from 'axios'
import INewsArticle from './interfaces/INewsArticle'

const DetailNewsPage = () => {
  const [articleData, setArticleData] = useState<INewsArticle | null>(null)

  // let { id } = useParams() ==> did not work
  // workaround with useLocation & matchPath to get Param id
  let location = useLocation()

  const match = matchPath(location.pathname, {
    path: '/news/:id',
    strict: true
  })

  const id = get(match, 'params.id', null)

  useEffect((): void => {
    if (id) {
      axios
        .get(`http://localhost:4000/article${id}`)
        .then((response: any) => {
          setArticleData(response.data)
        })
        .catch((error: any) => {
          console.log(error)
        })
    }
  }, [])

  return (
    <div>
      {' '}
      Detail News Page
      {articleData && (
        <>
          {' '}
          <div> {articleData.title} </div>
          <div> {articleData.text} </div>
        </>
      )}
    </div>
  )
}

export default DetailNewsPage
