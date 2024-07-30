<template>
    <article class="event-card">
        <a href="#" class="event-card__link">
            <picture class="event-card__picture">
                <source type="image/webp" :srcset="img_webp" />

                <img :src="img" :alt="alt" class="event-card__img" />
            </picture>

            <h4 class="event-card__title">{{ title }}</h4>

            <p class="event-card__description">{{ descr }}</p>

            <time datetime="datetime" class="event-card__time">{{ time }}</time>
        </a>
    </article>
</template>

<script setup>
import { computed } from "vue";

const { data } = defineProps({
    data: {
        required: true,
        type: Object,
        default: () => { }
    }
  
});

const img_webp = computed(() => {
    return data.img_webp || ""
});

const img = computed(() => {
    return data.img || ""
});

const alt = computed(() => {
    return data.alt || ""
});

const title = computed(() => {
    return data.title || ""
});

const descr = computed(() => {
    return data.descr || ""
});

const datetime = computed(() => {
    return data.datetime || ""
});

const time = computed(() => {
    return data.time || ""
});

</script>

<style lang="less">
.event-card {
    display: flex;
    width: 405px;
    height: auto;
    color: @black;

    &__link {
        display: flex;
        flex-direction: column;
        width: 100%;
        text-decoration: none;

        &:active {
            .event-card__title {
                color: @red;
                text-decoration-color: @red;
            }
        }

        &:hover .event-card__title {
            @media (hover: hover) {
                color: @red;
                text-decoration-color: @red;
            }
        }

        &--show-more {
            color: @black;
            font-family: @font1;
            font-size: 16px;
            font-weight: 600;
        }
    }

    &__picture {
        display: block;
        position: relative;
        width: 100%;
        margin: 0 0 25px;
        font-size: 0;
        text-decoration: none;
        overflow: hidden;

        &::after {
            content: "";
            display: block;
            width: 100%;
            padding-top: 107, 16%;
        }
    }


    &__title {
        font-size: 24px;
        font-weight: 700;
        margin: -1px;

        @media @bw960 {
            font-size: 20px;
            font-weight: 600;
            line-height: 27px;
        }

        @media @bw400 {
            font-size: 16px;
            font-weight: 700;
            line-height: 22px;
        }
    }

    &__description {
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;

        @media @bw400 {
            font-size: 14px;
            line-height: 19px;
        }
    }
}
</style>