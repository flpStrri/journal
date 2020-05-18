import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Label from "atoms/Label/Label"
import Layout from "atoms/Layout/Layout"
import MaxWidth from "atoms/MaxWidth/MaxWidth"
import SEO from "atoms/SEO/SEO"
import TOC from "molecules/TOC/TOC"
import "./Post.scss"

export default ({ data }) => {
    let Post = data.mdx
    let date = Post.fields.date
    const ogImagePath =
        "https://filipestorarri.com" +
        Post.frontmatter.ogimage.childImageSharp.fixed.src
    const twitterImagePath =
        "https://filipestorarri.com" +
        Post.frontmatter.twitterimage.childImageSharp.fixed.src

    return (
        <>
            <SEO
                title={`${Post.frontmatter.title}`}
                description={`${Post.frontmatter.description}`}
                image={ogImagePath}
                twitterImage={twitterImagePath}
            />
            <Layout
                knockoutHeader
                showNavigation
                showFooter
                showSocialCol
                className="Post"
            >
                <MaxWidth className="Post__hero" size="xl" />
                <MaxWidth size="l">
                    <div className="Post__content">
                        {/* <PostDetail className="Post__content__detail" date={date} /> */}
                        <div className="Post__content__body">
                            <Label>{date}</Label>
                            <h1>{Post.frontmatter.title}</h1>
                            <MDXRenderer>{Post.body}</MDXRenderer>
                        </div>
                        <TOC className="Post__content__TOC" />
                    </div>
                </MaxWidth>
            </Layout>
        </>
    )
}

export const query = graphql`
    query($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            fields {
                slug
                date(formatString: "D/MM/YYYY")
            }
            frontmatter {
                slug
                title
                description
                ogimage {
                    childImageSharp {
                        fixed {
                            src
                        }
                    }
                }
                twitterimage {
                    childImageSharp {
                        fixed {
                            src
                        }
                    }
                }
            }
        }
    }
`
