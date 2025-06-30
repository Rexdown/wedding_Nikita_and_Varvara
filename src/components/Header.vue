<template>
    <div class="header">
        <div v-if="!isMobile" class="header-btn-container">
            <button  @click="goToBlock('hello-block')" class="header-btn" >
                Когда мероприятие
            </button>
            <button @click="goToBlock('where-block')" class="header-btn">
                Куда ехать
            </button>
            <button @click="goToBlock('colors-block')" class="header-btn">
                Что нужно знать
            </button>
            <button @click="goToBlock('google-block')" class="header-btn">
                Пройти анкету
            </button>
        </div>

        <div v-else class="header-mobile-container">
            <div 
                @click="menuActive = !menuActive" 
                class="header-mobile-menu" 
                :class="{ active: menuActive }" 
            />
        </div>

        <div class="mobile-menu-list" :class="{ active: menuActive }">
            <button  @click="goToBlock('hello-block')" class="header-btn" >
                Когда мероприятие
            </button>
            <button @click="goToBlock('where-block')" class="header-btn">
                Куда ехать
            </button>
            <button @click="goToBlock('colors-block')" class="header-btn">
                Что нужно знать
            </button>
            <button @click="goToBlock('google-block')" class="header-btn">
                Пройти анкету
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize();
const isMobile = computed(() => width.value < 1144);

const menuActive = ref(false);

const goToBlock = (blockName: string) => {
    menuActive.value = false;
    const element = document.getElementById(blockName);

    if (element) {
        if (isMobile.value && blockName === 'hello-block') {
            element.style.scrollMarginTop = '60px';
        }
        if (isMobile.value && blockName === 'colors-block') {
            element.style.scrollMarginTop = '325px';
        }
        element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    }
}

watch(menuActive, () => {
    if (menuActive.value) {
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    } else {
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
    }
})
</script>

<style scoped lang="scss">
.header {
    width: 100%;
    height: 65px;
    background-color: rgb(254, 244, 236);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    position: fixed;
    z-index: 100;
    top: 0;

    .header-btn-container {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 72px;
    } 

    .header-mobile-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        .header-mobile-menu {
            width: 40px;
            height: 3px;
            border-radius: 2px;
            background-color: #000000;
            margin-left: auto;
            margin-right: 25px;
            position: relative;
            cursor: pointer;

            &::before {
                content: '';
                position: absolute;
                width: 40px;
                height: 3px;
                border-radius: 2px;
                background-color: #000000;
                top: -10px;
            }

            &::after {
                content: '';
                position: absolute;
                width: 40px;
                height: 3px;
                border-radius: 2px;
                background-color: #000000;
                top: 10px;
            }

            &.active {
                background-color: inherit;

                &::before {
                    top: 50%;
                    left: 10px;
                    width: 30px;
                    transform: translateY(-50%) rotate(45deg);
                }

                &::after {
                    top: 50%;
                    left: 10px;
                    width: 30px;
                    transform: translateY(-50%) rotate(-45deg);
                }
            }
        }
    }

    .mobile-menu-list {
        transition: 0.3s;
        width: calc(100vw - 60px);
        height: calc(100vh - 65px);
        background: rgb(252, 240, 230);
        position: absolute;
        right: calc(-100vw + 60px);
        border-top: 1px solid #cacaca;
        top: 65px;

        display: flex;
        flex-direction: column;
        padding: 50px 0;
        gap: 24px;

        &.active {
            right: 0;
            transition: 0.3s;
            overflow-y: hidden;
            box-shadow: -100px 0px 0px rgba(0, 0, 0, 0.6);
        }
    }
}

.header-btn {
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    transition: 0.3s;

    &:hover {
        transition: 0.3s;
        text-shadow:
            0 0 10px #b6bf71,
            0 0 20px #b6bf71,
            0 0 30px #b6bf71,
            0 0 40px #b6bf71,
    }

    @media screen and (width < 1144px) {
        font-size: 20px;
        font-style: italic;
        color: #000000;
        outline: none;
        box-shadow: none;
        -webkit-tap-highlight-color: transparent;

        &:hover {
            text-shadow: none;
        }
    }
}
</style>
  
  