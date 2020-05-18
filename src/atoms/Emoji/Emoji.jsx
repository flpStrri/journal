import React from "react"
import PropTypes from "prop-types"
import gemoji from "gemoji"
import "./Emoji.scss"

const findByEmoji = emojiChar => gemoji.find(emoji => emoji.emoji === emojiChar)

const Emoji = ({ symbol }) => (
  <span role="img" aria-label={findByEmoji(symbol).description}>
    {symbol}
  </span>
)

Emoji.propTypes = {
  symbol: PropTypes.string,
}

Emoji.defaultProps = {}

export default Emoji
