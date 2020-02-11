import React, { FC } from 'react'
import { RouteProps, Route } from 'react-router-dom'
import Header from './Header'
import ContentContainer from './ContentContainer'

export interface PublicRouteProps extends RouteProps {}

const Template: FC<PublicRouteProps> = ({ ...rest }) => {
  return (
    <div>
      <Header />
      <div>
        <ContentContainer route={<Route rest component={rest.component} />} />
      </div>
    </div>
  )
}

export default Template
