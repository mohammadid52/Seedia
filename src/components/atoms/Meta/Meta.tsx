import { Helmet } from 'react-helmet'

interface MetaProps {
  pageTitle: string
  title: string
  description: string
  keywords: string
  userName: string
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
        <meta name="description" content={description} />
        <meta name="title" content={title} />
        <meta name="keywords" content={keywords} />
        <meta name="audience" content={'Everyone'} />
        <meta name="page-type" content={pageType}></meta>
        <meta name="page-topic" content={title}></meta>
        <meta name="copyright" content={'13RMS'}></meta>
        <meta name="publisher" content={userName}></meta>
      </Helmet>
    </div>
  )
}

export default Meta
