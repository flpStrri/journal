import { useEffect, useRef } from "react"
import globalThis from "@ungap/global-this"
import "intersection-observer"

export const useEventListener = (eventNames, handler, element = globalThis) => {
  const savedHandler = useRef()
  if (!Array.isArray(eventNames)) eventNames = [eventNames]

  useEffect(() => (savedHandler.current = handler), [handler])

  useEffect(() => {
    const elementSupportsListener = element && element.addEventListener
    if (!elementSupportsListener) return

    const listener = event => savedHandler.current(event)
    for (const e of eventNames) element.addEventListener(e, listener)
    return () => {
      for (const e of eventNames) element.removeEventListener(e, listener)
    }
  }, [element, eventNames])
}

export const useOnClickOutside = (ref, handler, events) => {
  if (!events) events = [`mousedown`, `touchstart`]
  const detectClickOutside = event =>
    ref.current &&
    event &&
    !ref.current.contains(event.target) &&
    handler(event)
  useEventListener(events, detectClickOutside)
}
