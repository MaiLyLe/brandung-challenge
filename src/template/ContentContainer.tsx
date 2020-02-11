import React, { FC, ReactNode } from 'react'
import styles from './ContentContainer.module.scss'

export interface ContentContainerProps {
  route: ReactNode
}

const ContentContainer: FC<ContentContainerProps> = ({ route }) => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.content}>{route}</div>
    </div>
  )
}

export default ContentContainer
