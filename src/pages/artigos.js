import React            from "react"
import { graphql }      from "gatsby"
import Layout           from "atoms/Layout/Layout"
import MaxWidth         from "atoms/MaxWidth/MaxWidth"
import SEO              from "atoms/SEO/SEO"
import ArticleLink      from "molecules/ArticleLink/ArticleLink"
import "./articles.scss"

const Blog = ({ data }) => {
    const allArticles = data.allMdx.edges.map(a => ({
        link: a.node.fields.slug,
        date: a.node.fields.date,
        ...a.node.frontmatter,
    }))

    return (
        <Layout
            className="Layout__blog Writing"
            showNavigation
            showFooter
            showSocialCol
        >
            <SEO title="Blog" />
            <MaxWidth size="l" className="Blog__content__container">
                <div className="Blog__content">
                    <h1 className="Blog__title">Artigos</h1>
                    <div className="Blog__posts">
                        <>
                            {allArticles.map(article => (
                                <ArticleLink {...article} />
                            ))}
                        </>
                    </div>
                </div>
            </MaxWidth>
        </Layout>
    )
}

export default Blog

export const BLOGPOST_QUERY = graphql`
    query {
        allMdx(
            filter: {
                frontmatter: { type: { ne: "internal" } }
                fileAbsolutePath: { regex: "/articles/" }
            }
            limit: 4
            sort: { order: DESC, fields: [fields___date] }
        ) {
            edges {
                node {
                    fields {
                        slug
                        date(formatString: "DD/MM/YYYY")
                    }
                    frontmatter {
                        title
                        categories
                        description
                    }
                }
            }
        }
    }
`
