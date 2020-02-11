import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import INewsArticle from './interfaces/INewsArticle'
import { routeDefinitions } from 'routing'
import 'globalStyles/App.scss'
import styles from './ArticleCard.module.scss'

export interface ArticleCardProps {
  article: INewsArticle
}

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  const { id, title, image, date, subtitle } = article
  console.log(`${routeDefinitions.newsDetailPage.replace(':id', id.toString())}`)
  return (
    <div className={styles.cardContainer}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={image} alt="News Article Image" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <p>{moment(date, 'MM-DD-YYYY').format('MM.DD.YYYY')}</p>
          <h2>{title}</h2>
          <h3>{subtitle} </h3>
          <Link to={`${routeDefinitions.newsDetailPage.replace(':id', id.toString())}`}>
            <div className={styles.iconTextLine}>
              <div>
                <ChevronRightIcon className={styles.icon} />
              </div>
              <div>mehr Informationen</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
