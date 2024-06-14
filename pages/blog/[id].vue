<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="text-center p-4 op-50">Current route: {{ route.path }}</div>
</template>
