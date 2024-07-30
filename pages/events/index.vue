<template>
  <div class="events">
    <section class="events__listing listing">
      <h2 class="listing__title section-title">Мероприятия</h2>
      <div class="listing__events-list" v-if="cards.length !== 0">
        <CardEvents class="listing__event-card" v-for="(card, cardIdx) in cards" :key="cardIdx" :data="card" />
      </div>
      <div v-else-if="cards.length === 1" class=""> Осталось одно мероприятие, успей посетить</div>
      <div v-else class="listing__events-list">
        На данный момент мероприятия отсутствуют
      </div>
    </section>
  </div>
</template>

<script setup>
import cards from "@/json/events.json";
</script>

<style lang="less"></style>