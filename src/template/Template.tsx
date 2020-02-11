import React, { FC } from 'react'
import { RouteProps, Route } from 'react-router-dom'
import Header from './Header'
export interface PublicRouteProps extends RouteProps {}

const Template: FC<PublicRouteProps> = ({ ...rest }) => {
  return (
    <div>
      <Header />
      <div>
        <Route rest component={rest.component} />
      </div>
    </div>
  )
}

export default Template
