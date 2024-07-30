<template>
    <div class="home">
        <HomeTop class="home__main-header"/>
        <section class="offers home__offers">
            <div class="offers__container">
                <p class="offers__title">
                    Я ХОЧУ:
                </p>
                <div class="offers__block">
                    <button type="button" class="offers__btn1 btn btn--red" @click="openEventsPp">
                        Провести мероприятие
                    </button>
                    <button type="button" class="offers__btn2 btn">
                        Стать арендатором
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>
<!-- 50 минут -->

<script setup>

const store = useStore();
const openEventsPp = () => {
    store.modal.eventPP = true;
}

</script>

<style lang="less"></style>