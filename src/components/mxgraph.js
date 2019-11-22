import mxgraph from 'mxgraph'
const mg = mxgraph({
  mxBasePath: '../'
})

const {
  mxGraph,
  mxGraphHandler,
  mxGuide,
  mxEvent,
  mxUtils
  // mxPoint,
  // mxRectangle
} = mg

export class Graph extends mxGraph {
  constructor (container) {
    super(container)
    console.log(container)
  }
}

mg.mxGraph = Graph
// Enables guides
mxGraphHandler.prototype.guidesEnabled = true

// Alt disables guides
mxGuide.prototype.isEnabledForEvent = function (evt) {
  return !mxEvent.isAltDown(evt)
}

let graph = null

/**
 * 生成Graph
 * @param {dom} container graph的容器
 */
export const genGraph = function (container) {
  if (!graph) {
    graph = new Graph(container)
  }
  return graph
}

/** 获取graph */
export const getGraph = function () {
  return graph
}

const getDragElt = function () {
  var dragElt = document.createElement('div')
  dragElt.style.border = 'dashed black 1px'
  dragElt.style.width = '120px'
  dragElt.style.height = '120px'
  return dragElt
}

const generateContent = (graph, config) => {
  // return () => {
  //   var parent = graph.getDefaultParent()
  //   var model = graph.getModel()

  //   var v1 = null

  //   model.beginUpdate()
  //   try {
  //     // NOTE: For non-HTML labels the image must be displayed via the style
  //     // rather than the label markup, so use 'image=' + image for the style.
  //     // as follows: v1 = graph.insertVertex(parent, null, label,
  //     // pt.x, pt.y, 120, 120, 'image=' + image)
  //     v1 = graph.insertVertex(parent, null, label, x, y, 120, 120)
  //     v1.setConnectable(false)

  //     // Presets the collapsed size
  //     v1.geometry.alternateBounds = new mxRectangle(0, 0, 120, 40)

  //     // Adds the ports at various relative locations
  //     let port = graph.insertVertex(v1, null, 'Trigger', 0, 0.25, 16, 16, 'port;image=editors/images/overlays/flash.png;align=right;imageAlign=right;spacingRight=18', true)
  //     port.geometry.offset = new mxPoint(-6, -8)

  //     let port = graph.insertVertex(v1, null, 'Input', 0, 0.75, 16, 16, 'port;image=editors/images/overlays/check.png;align=right;imageAlign=right;spacingRight=18', true)
  //     port.geometry.offset = new mxPoint(-6, -4)

  //     let port = graph.insertVertex(v1, null, 'Error', 1, 0.25, 16, 16, 'port;image=editors/images/overlays/error.png;spacingLeft=18', true)
  //     port.geometry.offset = new mxPoint(-8, -8)

  //     let port = graph.insertVertex(v1, null, 'Result', 1, 0.75, 16, 16, 'port;image=editors/images/overlays/information.png;spacingLeft=18', true)
  //     port.geometry.offset = new mxPoint(-8, -4)
  //   } finally {
  //     model.endUpdate()
  //   }
  //   graph.setSelectionCell(v1)
  // }
}

export const addSidebarItem = (el, graph, config) => {
  var ds = mxUtils.makeDraggable(el, graph, generateContent(graph, config), getDragElt(), 0, 0, true, true)
  ds.setGuidesEnabled(true)
}
