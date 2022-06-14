import { Link, routes } from '@redwoodjs/router'
import { Post } from 'types/graphql'

interface Props {
  article: Post
}

const Article = ({ article }: Props) => {
  const { id, title, content, createdAt } = article
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.article({ id })}>{title}</Link>
        </h2>
      </header>
      <p>{content}</p>
      <pre>Posted at: {createdAt}</pre>
    </article>
  )
}

export default Article
