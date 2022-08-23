import { pipe, tap } from './utils/utils.js'
import { makePieces } from './core/make-pieces.js'
import { shuffle } from './core/shuffle.js'
import { activate, deactivate } from './core/activate.js'
import { move } from './core/move.js'
import { snap } from './core/snap.js'
import { status } from './core/status.js'
import { clone } from './utils/clone.js'
import { setStatus } from './core/set-status.js'
import './utils/safariDrawImageFix.js'
import pan, { getTransformedPosition } from './utils/pan.js'
import {
  makeCanvas,
  loadImage,
  paint,
  resize,
  setCursor,
  cutPieces,
} from './canvas.js'

export const puzzle = async ({
  element,
  image: img = '',
  pieces = { x: 6, y: 4 },
  attraction = 5,
  aligned = false,
  zoom: initZoom,
  beforeInit = () => {},
  onInit = () => {},
  onComplete = () => {},
  onChange = () => {},
}) => {
  const container =
    typeof element === 'string' ? document.querySelector(element) : element

  if (!container) {
    console.warn(`Couldn't find element: ${element}`)
    return
  }

  const { canvas, ctx } = makeCanvas(container)

  beforeInit(canvas)

  const { image, width, height } = await loadImage(img)

  const initPuzzle = {
    moves: 0,
    status: 'idle',
    done: false,
    startTime: Date.now(),
    attraction,
    size: { x: pieces.x, y: pieces.y },
    pieces: makePieces(pieces),
  }

  const initUI = {
    url: img,
    zoom: 1,
    position: { x: 0, y: 0 },
    canvas,
    ctx,
    image,
    useCache: false,
    height,
    width,
    pieces: cutPieces(image, initPuzzle),
    // layers: {
    //   active: makeCanvas(),
    //   nonActive: makeCanvas(),
    // },
  }

  let state = {}

  state.puzzle = pipe(shuffle(aligned))(initPuzzle)
  state.ui = paint(state.puzzle)(initUI)

  const { zoom, restore } = pan(canvas, {
    initScale:
      initZoom ||
      Math.min(
        window.innerWidth / state.ui.width,
        window.innerHeight / state.ui.height
      ),
  })
  // createPrintLayers(state.puzzle)(state.ui)

  const updateUI = () => {
    state.ui = pipe(paint(state.puzzle), setCursor(state.puzzle))(state.ui)
    // state.ui.useCache = puzzle.status !== 'active'
  }

  canvas.addEventListener('pan', e => {
    e.preventDefault()
    const {
      detail: { scale, position },
    } = e

    state.ui.zoom = scale
    state.ui.position = position

    state.ui.ctx.setTransform(scale, 0, 0, scale, position.x, position.y)
    updateUI()
  })

  setTimeout(() => {
    onInit(state)
  })

  const getCursor = ({ x, y }) => {
    const [xpos, ypos] = getTransformedPosition({ x, y })
    return { x: xpos / state.ui.width, y: ypos / state.ui.height }
  }

  const handlePointerdown = ({ offsetX: x, offsetY: y }) => {
    const cursor = getCursor({ x, y })

    state.puzzle = pipe(activate(cursor), setStatus(cursor))(state.puzzle)

    updateUI()
  }

  const handlePointermove = ({ offsetX: x, offsetY: y }) => {
    const cursor = getCursor({ x, y })

    state.puzzle = pipe(move(cursor), setStatus(cursor))(state.puzzle)

    updateUI()
  }

  const handlePointerup = ({ offsetX: x, offsetY: y }) => {
    const cursor = getCursor({ x, y })

    state.puzzle = pipe(
      snap,
      deactivate,
      status,
      setStatus(cursor)
    )(state.puzzle)

    updateUI()

    onChange({ ui: state.ui, puzzle: clone(state.puzzle) })

    if (state.puzzle.done) onComplete(state)
  }

  const handleResize = () => {
    const { zoom, position } = state.ui
    resize(state.ui.canvas)
    ctx.setTransform(zoom, 0, 0, zoom, position.x, position.y)
    updateUI()
  }

  state.ui.canvas.addEventListener('pointerdown', handlePointerdown)
  state.ui.canvas.addEventListener('pointermove', handlePointermove)
  state.ui.canvas.addEventListener('pointerup', handlePointerup)
  window.addEventListener('resize', handleResize)

  return {
    newGame: () => {
      state.puzzle = pipe(shuffle(aligned))(initPuzzle)
      updateUI()
    },
    getState: () => ({ ui: state.ui, puzzle: clone(state.puzzle) }),
    setState: newState => {
      state.puzzle = pipe(shuffle(aligned))(newState.puzzle)
      updateUI()
    },
    destroy: () => {
      if (element.tagName !== 'CANVAS') {
        state.ui.canvas.remove()
      }

      state = null
    },
    setZoom: zoom,
    getZoom: () => state.ui.zoom,
    restorePan: restore,
  }
}
