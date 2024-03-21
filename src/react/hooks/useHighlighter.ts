import { useState } from 'react'

interface HighlighterElement extends HTMLDivElement {
  style: CSSStyleDeclaration
  anchor?: HTMLElement
}

/**
 * Highlighter hook
 * @returns {Function} highlightElement
 */
function useHighlighter() {
  const [state, setState] = useState<HighlighterElement[]>([])

  const FADE_OUT_TIMEOUT = 3000
  const DESTROY_TIMEOUT = 4000
  const SCROLL_Y_PADDING = 50

  /**
   * Creates a highlighter element
   * @param {number} width
   * @param {number} height
   * @param {HTMLElement} anchor
   * @returns {HighlighterElement}
   */
  const createHighlighter = (width: number, height: number, anchor: HTMLElement): HighlighterElement => {
    const highlighter = document.createElement('div') as HighlighterElement
    highlighter.className = 'highlighter'
    highlighter.anchor = anchor
    highlighter.style.width = `${width}px`
    highlighter.style.height = `${height}px`

    const { x, y } = getElementCoordinates(anchor)

    highlighter.style.top = `${y}px`
    highlighter.style.left = `${x}px`
    return highlighter
  }

  /**
   * Highlights an element on the page
   * @param {string} id the html element id
   * @returns {void}
   */
  const highlightElement = (id: string): void => {
    const element = document.getElementById(id) as HTMLElement

    if (!element) {
      console.warn('Element not found', id)
      return
    }

    triggerHighlghterOverlay()

    // Gets the element coordinates and scrolls to it
    const { x, y } = getElementCoordinates(element)
    window.scrollTo({
      top: y - SCROLL_Y_PADDING, // when we scroll to an element, make sure we allow some breathing room for visibility
      left: x,
      behavior: 'smooth',
    })

    element.classList.add('highlighted-element')

    // Creates a highlighter element and appends it to the body
    const { width, height } = element.getBoundingClientRect()
    const highlighter = createHighlighter(width, height, element)
    setState([...state, highlighter])
    document.body.appendChild(highlighter)

    // Fades out and destroys the highlighter element
    setTimeout(() => {
      highlighter.classList.add('fade-out')
    }, FADE_OUT_TIMEOUT)
    setTimeout(() => {
      setState([...state.filter((h) => h !== highlighter)])
      element.classList.remove('highlighted-element')
      document.body.removeChild(highlighter)
    }, DESTROY_TIMEOUT)
  }

  /**
   * Gets the element coordinates
   * @param {HTMLElement} element
   * @returns {{ x: number, y: number }}
   */
  const getElementCoordinates = (element: HTMLElement): { x: number; y: number } => {
    const { x: bodyX, y: bodyY } = document.body.getBoundingClientRect()
    const { x, y } = element.getBoundingClientRect()

    const offsetX = x - bodyX
    const offsetY = y - bodyY

    return { x: offsetX, y: offsetY }
  }

  /**
   * Triggers the highlighter overlay
   * @returns {void}
   */
  const triggerHighlghterOverlay = (): void => {
    // We already have an overlay and don't need to trigger a new one
    if (document.querySelector('.highlighter-overlay')) {
      return
    }

    const overlay = document.createElement('div')
    overlay.className = 'highlighter-overlay'
    document.body.appendChild(overlay)

    setTimeout(() => {
      overlay.classList.add('fade-out')
    }, FADE_OUT_TIMEOUT)

    setTimeout(() => {
      document.body.removeChild(overlay)
    }, DESTROY_TIMEOUT)
  }

  /**
   * Updates the highlighter position on window resize
   * @returns {void}
   */
  window.onresize = (): void => {
    state.forEach((highlighter: HighlighterElement) => {
      const { x, y } = getElementCoordinates(highlighter.anchor!)

      highlighter.style.top = `${y - 8}px`
      highlighter.style.left = `${x - 8}px`
    })
  }

  return highlightElement
}

export default useHighlighter
