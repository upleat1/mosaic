<template>
  <div class="q-pa-md q-gutter-sm">
    <h5 class="text-h5 q-mb-md">기본 버튼</h5>
    <q-btn color="white" text-color="black" label="Standard" />
    <q-btn color="primary" label="Primary" />
    <q-btn color="secondary" label="Secondary" />
    <q-btn color="amber" glossy label="Amber" />
    <q-btn color="brown-5" label="Brown 5" />
    <q-btn color="deep-orange" glossy label="Deep Orange" />
    <q-btn color="purple" label="Purple" />
    <q-btn color="black" label="Black" />
  </div>


  <div class="q-pa-md q-gutter-sm">
    <h5 class="text-h5 q-mb-md">커스텀 버튼</h5>
    <q-btn color="white" text-color="black" label="Standard" class="q-btn-custom q-btn-primary"/>
    <q-btn color="primary" label="Primary" class="q-btn-custom q-btn-primary"/>
    <q-btn color="secondary" label="Secondary" class="q-btn-custom q-btn-secondary"/>
    <q-btn color="amber" glossy label="Amber" class="q-btn-custom q-btn-primary"/>
    <q-btn color="brown-5" label="Brown 5" class="q-btn-custom q-btn-primary"/>
    <q-btn color="deep-orange" glossy label="Deep Orange" class="q-btn-custom q-btn-primary"/>
    <q-btn color="purple" label="Purple" class="q-btn-custom q-btn-primary"/>
    <q-btn color="black" label="Black" class="q-btn-custom q-btn-primary"/>
  </div>
</template>
<style lang="scss" scoped>
@import '/src/css/components/button.scss';
</style>
<script setup></script>
