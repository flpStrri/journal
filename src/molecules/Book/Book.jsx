import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCheckCircle,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons"
import {faAmazon} from "@fortawesome/free-brands-svg-icons"
import Link from "atoms/Link/Link"
import Tag from "atoms/Tag/Tag"
import "./Book.scss"

const Book = ({ title, author, status, genre, amazonURL }) => (
    <div className="Book">
    <div className="Book__metas">
      <div className="Book__title">
        <span className="Book__title__span">{title} {amazonURL && <Link to={amazonURL} doOpenInNewTab><FontAwesomeIcon
          className="Book__icon Book__icon--amazon"
          icon={faAmazon}
        /></Link>}</span>
      </div>
      <div className="Book__author">{author}</div>
    </div>
    <div className="BookGenreTags__container">
        <Tag title={genre}/>
    </div>
    <div className="Book__status">
      {status === "done" ? (
        <FontAwesomeIcon
          className="Book__icon Book__icon--check"
          icon={faCheckCircle}
        />
      ) : (
        <FontAwesomeIcon
          className="Book__icon Book__icon--book"
          icon={faBookOpen}
        />
      )}
    </div>
    </div>
)

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  status: PropTypes.string,
  amazonURL: PropTypes.string,
}

Book.defaultProps = {
  categories: [],
  status: "in-progress",
  amazonURL: undefined
}

export default Book
