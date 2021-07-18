import CopyrightStyles from './styles/CopyrightStyles'

const Copyright = () => {
    return (
        <div {...{ className: `${CopyrightStyles} row` }}>
            <hr />
            <div className="light row">
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
