import React from 'react'
import { Switch } from 'react-router-dom'
import { NewsBoard, DetailNewsPage } from 'domains/news'
import { EventsBoard } from 'domains/event'
import { AnotherBoard } from 'domains/anotherdomain'
import { Template } from 'template'
import { routeDefinitions } from './routeDefinitions'

const Routes = () => {
  return (
    <Switch>
      <Template exact path={routeDefinitions.home} component={NewsBoard} />
      <Template exact path={routeDefinitions.news} component={NewsBoard} />
      <Template exact path={routeDefinitions.events} component={EventsBoard} />
      <Template exact path={routeDefinitions.anotherboard} component={AnotherBoard} />
      <Template exact path={routeDefinitions.newsDetailPage} component={DetailNewsPage} />
    </Switch>
  )
}

export default Routes
