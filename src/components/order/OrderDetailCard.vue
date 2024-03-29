<script setup lang="ts">
import { computed } from "vue";
import ProvideItemsCard from "@/components/room/ProvideItemsCard.vue";
import { OrderDetail } from "@/interfaces/Order";
import { daysDifference, zhTwDateTransform } from "@/handle-formats/HandleDate";
import { currencyTransform } from "@/handle-formats/FormatTransform";

const props = defineProps({
    // 訂單詳情
    orderDetails: {
        type: Array as () => OrderDetail[],
        default: () => [],
    },
    // 是否為歷史訂單
    isHistory: {
        type: Boolean,
        default: false,
    },
    // 是否顯示全部
    isShowAll: {
        type: Boolean,
        default: false,
    },
});

// 過濾 isProvide 為 true 的 Info
const filterOrderDetails = computed(() =>
    props.orderDetails.filter((item) => item)
);

function getTotal(orderDetail: OrderDetail): string {
    const { roomId, checkInDate, checkOutDate } = orderDetail;
    const days = daysDifference(checkInDate, checkOutDate, true) as number;
    return currencyTransform(roomId.price * days);
}
</script>
<template>
    <div class="card rounded-3 border-0">
        <div class="card-body p-4 p-lg-8">
            <h5 class="mb-6 mb-lg-8" v-if="isHistory">歷史訂單</h5>
            <ul class="list-group list-group-flush d-grid gap-6 gap-lg-8">
                <!-- 沒有資料 -->
                <li class="list-group-item p-0" v-if="!filterOrderDetails.length">
                    <template v-if="!isHistory">
                        <span class="text-neutral-80 mb-2 d-block">預訂參考編號：</span>
                        <h5 class="mb-0">即將來的行程</h5>
                    </template>
                    <div class="text-center text-primary-80 my-6 my-lg-8">
                        <font-awesome-icon icon="fa-solid fa-inbox" size="4x" />
                        <p class="mb-0 mt-2">沒有資料</p>
                    </div>
                </li>
                <!-- 單筆訂單內容 -->
                <template v-else>
                    <li
                    v-for="(orderDetail, index) in filterOrderDetails"
                    :key="orderDetail._id"
                    v-show="index < 3 || isShowAll"
                    class="list-group-item p-0"
                    :class="{ 'none-border-style': index == 2 && !isShowAll }"
                    >
                    <ul class="list-group list-group-flush d-grid gap-6 gap-lg-8">
                        <li class="list-group-item px-0 pt-0 pb-6 pb-lg-8">
                        <template v-if="!isHistory">
                            <span class="text-neutral-80 mb-2 d-block"
                            >預訂參考編號：{{ orderDetail._id }}</span
                            >
                            <h5 class="mb-0">即將來的行程</h5>
                        </template>
                        <div
                            :class="{
                            'd-flex flex-column flex-lg-row flex-lg-column flex-xl-row':
                                isHistory,
                            }"
                        >
                            <img
                            :class="
                                isHistory
                                ? 'isHistoryImgSize me-lg-6 mb-6 mb-lg-0 mb-lg-6 mb-xl-0 flex-shrink-0'
                                : 'my-6 my-lg-8'
                            "
                            :src="orderDetail.roomId.imageUrl"
                            class="rounded roomImgHeight"
                            :alt="orderDetail.roomId.name"
                            />
                            <ul class="list-unstyled mb-0">
                                <li v-if="isHistory" class="text-neutral-80 mb-4">
                                    預訂參考編號：{{ orderDetail._id }}
                                </li>
                                <li class="fw-bold" :class="isHistory ? 'mb-4' : 'mb-6'">
                                    <h6 class="mb-0 d-flex align-items-center text-neutral-80">
                                        {{ orderDetail.roomId.name }}<template v-if="!isHistory">，{{ daysDifference(
                                            orderDetail.checkInDate,
                                            orderDetail.checkOutDate
                                            )}}
                                            <div class="vr bg-neutral-60 mx-3"></div>
                                            住宿人數：{{ orderDetail.peopleNum }} 位
                                        </template>
                                    </h6>
                                </li>
                                <li class="mb-4 d-grid gap-2" v-if="isHistory">
                                    <span class="d-block">
                                    住宿天數：{{
                                        daysDifference(
                                        orderDetail.checkInDate,
                                        orderDetail.checkOutDate
                                    )}}
                                    </span>
                                    <span class="d-block">
                                    住宿人數：{{ orderDetail.peopleNum }} 位
                                    </span>
                                </li>
                                <li
                                    :class="isHistory ? 'mb-4' : 'mb-6 fw-bold'"
                                    class="d-grid gap-2"
                                >
                                    <div class="d-flex align-items-center">
                                        <div class="customize-vr"></div>
                                        <section>
                                            入住：{{ zhTwDateTransform(orderDetail.checkInDate)
                                            }}<span v-if="!isHistory">，15:00 可入住</span>
                                        </section>
                                    </div>
                                    <div class="d-flex align-items-center">
                                    <div class="customize-vr bg-neutral-60"></div>
                                    <section>
                                        退房：{{ zhTwDateTransform(orderDetail.checkOutDate)
                                        }}<span v-if="!isHistory">，12:00 前退房</span>
                                    </section>
                                    </div>
                                </li>
                                <li class="fw-bold">
                                    {{ getTotal(orderDetail) }}
                                </li>
                            </ul>
                        </div>
                        </li>
                        <!-- 提供細項 -->
                        <li class="list-group-item p-0 d-grid gap-6 gap-lg-8" v-if="!isHistory">
                            <section>
                                <ProvideItemsCard
                                :isBorder="true"
                                :info="orderDetail.roomId.facilityInfo"
                                title="房內設備"
                                />
                            </section>
                            <section>
                                <ProvideItemsCard
                                :isBorder="true"
                                :info="orderDetail.roomId.amenityInfo"
                                title="備品提供"
                                />
                            </section>
                        </li>
                    </ul>
                    </li>
                </template>
            </ul>
            <!-- 放置 btn 插槽 -->
            <slot></slot>
        </div>
    </div>
</template>
<style lang="scss">
.roomImgHeight {
    height: 220px;

    @include media-breakpoint-up(lg) {
        height: 240px;
    }

    // 歷史專用 - 圖片尺寸
    &.isHistoryImgSize {
        width: 120px;
        height: 80px;
    }
}
.none-border-style {
    border-bottom-width: 0 !important;
}
</style>