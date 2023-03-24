<template>
  <article class="card">
    <div class="card-content">
      <slot name="img"></slot>
      <div class="card-body">
        <slot name="body"></slot>
      </div>
    </div>
    <div class="card-actions">
      <slot name="details"></slot>

      <div class="actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  border: 1px solid var(--color-platinum);
  border-radius: 20px;
  justify-content: space-between;
}
.card-content {
  display: flex;
  padding: 20px;
  gap: 20px;
  width: 100%;
}
.card-body {
  width: calc(100% - 276px);
}

.card-actions {
  min-width: 314px;
  padding: 20px;
  border: 1px solid var(--color-platinum);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}

.actions {
  flex: 1;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

@media screen and (max-width: 967px) {
  .card {
    flex-direction: column;
  }
  .card-actions {
    min-width: 100%;
    gap: 20px;
  }
}

@media screen and (max-width: 667px) {
  .card-content {
    flex-direction: column;
  }

  .card-body {
    width: 100%;
  }

  .actions {
    flex-wrap: wrap;
  }
}
</style>
