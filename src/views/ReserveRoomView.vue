<template>
  <section class="bg-milk-white">
    <section class="container py-12">
      <nav class="nav fs-3">
        <a class="nav-link" aria-current="page" href="#">
          <font-awesome-icon :icon="['fas', 'chevron-left']" class="text-black"/>
          <h3 class="d-inline"> 確認訂房資訊</h3>
        </a>
      </nav>
      <div class="row g-10">
        <div class="col">
          <section>
            <h4>訂房資訊</h4>
            <div class="mt-8 my-4">
              <p class="fw-bold border-type">選擇房型</p>
              <p>尊爵雙人房</p>
            </div>
            <div class="my-7">
              <p class="fw-bold border-type">訂房日期</p>
              <p>入住：12 月 4 日星期二</p>
              <p>退房：12 月 6 日星期三</p>
            </div>
            <div class="my-3">
              <p class="fw-bold border-type">房客人數</p>
              <p>2 人</p>
            </div>
          </section>
          <hr class="text-secondary my-8 border-3">
          <section>
            <div class="d-flex justify-content-between align-items-center">
              <h4>訂房人資訊</h4>
              <a href="" class="link-primary">套用會員資料</a>
            </div>
          </section>
          <hr class="text-secondary my-8 border-3">
          <section>
            <h4>房間資訊</h4>
            <div class="mt-8 my-4">
              <h5 class="fw-bold border-type">房型基本資訊</h5>
              <div class="row mt-5">
                <div class="col-3">
                  <div class="card">
                    <div class="card-body p-4">
                      <font-awesome-icon :icon="['fas', 'maximize']" class="text-primary"/>
                      <p class="text-nowrap pt-2">24 坪</p>
                    </div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="card">
                    <div class="card-body p-4">
                      <font-awesome-icon :icon="['fas', 'bed']" class="text-primary"/>
                      <p class="text-nowrap pt-2">1 張大床</p>
                    </div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="card">
                    <div class="card-body p-4">
                      <font-awesome-icon :icon="['fas', 'user']" class="text-primary"/>
                      <p class="text-nowrap pt-2">2-4 人</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="my-7">
              <h5 class="fw-bold border-type">房間格局</h5>
              <div class="card mt-5">
                <div class="p-4 d-flex">
                  <p class="text-nowrap pt-2"><font-awesome-icon :icon="['fas', 'check']" class="text-primary"/><span class="ms-2">市景</span></p>
                  <p class="d-inline text-nowrap pt-2"><font-awesome-icon :icon="['fas', 'check']" class="text-primary"/><span class="ms-2">市景</span></p>
                </div>
              </div>
            </div>
            <div class="my-7">
              <h5 class="fw-bold border-type">房內設備</h5>
            </div>
            <div class="my-7">
              <h5 class="fw-bold border-type">備品提供</h5>
            </div>
          </section>
        </div>
        <div class="col-5">
          <div class="card">
            <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png?raw=true" class="p-5 rounded-5 img-fluid" alt="...">
            <div class="card-body">
              <h4 class="card-title">價格詳情</h4>
              <div class="d-flex justify-content-between">
                <p>NT$ 10,000 X 2 晚</p>
                <p>NT$ 20,000</p>
              </div>
              <div class="d-flex justify-content-between">
                <p>住宿折扣</p>
                <p>-NT$ 1,000</p>
              </div>
              <hr class="text-primary py-2">
              <a href="#" class="btn btn-primary w-100">確認訂房</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script setup lang="ts">
import ReverseRoomStore from "@/stores/ReverseRoomStore";

const { getRoomList } = ReverseRoomStore();
getRoomList();
</script>
<style scoped>
.border-type::before {
  content: '';
  display: block;
  width: 4px;
  height: 24px;
  border-radius: 10px;
  background: #BE9C7C;
  margin-right: 8px;
  float: left;
}
</style>
