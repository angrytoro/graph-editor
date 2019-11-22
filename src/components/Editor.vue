<template>
  <div class="graph"></div>
</template>

<script>
import { genGraph } from './mxgraph'
import eventBus from './event'
export default {
  inject: ['graphEditorEventBus'],
  created () {
    this.graph = genGraph(this.$el)
    this.$emit('graph-created', this.graph)
    eventBus.$emit('graph-created', this.graph)
  }
}
</script>
