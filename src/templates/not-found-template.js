import React from 'react'
import { Link } from 'gatsby'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import Page from '../components/Page'
import { useSiteMetadata } from '../hooks'

const NotFoundTemplate = () => {
  const { title, subtitle, keywords } = useSiteMetadata()

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle} keywords={keywords}>
      <Sidebar />
      <Page title="">
        <div className="text-center">
          <div className="text-oops text-giant">Oops!</div>
          <p className="text-4xl">404 - Page not found</p>
          <p className="text-xl mb-8">You just hit a snag in the road ...</p>
          <Link to="/" className="button" activeClassName="current-page">
            Return home
          </Link>
        </div>
      </Page>
    </Layout>
  )
}

export default NotFoundTemplate
