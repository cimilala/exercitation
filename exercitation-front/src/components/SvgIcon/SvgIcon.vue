<template>
      <svg aria-hidden="true" class="svg-icon" :style="{width:size??'1em',height:size??'1em'}">
    <use :xlink:href="symbolId" :fill="color??'#333'" />
  </svg>

</template>
    
<script setup lang='ts'>import { computed } from 'vue';

    const props = defineProps<{
        prefix?:string
        name:string
        color?:string
        size?:string
    }>()
    const symbolId = computed(() => `#${props.prefix??'icon'}-${props.name}`)
</script>
    
<style>
    .svg-icon {
 
  vertical-align: -0.30em;
  fill: currentColor;
  overflow: hidden;
}
</style>