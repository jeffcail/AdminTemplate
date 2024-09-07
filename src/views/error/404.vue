<template>
  <div class="error-page">
    <div class="error-box">
      <div class="error-code">404</div>
      <div class="error-desc">啊哦~ 你所访问的页面不存在</div>
      <div class="error-handle">
        <router-link to="/">
          <el-button type="primary" size="large">返回首页</el-button>
        </router-link>
        <el-button class="error-btn" size="large" @click="goBack"
          >返回上一页</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="404">
import { useRouter } from "vue-router";

const router = useRouter();
const goBack = () => {
  router.go(-1);
};
</script>

<style scoped>
@import "../../assets/css/404.css";
</style>