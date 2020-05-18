import React from "react"
import Layout from "atoms/Layout/Layout"
import MaxWidth from "atoms/MaxWidth/MaxWidth"
import "./404.scss"

const NotFoundPage = () => (
  <Layout showNavigation showSocialCol showFooter>
    <MaxWidth className="NotFound">
      <h1 className="NotFound__header">Page not found</h1>
    </MaxWidth>
  </Layout>
)

export default NotFoundPage
