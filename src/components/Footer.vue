<template>
    <div class="footer">
        <div class="footer-content font-main ">
            <span class="footer-title">Наши контакты</span>
            <div class="footer-contacts-block">
                <div class="footer-contacts-block-item">
                    <span class="footer-contacts-block-item-name">Никита</span>
                    <span>+7 (906) 306-77-69</span>
                    <div class="footer-contacts-block-item-icons">
                        <img 
                            @click="openLink('https://t.me/shkabio_n')"
                            src="../assets/img/tg.svg" 
                            class="tg-icon" 
                        />
                        <img 
                            @click="openLink('https://vk.com/n_shkabio')" 
                            src="../assets/img/vk.svg" 
                            class="vk-icon" 
                        />
                    </div>
                </div>
                <div class="footer-contacts-block-item">
                    <span class="footer-contacts-block-item-name">Варвара</span>
                    <span>+7 (967) 800-76-53</span>
                    <div class="footer-contacts-block-item-icons">
                        <img 
                            @click="openLink('https://t.me/BarbaraSycheva')"
                            src="../assets/img/tg.svg" 
                            class="tg-icon" 
                        />
                        <img 
                            @click="openLink('https://vk.com/hakuna_mmatata')"
                            src="../assets/img/vk.svg" 
                            class="vk-icon" 
                        />
                    </div>
                </div>

                <div v-if="!isMobile" class="footer-info">
                    <span>10 августа 2025 год</span>
                    <span>г. Энгельс, ул. пятница 19</span>
                </div>
            </div>

            <div v-if="isMobile" class="footer-info">
                <span>10 августа 2025 год</span>
                <span>г. Энгельс, ул. пятница 19</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize();
const isMobile = computed(() => width.value < 1144);

const openLink = (link: string) => {
    window.open(link, '_blank');
}
</script>

<style scoped lang="scss">
.footer {
    width: 100%;
    height: 235px;
    color: #fff7ea;
    background-color: rgb(126, 98, 75);
    padding: 32px 0;

    @media screen and (width < 1144px) {
        height: 300px;
    }

    .footer-content {
        width: 1144px;
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media screen and (width < 1144px) {
            width: 90%;
        }

        .footer-title {
            font-size: 24px;
            font-weight: 600;

            @media screen and (width < 1144px) {
                margin-bottom: 24px;
            }
        }

        .footer-contacts-block {
            margin-top: 24px;
            display: flex;
            gap: 128px;

            @media screen and (width < 1144px) {
                justify-content: space-between;
                margin-top: 0px;
                gap: 24px;
            }

            .footer-contacts-block-item {
                display: flex;
                flex-direction: column;
                gap: 4px;

                .footer-contacts-block-item-name {
                    font-size: 18px;
                    font-weight: 500;
                }

                .footer-contacts-block-item-icons {
                    display: flex;
                    margin-top: 8px;
                    gap: 12px;

                    img {
                        cursor: pointer;
                        transition: 0.2s;

                        &:hover {
                            opacity: 0.7;
                            transition: 0.2s;
                        }
                    }

                    .tg-icon {
                        margin-top: 4px;
                        width: 36px;
                        height: 36px;
                    }

                    .vk-icon {
                        width: 42px;
                        height: 42px;
                    }
                }
            }

            .footer-info {
                gap: 4px;
                display: flex;
                flex-direction: column;
                margin-left: auto;
                margin-top: auto;

                @media screen and (width < 1144px) {
                    margin: 0 auto;
                    flex-direction: row;
                    gap: 12px;
                }

                span {
                    margin-left: auto;
                }
            }
        }
    }

    .footer-info {
        @media screen and (width < 1144px) {
            margin: 0 auto;
            margin-top: auto;
            display: flex;
            gap: 12px;
            font-size: 14px;
        }
    }
}
</style>
  