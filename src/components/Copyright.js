import './styles/CopyrightStyles.css'

const Copyright = () => {
    return (
        <div
            {...{ className: 'row' }}
            style={{
                position: 'absolute',
                bottom: '0px',
                fontSize: '16px !important',
                width: '100%',
            }}
        >
            <hr />
            <div className="light row pt-3">
                <div className="text-center col-sm-6 col-md-12">
                    <p className="copy-right">
                        © 2021 All rights reserved.{' '}
                        <a href="/#" className="link link-hover">
                            Accessibility{' '}
                        </a>
                        <a href="/#" className="link link-hover">
                            User agreement{' '}
                        </a>{' '}
                        <a href="/#" className="link link-hover">
                            Privacy &amp; Policy{' '}
                        </a>
                        <a href="/#" className="link link-hover">
                            Cookies{' '}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Copyright
