<template>
    <header class="main-header">
        <h1 class="main-header__title">АРТ — ПРОСТРАНСТВО</h1>
        <picture class="main-header__picture">
            <img src="assets/images/LENNI.png" />
        </picture>
        <p class="main-header__text"> ДЛЯ ЛЮДЕЙ, ГОРЯЩИХ СЕРДЦЕМ И ДЕЛОМ
            <br> МЕСТО ДЛЯ НАСТОЯЩЕГО
        </p>
    </header>
</template>

<script setup>

</script>

<style lang="less">
.main-header {
    padding: 100px 0;

    @media @bw1340 {
        padding: 44px 0;
    }

    @media @bw320 {
        padding: 20px 0;
    }

    &__title,
    &__text {
        margin: 0 0 70px;
        padding-left: 40px;
        padding-right: 40px;
        text-align: center;
        text-transform: uppercase;
        font-family: "Lora", serif;
        font-weight: 400;
        font-size: 45px;
        line-height: normal;
        color: #1f1e1e;

        @media @bw1340 {
            font-size: 35px;
            line-height: 45px;
        }

        @media @bw768 {
            margin: -21px 0 51px;
            font-size: 30px;
            line-height: 38px;
            width: auto;
        }

        @media @bw320 {
            margin: -42px 0 29px;
            font-size: 13px;
            line-height: 17px;
            padding-left: 23px;
            padding-right: 23px;
            width: auto;
        }
    }

    &__title {
        margin-top: 0;
        // margin-top: 70px;
    }

    &__text {
        margin: 0 auto;
        max-width: 948px;
        width: 100%;

        @media @bw768 {
            margin-bottom: 33px;
        }

        @media @bw320 {
            margin-bottom: 20px;
        }
    }

    &__picture {
        display: block;
        position: relative;
        width: 100%;
        margin-bottom: 70px;

        &::before {
            content: '';
            display: block;
            width: 100%;
            //padding-top: 16.927%;
            padding-top: 1%;
        }
    }

    &__img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -o-object-fit: contain;
        object-fit: contain;
    }
}
</style>