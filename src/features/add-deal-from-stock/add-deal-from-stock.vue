<script setup lang="ts">
import { ref } from "vue";

import * as api from "@app/shared/api";
import { AppButton, AppLoader } from "@app/shared/ui";

const props = defineProps<{ id: number }>();

const isLoading = ref(false);

const addDealFromStock = async () => {
  isLoading.value = true;
  await api.addDealFromStock(props.id);
  isLoading.value = false;
};
</script>

<template>
  <AppButton class="button-deal" :disabled="isLoading" aria-label="add-deal-from-stock" @click="addDealFromStock">
    <AppLoader v-if="isLoading" />
    <template v-else>Добавить в сделки</template>
  </AppButton>
</template>

<style scoped>
.button-deal {
  flex: 1;
  display: flex;
  justify-content: center;
  align-self: flex-end;
}
</style>
