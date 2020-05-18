import React from "react"
import PropTypes, { string } from "prop-types"
import Link from "atoms/Link/Link"
import "./ArticleLink.scss"

const ArticleLink = ({ link, title, description, categories, date }) => (
    <Link to={link} className="ArticleLink">
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p className="ArticleLink__categories">
                {date && <span>{date}</span>}
                {date && categories && <span> - </span>}
                {categories.length > 0 && <span>{categories.join(", ")}</span>}
            </p>
        </div>
    </Link>
)

ArticleLink.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(string),
    date: PropTypes.string,
}

ArticleLink.defaultProps = {
    categories: [],
    date: undefined,
}

export default ArticleLink
