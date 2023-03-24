<script lang="ts" setup>
defineProps<{ color?: "default" | "green" }>();

const stylesMap = {
  default: "default-button",
  green: "green-button",
};
</script>
<template>
  <button v-bind="$attrs" class="button" :class="stylesMap[color ?? 'default']">
    <slot></slot>
  </button>
</template>
<style scoped>
.button {
  padding: 15px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  transition: all 0.6s;
}

.default-button {
  background-color: var(--color-light-gray);
  color: var(--color-dark-blue);
}
.default-button:hover {
  color: var(--color-white);
  background-color: var(--color-dark-blue);
}
.default-button:active {
  color: var(--color-white);
  background-color: var(--color-dark-blue);
}
.default-button.active {
  color: var(--color-white);
  background-color: var(--color-dark-blue);
}

.green-button {
  background-color: var(--color-green);
  color: var(--color-white);
}

.button:disabled {
  background-color: transparent;
  border: 1px solid var(--color-dark-gray);
  color: var(--color-manatee);
  cursor: not-allowed;
}
</style>
