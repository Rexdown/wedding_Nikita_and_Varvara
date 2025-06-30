<template>
    <div id="hello-block" class="hello-info-block">
        <div class="hello-info font-cursive">
            <span class="font-main hello-info-text">
                Дорогие родные и близкие, мы приглашаем вас на одно из самых 
                важных событий в нашей жизни - нашу свадьбу!
            </span>
            <span class="font-main hello-info-text">
                Банкет, посвященный данному мероприятию состоится 
                <br/><span class="weight-bold">10 августа 2025 года</span>
                в 15:30 во саратовскому времени.
            </span>
            <img class="hello-info-img-top" src="../assets/img/wedding-frame.svg" />
            <img class="hello-info-img-bottom" src="../assets/img/wedding-frame.svg" />
        </div>

        <div class="hello-timer">
            <span class="font-main hello-timer-text">
                До этого момента осталось:
            </span>
            <div class="hello-timer-boxes">
                <div v-for="item in timerArr" :key="item.title" class="hello-timer-box">
                    <div class="hello-timer-numbers">
                        <div class="hello-timer-box-item">
                            <span class="font-main">{{ item.value.toString()[0] }}</span>
                        </div>
                        <div class="hello-timer-box-item">
                            <span class="font-main">{{ item.value.toString()[1] }}</span>
                        </div>
                    </div>
                    <span class="font-main">{{ item.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

function calculateTimeRemaining(targetDate: Date): { 
    days: number | string, 
    hours: number | string, 
    minutes: number | string, 
    seconds: number | string 
} {
    const currentDate = new Date();
    const diffInMs = targetDate.getTime() - currentDate.getTime();

    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24)).toString();
    const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
    const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60)).toString();
    const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000).toString();

    return { 
        days: days.toString().length === 1 ? '0' + days.toString() : days, 
        hours: hours.toString().length === 1 ? '0' + hours.toString() : hours, 
        minutes: minutes.toString().length === 1 ? '0' + minutes.toString() : minutes, 
        seconds: seconds.toString().length === 1 ? '0' + seconds.toString() : seconds 
    };
}

const targetDate = new Date('2025-08-10T15:30:00');
const timeRemaining = ref(calculateTimeRemaining(targetDate));
const timerArr = computed(() => ([
    {
        title: 'Дней',
        value: timeRemaining.value.days
    },
    {
        title: 'Часов',
        value: timeRemaining.value.hours
    },
    {
        title: 'Минут',
        value: timeRemaining.value.minutes
    },
    {
        title: 'Секунд',
        value: timeRemaining.value.seconds
    },
]));

const timerId = setInterval(() => {
    const newDate = new Date();
    const newDiffInMs = targetDate.getTime() - newDate.getTime();
    if (newDiffInMs <= 0) {
        console.log('Time is up!');
        clearInterval(timerId);
    } else {
        timeRemaining.value = calculateTimeRemaining(targetDate);
    }
}, 1000);
</script>

<style scoped lang="scss">
.hello-info-block {
    width: 1144px;
    margin: 120px auto;
    display: flex;
    justify-content: space-between;

    @media screen and (width < 1144px) {
        width: 100%;
        flex-direction: column;
        margin-bottom: 86px;
        margin-top: 175px;
    }

    .hello-info {
        width: 50%;
        padding: 24px;
        border-radius: 16px;
        border: 2px solid #000000;
        position: relative;

        display: flex;
        flex-direction: column;
        gap: 16px;

        @media screen and (width < 1144px) {
            width: 75%;
            margin: 0 auto;
        }

        .hello-info-img-top {
            position: absolute;
            top: -45px;
            right: -55px;
            width: 170px;
            height: 170px;
        }

        .hello-info-img-bottom {
            position: absolute;
            bottom: -45px;
            left: -55px;
            width: 170px;
            height: 170px;
            transform: rotate(180deg);
        }
    }

    .hello-info-text {
        font-size: 18px;
        font-weight: 500;

        @media screen and (width < 1144px) {
            font-size: 16px;
        }
    }

    .weight-bold {
        font-weight: 800;
    }

    .hello-timer {
        width: 44%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto 0;
        gap: 16px;

        @media screen and (width < 1144px) {
            width: 75%;
            margin: 0 auto;
            margin-top: 82px;
        }

        .hello-timer-text {
            font-size: 24px;
            font-weight: 500;
            margin: 0 auto;

            @media screen and (width < 1144px) {
                font-size: 20px;
            }
        }

        .hello-timer-boxes {
            display: flex;
            margin-top: 8px;
            gap: 32px;

            @media screen and (width < 1144px) {
                gap: 18px;
            }

            .hello-timer-box {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;

                .hello-timer-numbers {
                    display: flex;
                    gap: 8px;

                    @media screen and (width < 1144px) {
                        gap: 4px;
                    }
                }

                .hello-timer-box-item {
                    width: 46px;
                    height: 64px;
                    border-radius: 8px;
                    background-color: #dbceaa;
                    display: flex;

                    @media screen and (width < 1144px) {
                        width: 36px;
                        height: 52px;
                    }

                    span {
                        margin: auto;
                        font-size: 32px;

                        @media screen and (width < 1144px) {
                            font-size: 26px;
                        }
                    }
                }
            }
        }
    }
}
</style>
  
  