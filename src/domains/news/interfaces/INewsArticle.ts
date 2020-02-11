interface INewsArticle {
  id: number
  title: string
  subtitle: string | undefined
  date: string
  text: string | undefined
  image: string
}

export default INewsArticle
