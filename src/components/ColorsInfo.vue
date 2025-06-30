<template>
    <div id="colors-block" class="colors-info-wrapper">
        <div class="colors-info-container">
            <div class="colors-info-right-col">
                <div class="colors-info-text-block">
                    <span class="font-biuty colors-info-title">Свадебная палитра</span>
                    <span class="font-main colors-info-text">
                        Нам будет очень приятно, если ваш наряд будет соответствовать цветовой гамме нашей свадьбы.
                    </span>
                </div>

                <div v-if="isMobile" class="colors-examples">
                    <div class="colors-examples-item pink" />
                    <div class="colors-examples-item light-green" />
                    <div class="colors-examples-item yellow" />
                    <div class="colors-examples-item green" />
                </div>

                <div class="additional-block">
                    <span class="font-main additional-text">
                        Также хотим особенно акцентировать ваше внимание на то, что банкет будет проводиться
                        около водоема, и поэтому ближе к концу мероприятия может быть прохладно. 
                        Поэтому, рекомендуем помимо прекрасного настроения, прихватить с собой теплую одежду.
                    </span>
                </div>
            </div>

            <div v-if="!isMobile" class="colors-examples">
                <div class="colors-examples-item pink" />
                <div class="colors-examples-item light-green" />
                <div class="colors-examples-item yellow" />
                <div class="colors-examples-item green" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize();
const isMobile = computed(() => width.value < 1144);
</script>

<style scoped lang="scss">
.colors-info-wrapper {
    width: 1144px;
    margin: 0 auto;
    margin-bottom: 120px;

    @media screen and (width < 1144px) {
        width: 90%;
        margin-bottom: 86px;
    }

    .colors-info-container {
        width: 100%;    
        display: flex;
        justify-content: space-between;
    }

    .colors-info-right-col {
        gap: 36px;
        display: flex;
        flex-direction: column;
        width: 48%;

        @media screen and (width < 1144px) {
            width: 100%;
            gap: 64px;
        }
    }

    .colors-info-text-block {
        gap: 36px;
        display: flex;
        flex-direction: column;
        background-color: #FFFFFF;
        box-shadow: 0 0 7px 7px rgba(36, 36, 36, 0.1);
        border-radius: 12px;
        padding: 24px;
        width: 100%;

        @media screen and (width < 1144px) {
            gap: 18px;
        }

        .colors-info-title {
            font-size: 26px;
            font-weight: 500;
            position: relative;

            &::after {
                content: '';
                position: absolute;
                width: 180px;
                height: 2.5px;
                background-color: #000000;
                bottom: 0px;
                left: 70px;
            }
        }

        .colors-info-text {
            font-size: 18px;
            margin-left: 18px;

            @media screen and (width < 1144px) {
                font-size: 16px;
                margin-left: 0px;
            }
        }
    }

    .additional-block {
        background-color: #FFFFFF;
        box-shadow: 0 0 7px 7px rgba(36, 36, 36, 0.1);
        border-radius: 12px;
        padding: 24px;
        width: 100%;

        .additional-text {
            color: #453e3a;
            font-style: italic;
        }
    }

    .colors-examples {
        width: 45%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: auto 0;

        @media screen and (width < 1144px) {
            width: 100%;
        }

        .colors-examples-item {
            width: 175px;
            height: 175px;
            border-radius: 100%;

            @media screen and (width < 1144px) {
                width: 135px;
                height: 135px;
            }

            &.pink {
                background-color: rgb(252, 211, 217);
                margin-bottom: 32px;
                margin-right: 32px;
            }
            &.light-green {
                background-color: rgb(216, 231, 190);
                margin-bottom: 32px;
            }
            &.yellow {
                background-color: rgb(230, 220, 149);
                margin-right: 32px;
            }
            &.green {
                background-color: rgb(163, 169, 107);
            }
        }
    }
}
</style>
  
  