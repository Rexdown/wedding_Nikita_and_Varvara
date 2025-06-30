<template>
    <div id="google-block" class="form-block-wraper">
        <div class="form-block-content">
            <span class="font-biuty form-block-content-title">
                Анкета гостя
            </span>

            <span class="font-main form-block-content-text">
                Вне зависимости от того, планируте ли вы пойти на свадбу, 
                убедительно просим пройти анкету, <br v-if="!isMobile" />на которую вы можете попасть по этой кнопке. 
                <br/><br/><span class="font-cursive">Этим вы очень сильно нам поможете, спасибо!</span>
            </span>

            <div class="form-block-content-btn-container">
                <button @click="openLink" class="font-main form-block-content-btn">
                    Пройти анкету
                </button>
                <img class="form-block-content-btn-arrow" src="../assets/img/Arrow.svg" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize();
const isMobile = computed(() => width.value < 1144);

const openLink = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeSX3CL20NWfsGrXjSuWeIdMzIITgi3kzuU6glBt8PSDc_FsA/viewform?usp=dialog', '_blank');
}
</script>

<style scoped lang="scss">
.form-block-wraper {
    width: 1144px;
    margin: 0 auto;
    margin-bottom: 120px;

    @media screen and (width < 1144px) {
        width: 90%;
        margin-bottom: 86px;
    }

    .form-block-content {
        display: flex;
        flex-direction: column;
        gap: 32px;

        background-color: #ffffff;
        box-shadow: 0 0 7px 7px rgba(36, 36, 36, 0.1);
        border-radius: 12px;
        padding: 24px;

        .form-block-content-title {
            font-size: 26px;
            font-weight: 400;
            position: relative;
            margin-left: 25px;

            @media screen and (width < 1144px) {
                margin-left: 10px;
            }

            &::after {
                content: '';
                position: absolute;
                width: 14%;
                height: 2.5px;
                background-color: #000000;
                bottom: 2px;
                left: 50px;

                @media screen and (width < 1144px) {
                    width: 40%;
                    left: 60px;
                }
            }
        }

        .form-block-content-text {
            margin: 0 auto;
            text-align: center;
            font-size: 18px;

            @media screen and (width < 1144px) {
                font-size: 16px;
            }

            .font-cursive {
                font-weight: 600;
            }
        }

        .form-block-content-btn-container {
            width: 220px;
            margin: 24px auto;
            position: relative;

            @media screen and (width < 1144px) {
                margin-top: 0px;
                margin-bottom: 12px;
            }

            .form-block-content-btn {
                width: 100%;
                padding: 12px 24px;
                background-color: rgb(216, 231, 190);
                border-radius: 3px;
                font-weight: 500;
                transition: 0.4s;
                color: #000000;

                @media screen and (width < 1144px) {
                    padding: 8px 12px;
                }

                &:hover {
                    color: #FFFFFF;
                    background-color: rgb(171, 197, 125);
                    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.1);
                    transition: 0.4s;
                }
            }

            .form-block-content-btn-arrow {
                position: absolute;
                width: 135px;
                top: -150%;
                left: 135%;

                @media screen and (width < 1144px) {
                    display: none;
                }
            }
        }
    }
}
</style>
  
  