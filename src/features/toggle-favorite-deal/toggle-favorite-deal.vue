<script lang="ts" setup>
import { ref } from "vue";

import * as api from "@app/shared/api";
import HeartIcon from "@app/shared/icons/heart.svg?component";
import { AppButton, AppLoader } from "@app/shared/ui";

const props = defineProps<{ isFavorite: boolean; id: number }>();
const emit = defineEmits<{ (e: "toggled"): void }>();

const isLoading = ref(false);

const toggleFavoriteDeal = async () => {
  isLoading.value = true;
  if (props.isFavorite) {
    await api.deleteFromFavoriteList(props.id);
    emit("toggled");
  } else {
    await api.addToFavoriteList(props.id);
    emit("toggled");
  }
  isLoading.value = false;
};
</script>

<template>
  <AppButton
    class="button-favorite"
    :class="{ active: isFavorite }"
    :disabled="isLoading"
    aria-label="toggle-favorite-deal"
    @click="toggleFavoriteDeal"
  >
    <AppLoader v-if="isLoading" />
    <HeartIcon v-else class="toggle-favorite-icon" />
  </AppButton>
</template>

<style scoped>
.button-favorite {
  align-self: flex-end;
}

.toggle-favorite-icon {
  width: 20px;
  height: 20px;
}
</style>
