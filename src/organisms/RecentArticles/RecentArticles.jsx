import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ArticleLink from "molecules/ArticleLink/ArticleLink"
import "./RecentArticles.scss"

const RecentArticles = ({ data }) => {
    const recentArticles = data.allMdx.edges.map(post => ({
        key: post.node.id,
        link: post.node.fields.slug,
        ...post.node.frontmatter,
    }))

    return (
        <div className="RecentArticles">
            {recentArticles.map(post => (
                <ArticleLink {...post} />
            ))}
        </div>
    )
}

export default function RichRecentArticles(props) {
    return (
        <StaticQuery
            query={RECENT_ARTICLES_QUERY}
            render={data => <RecentArticles data={data} {...props} />}
        />
    )
}

export const RECENT_ARTICLES_QUERY = graphql`
    query {
        allMdx(
            filter: {
                frontmatter: { type: { ne: "internal" } }
                fileAbsolutePath: { regex: "/articles/" }
            }
            sort: { fields: [fields___date], order: DESC }
            limit: 2
        ) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        description
                    }
                }
            }
        }
    }
`
