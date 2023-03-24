<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  animation: spin 1.5s linear infinite;
  background: conic-gradient(
    from 46.16deg at 58.37% 50%,
    rgba(166, 177, 188, 0) -19.34deg,
    rgba(166, 177, 188, 0) 87.5deg,
    #a6b1bc 273.75deg,
    #a6b1bc 340.63deg,
    rgba(166, 177, 188, 0) 340.66deg,
    rgba(166, 177, 188, 0) 447.5deg
  );
}

.loader::after {
  content: "";
  position: absolute;
  top: 4px;
  left: 4px;
  width: 12px;
  height: 12px;
  background-color: var(--color-light-gray);
  border-radius: 100%;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
