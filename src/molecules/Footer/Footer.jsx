import React from "react"
import MaxWidth from "atoms/MaxWidth/MaxWidth"
import "./Footer.scss"

const Footer = () => {
    return (
        <div className="Footer__container">
            <MaxWidth size="l" className="Footer">
                <div className="Footer__prayer">Christo Nihil Præponere</div>
                <div className="Footer__copyright__container">
                    <span className="Footer__copyright">
                        &copy; 2020 João Filipe Storarri
                    </span>
                </div>
            </MaxWidth>
        </div>
    )
}

Footer.propTypes = {}

export default Footer
