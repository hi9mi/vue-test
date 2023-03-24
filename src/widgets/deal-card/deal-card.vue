<script setup lang="ts">
import LocationIcon from "@app/shared/icons/location.svg?component";
import { formatPrice } from "@app/shared/libs";
import type { Deal } from "@app/shared/types";
import { AppCard } from "@app/shared/ui";

defineProps<{ deal: Deal }>();
</script>

<template>
  <AppCard>
    <template #img>
      <img class="card-img" src="/image.webp" alt="description" />
    </template>
    <template #body>
      <span class="card-offer-type">{{ deal.offer_type === "auction" ? "Аукцион" : "Прямая продажа" }}</span>
      <h1 class="card-title">{{ deal.name }}</h1>
      <div class="card-location">
        <LocationIcon class="location-icon" />
        <address class="location-address">{{ deal.location }}</address>
      </div>
      <p class="card-seller"><span>Продавец</span> {{ deal.seller }}</p>
      <div class="card-type">
        <p>Вид товара</p>
        <p>{{ deal.type }}</p>
      </div>
      <p class="card-description">
        {{ deal.description }}
      </p>
    </template>
    <template #details>
      <p class="total-price">
        {{ formatPrice(deal.price * deal.quantity) }}
      </p>
      <dl class="definition-list">
        <dt>Количество</dt>
        <dd>{{ deal.quantity }} шт.</dd>
        <dt>Стоимость за штуку</dt>
        <dd>
          {{ formatPrice(deal.price) }}
        </dd>
      </dl>
    </template>
    <template #actions>
      <slot name="actions"></slot>
    </template>
  </AppCard>
</template>

<style scoped>
.card-img {
  width: 256px;
  height: 256px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}
.card-offer-type {
  color: var(--color-manatee);
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 12px;
  display: block;
}

.card-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-dark-blue);
  margin-bottom: 12px;
}

.card-location {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;
  background-color: var(--color-light-gray);
  width: max-content;
  border-radius: 5px;
  margin-bottom: 12px;
}

.location-address {
  font-weight: 400;
  font-size: 13px;
  color: var(--color-light-blue);
  font-style: normal;
  word-wrap: break-word;
}

.card-seller {
  font-size: 13px;
  font-weight: 400;
  color: var(--color-dark-blue);
  margin-bottom: 12px;
}
.card-seller > span {
  color: var(--color-manatee);
}

.card-type {
  background-color: var(--color-light-gray);
  padding: 8px;
  border-radius: 10px;
  width: max-content;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 12px;
}
.card-type > p:first-of-type {
  color: var(--color-manatee);
}
.card-type > p:last-of-type {
  color: var(--color-light-blue);
}

.card-description {
  font-size: 13px;
  font-weight: 400;
  color: var(--color-dark-blue);
  line-clamp: 3;
  -webkit-line-clamp: 3;
  text-align: justify;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.total-price {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-dark-blue);
  margin-bottom: 8px;
}

.definition-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  font-size: 13px;
  font-weight: 400;
}
.definition-list > dt {
  width: 50%;
  text-align: left;
  color: var(--color-manatee);
}
.definition-list > dd {
  width: 50%;
  text-align: right;
  color: var(--color-dark-blue);
}
</style>
