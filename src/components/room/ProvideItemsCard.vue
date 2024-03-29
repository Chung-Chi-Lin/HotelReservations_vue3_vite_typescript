<script setup lang="ts">
import { computed } from "vue";
import { Room } from "@/interfaces/Room";
import { useRoute } from "vue-router";

const props = defineProps({
    // 標題
    title: {
        type: String as () => "房間格局" | "房內設備" | "備品提供",
        default: "房內設備",
    },
    // 提供內容
    info: {
        type: Array as () => Room["facilityInfo"] | Room["amenityInfo"],
        default: () => [],
    },
    // 是否有邊框
    isBorder: {
        type: Boolean,
        default: false,
    },
});

// 過濾 isProvide 為 true 的 Info
const filterInfo = computed(() => props.info.filter((item) => item.isProvide));

// routeName
const route = useRoute();
const routeName = (route.name as string) || "";
</script>
<template>
    <div class="d-flex align-items-center text-neutral">
        <div class="customize-vr"></div>
        <h5
            class="mb-0"
            v-if="routeName === 'rooms' || routeName === 'rooms-reservation'"
        >
            <strong>{{ title }}</strong>
        </h5>
        <strong v-else>{{ title }}</strong>
    </div>
    <div
    class="card mt-6"
    :class="{ 'border-0': !isBorder }"
    >
        <div class="card-body p-6">
            <ul
            class="list-unstyled mb-0 grid gap-2"
            :class="routeName === 'rooms-success' ? 'room-success' : 'room'"
            >
                <li v-if="!filterInfo.length"><strong>無</strong></li>
                <li v-else v-for="(item, index) in filterInfo" :key="index">
                    <font-awesome-icon
                    icon="fa-solid fa-check"
                    class="text-primary"
                    size="lg"
                    /><strong class="ps-2">{{ item.title }}</strong>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss">
.room,
.room-success {
    --bs-columns: 2;

    @include media-breakpoint-up(sm) {
        --bs-columns: 3;
    }

    @include media-breakpoint-up(md) {
        --bs-columns: 5;
    }
}

// 其他有房型的頁面
.room {
    @include media-breakpoint-up(lg) {
        --bs-columns: 3;
    }

    @include media-breakpoint-up(xl) {
        --bs-columns: 5;
    }

    // 預約成功頁面
    &-success {
        @include media-breakpoint-up(lg) {
            --bs-columns: 2;
        }

        @include media-breakpoint-up(xxl) {
            --bs-columns: 3;
        }
    }
}
</style>