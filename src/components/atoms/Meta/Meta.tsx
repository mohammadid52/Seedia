import { Helmet } from 'react-helmet'

interface MetaProps {
  pageTitle: string
  title?: string
  description?: string
  keywords?: string
  userName?: string
  pageType?: string
}

const Meta = (props: MetaProps) => {
  const {
    pageTitle,
    title,
    keywords,
    userName,
    description,
    pageType = 'Shopping',
  } = props
  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        {description && <meta name="description" content={description} />}
        <meta name="title" content={title || pageTitle} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="audience" content={'Everyone'} />
        {<meta name="page-type" content={pageType}></meta>}
        {title && <meta name="page-topic" content={title}></meta>}
        <meta name="copyright" content={'13RMS'}></meta>
        {userName && <meta name="publisher" content={userName}></meta>}
      </Helmet>
    </div>
  )
}

export default Meta
