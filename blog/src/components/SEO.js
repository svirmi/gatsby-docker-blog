import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, pathname, article, kw }) => (
    <StaticQuery
        query={query}
        render={({
                     site: {
                         siteMetadata: {
                             defaultTitle,
                             titleTemplate,
                             defaultDescription,
                             siteUrl,
                             defaultImage,
                             twitterUsername,
                             defaultKw
                         },
                     },
                 }) => {
            const seo = {
                title: title || defaultTitle,
                description: description || defaultDescription,
                image: `${siteUrl}${image || defaultImage}`,
                url: `${siteUrl}${pathname || "/"}`,
                kw: kw || defaultKw
            }

            return (
                <>
                    <Helmet title={seo.title} titleTemplate={titleTemplate}>
                        <meta name="description" content={seo.description} />
                        <meta name="image" content={seo.image} />
                        {seo.url && <meta property="og:url" content={seo.url} />}
                        {(article ? true : null) && (
                            <meta property="og:type" content="article" />
                        )}
                        {seo.title && <meta property="og:title" content={seo.title} />}
                        {seo.description && (
                            <meta property="og:description" content={seo.description} />
                        )}
                        {seo.image && <meta property="og:image" content={seo.image} />}
                        <meta name="twitter:card" content="summary_large_image" />
                        {twitterUsername && (
                            <meta name="twitter:creator" content={twitterUsername} />
                        )}
                        {seo.title && <meta name="twitter:title" content={seo.title} />}
                        {seo.description && (
                            <meta name="twitter:description" content={seo.description} />
                        )}
                        {seo.image && <meta name="twitter:image" content={seo.image} />}
                        {seo.kw && <meta name="keywords" content={seo.kw} />}
                    </Helmet>
                </>
            )
        }}
    />
)

export default SEO

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    pathname: PropTypes.string,
    article: PropTypes.bool,
    kw: PropTypes.string
}

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    pathname: null,
    article: false,
    kw: false
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
        defaultKw: kw
      }
    }
  }
`