<template>
  <div class="plugins-tips">
    <a
      href="https://gitcode.com/gh_mirrors/md/md-editor-v3/overview?utm_source=highlight_word_gitcode&word=md-editor-v3&isLogin=1"
      target="_blank"
      >md-editor-v3</a
    >
  </div>
  <MdEditor v-model="text" />
</template>

<script setup>
import { ref } from "vue";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";

const text = ref("# Hello Editor");
</script>