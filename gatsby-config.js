module.exports = {
  siteMetadata: {
        title: `João Filipe Storarri | Software Engineer`,
        description: `Site pessoal e artigos de João Filipe Storarri`,
        author: `João Filipe Storarri | @flpStrri`,
        siteUrl: "https://filipestorarri.com",
        image: `https://filipestorarri.com/og-image.png`,
        twitterImage: `https://filipestorarri.com/twitter-image.png`,
        keywords: `engenharia de software, artigos, programação, engineering, code`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-remark-autolink-headers`,
    {
        resolve: `gatsby-plugin-canonical-urls`,
        options: {
        siteUrl: `https://filipestorarri.com`,
    },
      },
    {
        resolve: `gatsby-plugin-mdx`,
        options: {
            gatsbyRemarkPlugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 1035,
                    },
                },
                {
                    resolve: `gatsby-remark-prismjs`,
                    options: {
                        classPrefix: "language-",
                        inlineCodeMarker: null,
                        aliases: {},
                        showLineNumbers: true,
                        noInlineHighlight: false,
                        languageExtensions: [
                            {
                                language: "superscript",
                                extend: "javascript",
                                definition: {
                                    superscript_types: /(SuperType)/,
                                },
                                insertBefore: {
                                    function: {
                                        superscript_keywords: /(superif|superelse)/,
                                    },
                                },
                            },
                        ],
                        prompt: {
                            user: "flpStrri",
                            host: "localhost",
                            global: false,
                        },
                    }
                }
            ],
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/articles`,
        name: `articles`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/content/books`,
        typeName: `Book`
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `João Storarri`,
            short_name: `João`,
            start_url: `/`,
            background_color: `#663399`,
            theme_color: `#663399`,
            display: `minimal-ui`,
            icon: `src/images/joao-icon.png`,
        },
    },
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
            head: true,
        },
    },
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 1080,
                    },
                },
            ],
        },
    },
    `gatsby-plugin-lodash`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-serviceworker`,
  ],
}
