<template>
  <!-- 1.輪播 -->
  <div id="roomCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#roomCarousel"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#roomCarousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#roomCarousel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        type="button"
        data-bs-target="#roomCarousel"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
      <button
        type="button"
        data-bs-target="#roomCarousel"
        data-bs-slide-to="4"
        aria-label="Slide 5"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E8%A1%8C%E5%8B%95%E7%89%88/banner.png?raw=true"
          class="d-block d-sm-none w-100"
          alt="roomType1行動版"
        />
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/banner.png?raw=true"
          class="d-none d-sm-block w-100"
          alt="roomType1桌面版"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png?raw=true"
          class="d-block w-100"
          alt="roomType2"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room3-1.png?raw=true"
          class="d-block w-100"
          alt="roomType3"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room4-1.png?raw=true"
          class="d-block w-100"
          alt="roomType4"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room5-1.png?raw=true"
          class="d-block w-100"
          alt="roomType5"
        />
      </div>
    </div>
  </div>
  <div class="container-fluid carousel-center-content">
    <!-- 1.內容 -->
<!--    <div class="row justify-content-center">-->
<!--      <div class="col-sm-3">-->
<!--        <h2 class="text-primary fw-bold f-40">享樂酒店</h2>-->
<!--        <h5 class="title text-primary">Enjoyment Luxury Hotel</h5>-->
<!--        <div class="title-container mt-5"></div>-->
<!--      </div>-->
<!--      <div class="col-5 ms-10">-->
<!--        <h1 class="text-white">客房旅宿</h1>-->
<!--      </div>-->
<!--    </div>-->

    <div class="row text-center">
      <div class="col-md-3">
        <h2 class="text-primary fw-bold f-40">享樂酒店</h2>
        <h5 class="title text-primary">Enjoyment Luxury Hotel</h5>
      </div>
      <div>
        <div class="title-sm-container mt-5"></div>
      </div>
      <div class="col-md-5 ms-md-10">
        <h1 class="text-white">客房旅宿</h1>
      </div>
    </div>

<!--    <div class="d-flex flex-column text-center">-->
<!--      <div>-->
<!--        <h2 class="text-primary fw-bold f-40">享樂酒店</h2>-->
<!--        <h5 class="title text-primary">Enjoyment Luxury Hotel</h5>-->
<!--      </div>-->
<!--      <div>-->
<!--        <div class="title-sm-container mt-5"></div>-->
<!--      </div>-->
<!--      <div>-->
<!--        <h1 class="text-white">客房旅宿</h1>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="d-none d-md-flex justify-content-evenly align-items-center">-->
<!--      <div class="text-primary" style="width: 500px">-->
<!--        <h2 class="fw-bold f-40">享樂酒店</h2>-->
<!--        <div>-->
<!--          <h5 class="title">Enjoyment Luxury Hotel</h5>-->
<!--        </div>-->
<!--        <div class="title-container mt-5"></div>-->
<!--      </div>-->
<!--      <div class="text-white">-->
<!--        <div class="frosted-glass border-white title-rounded border-top border-end">-->
<!--          <div class="frosted-glass-position">-->
<!--            <div>-->
<!--              <p class="f-100">高雄</p>-->
<!--              <p class="f-100">豪華住宿之選</p>-->
<!--              <p class="fw-semibold fs-2">-->
<!--                我們致力於為您提供無與倫比的奢華體驗與優質服務-->
<!--              </p>-->
<!--              <button class="fs-4 btn-hover">-->
<!--                <p class="hr-hover">立即訂房</p>-->
<!--              </button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>
<style scoped>
.frosted-glass {
  background: linear-gradient(to bottom, #BE9C7C00, rgba(255, 255, 255, 0.5)); /* 漸變效果 */
  backdrop-filter: blur(10px);
}

.frosted-glass-position {
  position: relative;
  top: 0px;
  left: -60px;
}

.frosted-glass {
  background: linear-gradient(to bottom, #BE9C7C00, rgba(255, 255, 255, 0.5)); /* 漸變效果 */
  backdrop-filter: blur(10px);
}

.btn-hover {
  width: 772px;
  height: 116px;
  border-radius: 8px;
  border: none;
  transition: background-color 0.5s ease, padding-left 0.5s ease;
}

.btn-hover:hover {
  background-color: #BF9D7D;
  color: #ffffff;
  padding-left: 100px;
  .hr-hover:after {
    background: #ffffff;
    width: 120px;
    right: 20px;
  }
}

.hr-hover {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 230px;
  transition: padding-left 0.5s ease;
}

.hr-hover:after {
  content: "";
  position: absolute;
  right: 40px; /* Adjust the position as needed */
  height: 1px; /* Height of the line */
  width: 150px; /* Width of the line */
  background: #000;
  top: 50%; /* Align the line to the middle of the text vertically */
  transform: translateY(-50%);
  transition: width 0.5s ease, right 0.5s ease;
}

.title-container {
  display: inline-block;
  position: relative;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #BE9C7C, #FFFFFF); /* 漸變效果 */
}

/* 媒體查詢，針對小屏幕 */
.title-sm-container {
  display: inline-block;
  position: relative;
  width: 2px; /* 變更寬度使其垂直 */
  height: 100%; /* 垂直展開 */
  background: linear-gradient(to bottom, #BE9C7C, #FFFFFF); /* 調整漸變方向 */
}

.title-rounded {
  border-radius: 80px;
}

.carousel-center-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 100%; /* 確保容器不會超出輪播的寬度 */
}

.carousel-item {
  min-height: 1080px;
  position: relative;
}

.carousel-item img {
  filter: brightness(40%);
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  transform: translate(-50%, -50%);
  object-fit: cover; /* 保持圖片比例，同時填滿容器 */
}

.carousel-indicators button {
  width: 32px;
  height: 4px;
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
