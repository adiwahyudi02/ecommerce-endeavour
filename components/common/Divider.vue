<template>
  <div class="divider" />
</template>

<script setup lang="ts">
interface IDividerProps {
  borderWidth?: string;
}

withDefaults(defineProps<IDividerProps>(), {
  borderWidth: "3px",
});
</script>

<style lang="sass" scoped>
.divider
  border-bottom: v-bind(borderWidth) solid $black-100
  margin-block: $spacing-md
</style>
