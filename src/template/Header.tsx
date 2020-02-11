import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import styles from './Header.module.scss'
import { routeDefinitions, REDIRECT_URL } from 'routing'
import { headerDefinitions } from './headerDefinitions'

const Header = () => {
  const location = useLocation()
  const [selectedTab, setSelectedTab] = useState<string>(
    location.pathname === routeDefinitions.home
      ? REDIRECT_URL.substring(1)
      : location.pathname.substring(1)
  )
  const history = useHistory()

  const onClickTab = (tabName: string): void => {
    setSelectedTab(tabName)
  }

  useEffect((): void => {
    history.push(routeDefinitions[selectedTab])
  }, [selectedTab])

  return (
    <div className={styles.header}>
      <div className={styles.tabContainer}>
        {Object.keys(headerDefinitions).map(headerKey => {
          return (
            <button
              onClick={() => {
                onClickTab(headerKey)
              }}
              className={
                headerKey === selectedTab
                  ? [styles.tab, styles.selectedTab].join(' ')
                  : [styles.tab, styles.unselectedTab].join(' ')
              }
            >
              {headerDefinitions[headerKey]}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Header
