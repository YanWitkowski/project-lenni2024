<template>
    <header class="page-header">
        <div class="page-header__container">
        
            <NuxtLink to="/" class="page-header__logo">
                <SvgIcon class="page-header__logo-icon" name="logo" width="202" height="147" />
            </NuxtLink>

            <nav class="page-header__nav">
                <NuxtLink to="/events" class="page-header__nav-link">Мероприятия</NuxtLink>
                <NuxtLink to="/" class="page-header__nav-link">Блог</NuxtLink>
                <NuxtLink to="/" class="page-header__nav-link">О нас</NuxtLink>
                <NuxtLink to="/" class="page-header__nav-link">Контакты</NuxtLink>

                <div class="page-header__nav-user">
                    <NuxtLink to="/" class="page-header__nav-user-link">
                        Ян В.
                    </NuxtLink>

                    <button type="button" class="page-header__nav-logout">
                        <SvgIcon class="page-header__nav-logout-icon" name="door" width="24" height="24" />
                    </button>
                </div>
            </nav>

            <div class="page-header__right-block">
                <a href="#" class="page-header__user-btn">
                    Войти
                    <SvgIcon class="page-header__user-icon" name="user" width="21" height="18" />
                </a>
                <button type="button" class="page-header__nav-toggle" @click="toggleNav"></button>
            </div>
        </div>

    </header>
</template>

<script setup>
const store = useStore();
const toggleNav = () => {
    store.navActive = !store.navActive;
};
</script>

<style lang="less">
.page-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 147px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100;

    // @media @bw1660 {
    //     height: 111px;
    // }

    // @media @bw768 {
    //     height: 70px;
    // }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: fade(@gray, 98%);

        @supports (backdrop-filter: blur(20px)) {
            background-color: fade(@gray, 70%);
            backdrop-filter: blur(20px);
        }
    }

    &__container {
        .container();
        align-items: center;
        display: flex;
        position: relative;
        margin: 0 auto;
        justify-content: space-between;
        z-index: 1;
    }

    &__logo {
        position: relative;
        flex-shrink: 0;
        width: 202px;
        height: 147px;
        font-size: 0;
        text-decoration: none;
        z-index: 1;

        @media @bw1660 {
            width: 152px;
            height: 111px;
        }

        @media @bw768 {
            width: 96px;
            height: 70px;
        }
    }

    &__logo-icon {
        width: 100%;
        height: 100%;
    }

    &__nav {
        box-sizing: border-box;
        display: flex;
        align-items: baseline;
        margin: 0 auto;

        @media @bw1020 {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100vh;
            flex-direction: column;
            align-items: flex-start;
            padding: 211px 30px 30px;
            background-color: fade(@gray, 98%);
            transition: transform 0.4s;
            transform: translateX(-100%);
            overflow-x: hidden;
            overflow-y: auto;

            @supports (backdrop-filter: blur(20px)) {
                background-color: fade(@gray, 70%);
                backdrop-filter: blur(20px);
            }
        }

        @media @bw768 {
            padding: 150px 20px 30px;
        }
    }

    &__nav-link,
    &__nav-user-link,
    &__nav-logout {
        color: @black;
        text-decoration: none;

        &:active {
            color: @red_dark;
        }

        &:hover {
            @media (hover: hover) {
                color: @red_dark;
            }
        }
    }

    &__nav-link {
        margin: 0 25px;
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
        text-decoration: none;
        transition: color 0.2s;

        @media @bw1020 {
            margin: 0 0 40px;
            font-size: 16px;
            line-height: 22px;
        }
    }

    &__nav-user {
        display: none;

        @media @bw1020 {
            display: flex;
            align-items: center;
            margin-top: 20px;
        }
    }

    &__nav-user-link {
        margin-right: 25px;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
    }

    &__nav-logout {
        width: 24px;
        height: 24px;
        font-size: 0;
    }

    &__nav-logout-icon {
        display: none;
    }

    &__right-block {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 202px;
        z-index: 1;

        @media @bw1660 {
            width: 152px;
        }

        @media @bw1020 {
            width: auto;
            margin-left: auto;
        }
    }

    &__user-btn {
        max-width: 100%;
        display: inline-block;
        box-sizing: border-box;
        padding: 15px 40px;
        border: 1px solid @black;
        background-color: transparent;
        outline: none;
        color: @black;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        text-decoration: none;
        transition: color 0.2s, background-color 0.2s, border-color 0.2s;
        overflow: hidden;
        cursor: pointer;

        @media @bw1020 {
            display: flex;
            width: 40px;
            height: 40px;
            padding: 0;
            border: none;
            background: none;
            color: @black;
            font-size: 0;
        }

        &:hover {
            background-color: @black;
            color: @white;

            @media @bw1020 {
                background: none;
                color: @red;
            }
        }

        &:hover {
            @media (hover:hover) {}
        }

        &:active {
            color: @red;

        }
    }

    &__user-icon {
        display: none;

        @media @bw1020 {
            display: block;
            margin: auto;

            transition: color 0.2s;

            &:active {
                color: @red_dark;
            }

            &:hover {
                @media (hover: hover) {
                    color: @red_dark;
                }
            }

        }
    }

    &__nav-toggle {
        display: none;

        @media @bw1020 {
            display: block;
            position: relative;
            right: -11px;
            margin-left: 18px;
            width: 40px;
            height: 40px;
            border: none;
            background: none;
            cursor: pointer;
        }

        @media @bw768 {
            margin-left: 5px;
        }

        &::before,
        &::after {
            content: "";
            display: block;
            position: absolute;
            top: 19px;
            left: 11px;
            width: 18px;
            height: 2px;
            border-radius: 2px;
            background-color: @black;
            transform-origin: 50% 50%;
            transition: transform 0.4s, box-shadow 0.4s;
        }

        &::before {
            top: 13px;
            box-shadow: 0 6px 0 @black;
        }

        &::after {
            top: 25px;
        }
    }
}
</style>