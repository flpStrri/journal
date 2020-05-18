import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Card from "atoms/Card/Card"
import Book from "molecules/Book/Book"
import Label from "atoms/Label/Label"
import "./Bookshelf.scss"

const Bookshelf = ({ data }) => {
  const allBooks = data.allBooksJson.nodes

  return (
    <Card className="Bookshelf" padding>
      <div className="Bookshelf__books__container">
      <div className="BookshelfLabels">
          <Label category="table" className="BookshelfLabel">
            Livro
          </Label>
          <Label category="table" className="BookshelfLabel BookshelfLabel--genre">
            Genero
          </Label>
          <Label category="table" className="BookshelfLabel BookshelfLabel--status">
            Status
          </Label>
        </div>
        {allBooks.map(book => (
          <Book {...book} key={book.id} />
        ))}
      </div>
    </Card>
  )
}

export default function RichBookshelf(props) {
    return (
  <StaticQuery
    query={BOOKSHELF_QUERY}
    render={data => <Bookshelf data={data} {...props} />}
  />
)}

export const BOOKSHELF_QUERY = graphql`
  query {
    allBooksJson(sort: {fields: fields___createdDate, order: DESC}) {
    nodes {
      amazonURL
      id
      author
      title
      status
      genre
    }
  }
  }
`
