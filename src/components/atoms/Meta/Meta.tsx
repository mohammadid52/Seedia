import { Helmet } from 'react-helmet'

interface MetaProps {
  pageTitle: string
  title?: string
  description?: string
  keywords?: string
  userName?: string
  pageType?: string
  pageUrl?: string
  imageUrl?: string
}

const Meta = (props: MetaProps) => {
  const {
    pageTitle,
    title,
    keywords,
    userName,
    description,
    pageType = 'website',
    pageUrl = '',
    imageUrl = '',
  } = props

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        {description && (
          <meta
            name="description"
            content={description}
            property="og:description"
          />
        )}
        {pageUrl && <meta content={pageUrl} property="og:url" />}
        <meta name="title" property="og:title" content={title || pageTitle} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="audience" content={'Everyone'} />
        {<meta property="og:type" name="page-type" content={pageType}></meta>}
        {title && <meta name="page-topic" content={title}></meta>}
        {imageUrl && <meta property="og:image" content={imageUrl}></meta>}
        <meta name="copyright" content={'13RMS'}></meta>
        {userName && <meta name="publisher" content={userName}></meta>}
      </Helmet>
    </div>
  )
}

export default Meta
