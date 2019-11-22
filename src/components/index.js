import Editor from './Editor'
import eventBus from './event'
Editor.install = function (Vue, options) {
  Vue.directive('diagram', {
    bind (el, binding, vnode) {
      eventBus.$on('graph-created', function (graph) {

      })
    }
  })
}

export default Editor
