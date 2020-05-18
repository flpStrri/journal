import React from "react"
import PropTypes from "prop-types"
import Label from "atoms/Label/Label"
import "./Tag.scss"

const Tag = ({ title, color }) => {
    const style = {
        backgroundColor: color + "33",
        color: color,
        border: "1px solid",
        borderColor: color + "75",
    }
    return (
        <div className="Tag__container">
        <div className="Tag__white-container"></div>
        <Label className="Tag" style={style}>
            <div className="Tag__darkened-text">{title}</div>
            {title}
        </Label>
        </div>
    )
}

Tag.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
}

Tag.defaultProps = {
    color: "#4CADC6"
}

export default Tag
