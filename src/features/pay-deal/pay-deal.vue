<script setup lang="ts">
import { ref } from "vue";

import * as api from "@app/shared/api";
import { AppButton, AppLoader } from "@app/shared/ui";

const props = defineProps<{ id: number; isPaid: boolean }>();
const emit = defineEmits<{ (e: "hasPaid"): void }>();

const isLoading = ref(false);

const addDealFromStock = async () => {
  isLoading.value = true;
  await api.paidDeal(props.id);
  isLoading.value = false;
  emit("hasPaid");
};
</script>

<template>
  <AppButton
    class="button-deal"
    :disabled="isLoading || isPaid"
    aria-label="add-deal-from-stock"
    :color="isPaid ? 'default' : 'green'"
    @click="addDealFromStock"
  >
    <AppLoader v-if="isLoading" />
    <template v-else>
      <template v-if="isPaid">Оплачено</template>
      <template v-else>Оплатить</template>
    </template>
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
