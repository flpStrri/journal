import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import Link from "atoms/Link/Link"

import "./SocialRow.scss"

const SocialRow = () => {
  return (
    <div className="SocialRow">
      <div className="SocialRow__icons">
        <Link
          className="SocialRow__icon"
          doOpenInNewTab
          to="https://github.com/flpStrri"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link
          className="SocialRow__icon"
          doOpenInNewTab
          to="https://www.linkedin.com/in/flpstrri"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
        <Link
          className="SocialRow__icon"
          doOpenInNewTab
          to="https://twitter.com/flpStrri"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      </div>
    </div>
  )
}

export default SocialRow
