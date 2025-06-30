<template>
  <Header />
  <div class="maint-info-block">
    <div class="maint-info-block-content">
      <span class="font-main title-main">THE WEDDING DAY</span>
      <img class="main-divider" src="../assets/img/WeddingDivider.svg" />
      <span class="font-biuty subtitle-main">
        Никита <br v-if="isMobile" />&<br v-if="isMobile" /> Варвара
      </span>
      <img class="pier-img" src="../assets/img/Pier.jpg" />
    </div>
  </div>
  <HelloInfo />
  <WhereInfo />
  <ColorsInfo />
  <GoogleFormBlock />
  <Footer />
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
import HelloInfo from "../components/HelloInfo.vue";
import WhereInfo from "../components/WhereInfo.vue";
import ColorsInfo from "../components/ColorsInfo.vue";
import GoogleFormBlock from "../components/GoogleFormBlock.vue";
import Footer from "../components/Footer.vue";

import { computed } from "vue";
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize();
const isMobile = computed(() => width.value < 1144);
</script>

<style scoped lang="scss">
.maint-info-block {
  padding-top: 84px;
  height: calc(100vh - 65px);
  text-align: center;
  display: flex;

  @media screen and (width < 1144px) {
    height: calc(100vh - 150px);
  }
}

.maint-info-block-content {
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.title-main {
  font-weight: 600;
  margin-top: 24px;
  font-size: 42px;

  @media screen and (width < 1144px) {
    font-size: 36px;
  }
}

.main-divider {
  width: 350px;
}

.subtitle-main {
  font-weight: 400;
  font-size: 56px;

  @media screen and (width < 1144px) {
    font-size: 48px;
    line-height: 1.2;
  }
}

.pier-img {
  width: 80%;
  height: 45vh;
  margin-top: 3vh;
  object-fit: cover;

  @media screen and (width < 1144px) {
    height: 25vh;
  }
}
</style>

