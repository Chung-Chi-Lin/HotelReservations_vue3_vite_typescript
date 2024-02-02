<template>
  <div class="bg-milk-white">
    <div class="container">
      <div class="roomType-title">
        <h5 class="mb-4">房型選擇</h5>
        <h1 class="text-primary">各種房型，任您挑選</h1>
      </div>
      <!-- 房型 -->
      <section>
        <div class="card card-rounded rounded-5">
          <div class="row g-0">
            <div class="col-md-7">
              <div>
                <div id="carouselExample" class="carousel slide">
                  <div class="carousel-inner rounded-start-5">
                    <div class="carousel-item active">
                      <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png?raw=true" class="d-block w-100" alt="..." style="height: 457px;">
                    </div>
                    <div class="carousel-item">
                      <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-2.png?raw=true" class="d-block w-100" alt="..." style="height: 457px;">
                    </div>
                    <div class="carousel-item">
                      <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-3.png?raw=true" class="d-block w-100" alt="..." style="height: 457px;">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card-body">
                <h2 class="card-title">尊爵雙人房</h2>
                <p>享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
                <div class="row">
                  <div class="col-4">
                    <div class="card">
                      <div class="card-body">
                        24坪
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="card">
                      <div class="card-body">
                        一張大床
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="card">
                      <div class="card-body">
                        2-4 人
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <p>NT$ 10,000</p>
                  <p>></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>
<script setup lang="ts">
import LoadingStore from "@/stores/LoadingStore";

const { hideLoading } = LoadingStore();

hideLoading();
</script>
<style scoped>
.roomType-title {
  padding: 120px 0 80px 0;
}
.card-rounded {
  border-radius: 20px;

  .carousel-item img {
    border-radius: 20px 0 0 20px;
  }
}
</style>
