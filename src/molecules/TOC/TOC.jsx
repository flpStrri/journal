import { throttle } from "lodash"
import React, { useEffect, useRef, useState } from "react"
import { useEventListener, useOnClickOutside } from "hooks"
import classNames from "classnames"
import "./TOC.scss"

const accumulateOffsetTop = (el, totalOffset = 0) => {
  while (el) {
    totalOffset += el.offsetTop - el.scrollTop + el.clientTop
    el = el.offsetParent
  }
  return totalOffset
}

const TOC = ({ className, headingSelector, getTitle, getDepth, ...rest }) => {
  const { throttleTime = 200 } = rest
  const [headings, setHeadings] = useState({
    titles: [],
    nodes: [],
    minDepth: 0,
  })
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState()
  const ref = useRef()

  useOnClickOutside(ref, () => setOpen(false))
  useEffect(() => {
    const selector =
      headingSelector || Array.from({ length: 2 }, (_, i) => `main h` + (i + 1))
    const nodes = Array.from(document.querySelectorAll(selector))
    const titles = nodes.map(node => ({
      title: getTitle ? getTitle(node) : node.innerText,
      depth: getDepth ? getDepth(node) : Number(node.nodeName[1]),
    }))

    const minDepth = Math.min(...titles.map(h => h.depth))
    setHeadings({ titles, nodes, minDepth })
  }, [headingSelector, getTitle, getDepth])

  const scrollHandler = throttle(() => {
    const { titles, nodes } = headings
    const offsets = nodes.map(el => accumulateOffsetTop(el))

    const activeIndex = offsets.findIndex(
      offset => offset > window.scrollY + 90
    )

    setActive(activeIndex === -1 ? titles.length - 1 : activeIndex - 1)
  }, throttleTime)
  useEventListener(`scroll`, scrollHandler)

  return (
    <div className={classNames(className, "TOC__container")}>
      <div className="TOC" ref={ref} open={open}>
        <nav>
          {headings.titles.map(({ title, depth }, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
            <div
              className={classNames(
                "TOC__link",
                `TOC__link--h${depth}`,
                active === index ? "TOC__link--active" : undefined
              )}
              key={title}
              onClick={event => {
                event.preventDefault()
                setOpen(false)
                headings.nodes[index].scrollIntoView({
                  behavior: `smooth`,
                  block: `start`,
                })
              }}
            >
              <div>{title}</div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

TOC.propTypes = {}

export default TOC
