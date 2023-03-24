<template>
  <header class="header">
    <div class="header-top"></div>
    <slot></slot>
  </header>
</template>

<style scoped>
.header {
  margin-bottom: 80px;
}
.header-top {
  background-color: var(--color-dark-gray);
  height: 40px;
  border-radius: 0px 0px 10px 10px;
  margin-bottom: 20px;
}
</style>
