<template>
    <div id="where-block" class="where-block-bg">
        <div class="where-block-content">
            <div class="where-block-content-info">
                <span class="font-biuty where-block-content-info-title">
                    Где будет свадьба?
                </span>
                <span class="font-main font-cursive">
                    <span class="weight-bold">Место:</span> Усадьба волжино
                </span>
                <span class="font-main font-cursive">
                    <span class="weight-bold">Адресс:</span> ул. пятница 19, Энгельс
                </span>
            </div>
            <div class="where-block-map">  
                <iframe 
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A1b1c8cf1e596f0fc5008d622833bfc9cea7db7d51b0a5b9529426609f82aa9cc&amp;source=constructor" 
                    :width="mapWidth" 
                    :height="mapHeight" 
                    frameborder="0">
                </iframe>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize();
const isMobile = computed(() => width.value < 1144);
const mapWidth = computed(() => isMobile.value ? width.value - 40 : 415);
const mapHeight = computed(() => isMobile.value ? 300 : 250);
</script>

<style scoped lang="scss">
.where-block-bg {
    width: 100%;
    height: 550px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 120px;
    background-image: url(../assets/img/WhereBg.jpg);
    background-position: right;
    display: flex;

    @media screen and (width < 1144px) {
        margin-bottom: 86px;
    }

    .where-block-content {
        width: 1144px;
        margin: 0 auto;

        @media screen and (width < 1144px) {
            width: 100%;
        }

        .where-block-content-info {
            width: 415px;
            padding: 16px;
            border-radius: 12px;
            background: #FFFFFF;
            margin-left: auto;
            margin-top: 70px;
            margin-bottom: 24px;
            box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);

            display: flex;
            flex-direction: column;

            @media screen and (width < 1144px) {
                width: 280px;
                margin-top: 40px;
                box-shadow: none;
            }

            .where-block-content-info-title {
                font-size: 26px;
                font-weight: 400;
                position: relative;
                padding-bottom: 12px;

                &::after {
                    content: '';
                    position: absolute;
                    width: 45%;
                    height: 2.5px;
                    background-color: #000000;
                    bottom: 17px;
                    left: 80px;
                }
            }

            .weight-bold {
                font-weight: 600;
            }
        }

        .where-block-map {
            width: 415px;
            margin-left: auto;

            @media screen and (width < 1144px) {
                width: 100%;
                padding-top: 25px;
                margin-left: 0px;
            }
            
            iframe {
                border-radius: 12px;
                box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
            }
        }
    }
}
</style>
  
  