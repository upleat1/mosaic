<template>
  <div :class="['k__icon', iconClasses]">
    <svg
      v-if="stBaseType === 'svg'"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="'0 0 24 24'"
      :width="width"
      :height="height"
      :fill="fill"
    >
      <component :is="currentIcon" />
    </svg>
    <img
      v-if="stBaseType === 'img'"
      :src="src"
      :alt="iconName"
      :style="iconImgStyle"
    />
  </div>
</template>

<script setup>
import { ref, markRaw, computed, onMounted } from 'vue';

const props = defineProps({
  stBaseType: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: null,
  },
  height: {
    type: String,
    default: null,
  },
  iconName: {
    type: String,
    default: '',
  },
  src: {
    type: String,
    default: '',
  },
  stSize: {
    type: String,
    default: '24', // default
  },
  fill: {
    type: String,
    default: '',
  },
});

const iconClasses = computed(() => {
  return [props.stBaseType && `${props.stBaseType}`];
});

// Get SVG Path
const icons = ref({});
const loadIcons = async () => {
  const modules = import.meta.glob('/src/components/Icon/svg/*.vue');
  for (const path in modules) {
    const componentName = path.split('/').pop().replace('.vue', '');
    icons.value[componentName] = markRaw((await modules[path]()).default);
  }
};

const currentIcon = computed(() => icons.value[props.iconName] || null);

onMounted(loadIcons);

// Set Img Size Spec
const iconImgStyle = computed(() => {
  return {
    width: `${props.stSize}px`,
    height: `${props.stSize}px`,
  };
});
</script>

<style>
/* Add your styles here */
</style>
