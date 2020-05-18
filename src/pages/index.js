import React            from "react"
import Layout           from "atoms/Layout/Layout"
import MaxWidth         from "atoms/MaxWidth/MaxWidth"
import SEO              from "atoms/SEO/SEO"
import Bookshelf        from "organisms/Bookshelf/Bookshelf"
import Intro            from "organisms/Intro/Intro"
import RecentArticles   from "organisms/RecentArticles/RecentArticles"
import "./index.scss"

const Home = () => (
    <Layout showNavigation showSocialCol showFooter>
        <SEO />

        <MaxWidth size="l" className="Home">
            <Intro />
            <div className="Home__recent">
                <h2>
                    Artigos Recentes
                </h2>
                <RecentArticles />
            </div>
            <div id="work" className="Home__bookshelf">
                <h2>
                    Minha Estante
                </h2>
                <Bookshelf />
            </div>
        </MaxWidth>
    </Layout>
)

export default Home
