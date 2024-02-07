<template>
  <!-- 1.輪播 -->
  <div id="roomCarousel" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#roomCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#roomCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#roomCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#roomCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#roomCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/banner.png?raw=true" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png?raw=true" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room3-1.png?raw=true" class="d-block w-100" alt="...">
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
    <!-- Fixed title for all slides -->
    <div class="ms-auto row carousel-fixed-title text-md-start text-center">
      <div class="col-md-7 col-12">
        <h2 class="text-primary fw-bold f-40">享樂酒店</h2>
        <h5 class="title text-primary">Enjoyment Luxury Hotel</h5>
        <div class="d-none d-md-block title-container"></div>
<!--        <div class="d-block d-md-none title-sm-container"></div>-->
      </div>
      <div class="col-md-7 col-12 d-block d-md-none">
        <div class="title-sm-container"></div>
      </div>
      <div class="col-md-7 col-12">
        <h1 class="text-white">客房旅宿</h1>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* 輪播圖片 */
.carousel img {
  filter: brightness(40%);
  height: 466px;
  object-fit: cover;
}

/* 輪播固定文字 */
.carousel-fixed-title {
  position: absolute;
  height: 466px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.title-container {
  display: inline-block;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #BE9C7C, #FFFFFF); /* 漸變效果 */
}

.title-sm-container {
  display: inline-block;
  width: 2px; /* 變更寬度使其垂直 */
  height: 100%; /* 垂直展開 */
  background: linear-gradient(to bottom, #BE9C7C, #FFFFFF); /* 調整漸變方向 */
}

/* 輪播下方按鈕 */
.carousel-indicators button {
  background-color: #f1eae4;
  border: none;
  margin: 0 2px;
  transition:
    width 0.3s ease,
    background-color 0.3s ease;
  opacity: 1;
  border-radius: 1em;
}

.carousel-indicators button:hover,
.carousel-indicators button:focus {
  opacity: 0.5; /* 滑鼠懸停或焦點時不透明 */
}

.carousel-indicators button.active {
  height: 4px;
  width: 60px; /* 激活時的寬度 */
  background-color: #bf9d7d; /* 激活時的背景色 */
  opacity: 1; /* 激活時不透明 */
  border-radius: 1em; /* 激活時保持圓弧邊角 */
}
</style>
<script setup lang="ts">
</script>
