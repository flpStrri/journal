import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import Headroom from "react-headroom"
import Link from "atoms/Link/Link"
import Logo from "atoms/Logo/Logo"
import MaxWidth from "atoms/MaxWidth/MaxWidth"
import "./Header.scss"

const Header = ({ knockoutHeader }) => (
  <Headroom className="Header__headroom" disable>
    <MaxWidth
      size="xl"
      className={classNames("Header__container", {
        "Header__container--knockoutColors": knockoutHeader,
      })}
    >
      <div className="Header__content">
        <Link className="Header__logo" to="/">
          <Logo />
        </Link>
        <div className="Header__links">
          <Link className="Header__link" to={"/artigos"}>
            Artigos
          </Link>
          <Link
            doOpenInNewTab
            className="Header__link Header__link--email"
            to="mailto:hello@filipestorarri.com"
          >
            Contato
            <span>&#8594;</span>
          </Link>
        </div>
      </div>
    </MaxWidth>
  </Headroom>
)

Header.propTypes = {
  knockoutHeader: PropTypes.bool,
}

Header.defaultProps = {
  knockoutHeader: false,
}

export default Header
