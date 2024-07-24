<template>
    <header class="page-header">
        <div class="page-header__container">
            <a href="index.html" class="page-header__logo">
                <svg-icon class="page-header__logo-icon" name="logo" width="202" height="147" />
            </a>

            <nav class="page-header__nav">
                <a href="#" class="page-header__nav-link">Мероприятия</a>
                <a href="#" class="page-header__nav-link">Блог</a>
                <a href="#" class="page-header__nav-link">О нас</a>
                <a href="#" class="page-header__nav-link">Контакты</a>

                <div class="page-header__nav-user">
                    <a href="#" class="page-header__nav-user-link">
                        Ян В.
                    </a>

                    <a href="#" class="page-header__nav-logout">
                        <svg-icon class="page-header__nav-logout-icon" name="door" width="24" height="24" />
                    </a>
                </div>
            </nav>

            <div class="page-header__right-block">
                <a href="#" class="page-header__user-btn">
                    Войти
                    <svg-icon class="page-header__user-icon" name="user" width="21" height="18" />
                </a>
                <button type="button" class="page-header__nav-toggle" id="js-navToggle"></button>
            </div>
        </div>

    </header>
</template>

<script setup>

</script>

<style lang="less"></style>