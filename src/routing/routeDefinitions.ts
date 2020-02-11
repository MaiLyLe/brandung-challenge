export interface RouteMap {
  [routeKey: string]: string
}

export const routeDefinitions: RouteMap = {
  home: '/',
  news: '/news',
  events: '/events',
  anotherboard: '/anotherboard',
  newsDetailPage: '/news/:id'
}

export const REDIRECT_URL = routeDefinitions.news
