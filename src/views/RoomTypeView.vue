<template>
  <BannerCarousel />
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
              <div id="roomCarousel" class="carousel slide">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#roomCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#roomCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#roomCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
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
                <button class="carousel-control-prev" type="button" data-bs-target="#roomCarousel" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#roomCarousel" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="col-md-5">
              <div class="card-body">
                <h2 class="card-title">尊爵雙人房</h2>
                <p>享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
                <div class="row">
                  <div class="col-4">
                    <div class="card">
                      <div class="card-body p-4">
                        <font-awesome-icon :icon="['fas', 'maximize']" class="text-primary"/>
                        <p class="text-nowrap pt-2">24 坪</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="card">
                      <div class="card-body p-4">
                        <font-awesome-icon :icon="['fas', 'bed']" class="text-primary"/>
                        <p class="text-nowrap pt-2">1 張大床</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="card">
                      <div class="card-body p-4">
                        <font-awesome-icon :icon="['fas', 'user']" class="text-primary"/>
                        <p class="text-nowrap pt-2">2-4 人</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="deco-line"></div>
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="text-primary">NT$ 10,000</h5>
                  <router-link to="/">
                    <font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow-hover text-primary fs-5"/>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>
<script setup lang="ts">
import LoadingStore from "@/stores/LoadingStore";
import BannerCarousel from "@/components/BannerCarousel.vue";

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

.deco-line {
  margin: 40px 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #BE9C7C 0%, #FFFFFF 100%);
  border: none;
}

.arrow-hover {
  transition: transform 0.3s ease-in-out;
}

.arrow-hover:hover {
  transform: translateX(10px); /* 或者您想要移動的距離 */
}

/* 輪播所有的css */
.carousel-control-prev-icon, .carousel-control-next-icon {
  display: none;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%; /* 將箭頭定位到容器的中間 */
  transform: translateY(-50%); /* 將箭頭垂直居中 */
  width: 56px; /* 圓形背景的直徑 */
  height: 56px;
  background-color: white; /* 圓形背景顏色 */
  border-radius: 50%; /* 創建圓形 */
  border: 1px solid black; /* 可選：如果需要邊框 */
  cursor: pointer;
}

.carousel-control-prev {
  left: 24px;
}

.carousel-control-next {
  right: 24px;
}

.carousel-control-prev::after,
.carousel-control-next::after {
  content: '';
  display: inline-block;
  width: 15px; /* 箭头宽度 */
  height: 15px; /* 箭头高度 */
  border-right: 3px solid #4b4b4b;
  border-top: 3px solid #4b4b4b;
}

.carousel-control-prev::after {
  transform: rotate(-135deg); /* 向左箭头旋转 */
  margin-left: 3px; /* 校正箭頭的水平位置 */
  margin-top: 1px;
}

.carousel-control-next::after {
  transform: rotate(45deg); /* 向右箭头旋转 */
  margin-right: 3px; /* 校正箭頭的水平位置 */
  margin-top: 1px;
}

.carousel-indicators button {
  width: 20px;
  height: 5px;
  background-color: #ccc;
  border: none;
  margin: 0 2px;
  transition:
    width 0.3s ease,
    background-color 0.3s ease;
  opacity: 0.5;
  border-radius: 1em;
}

.carousel-indicators button:hover,
.carousel-indicators button:focus {
  opacity: 1; /* 滑鼠懸停或焦點時不透明 */
}

.carousel-indicators button.active {
  width: 60px; /* 激活時的寬度 */
  background-color: #bf9d7d; /* 激活時的背景色 */
  opacity: 1; /* 激活時不透明 */
  border-radius: 1em; /* 激活時保持圓弧邊角 */
}

</style>
