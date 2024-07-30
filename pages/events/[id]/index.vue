<template>
    <article class="event">
      <header class="event__header @@class">
        <h1 class="event__title title">Вечер | The Best of Sade</h1>

        <div class="event__about">
          <div class="event__info">
            <time datetime="2024-12-16T20:00" class="event__time">
              16/12/2024
            </time>

            <div class="event__info-text">
              Кафе "Птичка"
            </div>
          </div>

          <picture class="event__picture">
            <source media="(max-width: 1169px)" type="image/webp" srcset="assets/images/sade_tablet.webp" />

            <source media="(max-width: 1169px)" srcset="assets/images/sade_tablet.jpg" />

            <source type="image/webp" srcset="assets/images/sade.webp" />

            <img class="event__image" src="assets/images/sade.jpg" alt="Вечер | The Best of Sade">
          </picture>

          <div class="event__info">
            <span class="event__time" datetime data-caption="начало">
              20:00
            </span>

            <div class="event__info-text">
              Ленина 10 | 2 этаж
            </div>
          </div>
        </div>
      </header>

      <div class="event__container @@class">
        <div class="event__content content">
          <h5 class="event__title--1">Программа мероприятия:</h5>

          <ul class="event__text">
            <li>20:15 — Приветствие гостей</li>
            <li>20:30 — Первая подача блюд | Салаты</li>
            <li>20:40 — Живой вокал | Композиции 1-3</li>
            <li>21:20 — Подача горячих блюд</li>
            <li> 21:30 — Живой вокал | Композиции 4-7</li>
            <li>22:15 — Подача десерта</li>
            <li>22:30 — Живой вокал | Композиции 8-9</li>
            <li>23:00 — Завершение вечера</li>
          </ul>

          <br />
          <h5 class="event__title--2">The Best of Sade</h5>
          <p class="event__text">
            Первый альбом-компиляция Sade, выпущенный в 1994 году. Он содержит 9 треков, включая самые
            популярные хиты группы, раритеты и их любимые треки.
          </p>

          <p class="event__text">
            Группа продемонстрировала необычайное долголетие и креативность своей творческой карьеры. Она
            лидировала музыкальных чартах с 1994 по 1995 год, став четырехкратно платиновой в США и продав
            более 2 миллионов копий в Европе.
          </p>

          <br />

          <ol class="event__text">
            <li>Your Love Is King</li>
            <li>Hang On To Your Love</li>
            <li>Smooth Operator</li>
            <li>Jezebel</li>
            <li>The Sweetest Taboo</li>
            <li>Is It A Crime</li>
            <li>Never As Good As The First Time</li>
            <li>Love Is Stronger Than Pride</li>
            <li>Paradise</li>
          </ol>
        </div>

        <!-- prettier-ignore  -->
        @@include('blocks/reserve.html', {class: "event__reserve"})
      </div>
    </article>
</template>

<script setup>

</script>

<style lang="less">

</style>