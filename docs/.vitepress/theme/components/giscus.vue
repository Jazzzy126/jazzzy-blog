<template>
  <div class="giscus">
    <Giscus
        id="comments"
        :key="route.path"
        :theme="isDark ? 'dark' : 'light'"
        category="General"
        categoryid="DIC_kwDOM3zRBc4Ci1E9"
        emitmetadata="0"
        inputposition="top"
        lang="zh-CN"
        loading="lazy"
        mapping="pathname"
        reactionsenabled="1"
        repo="jazzzy126/jazzzy-blog"
        repoid="R_kgDOM3zRBQ"
        term="Welcome to giscus!"
    />
  </div>
</template>

<script setup>
import Giscus from '@giscus/vue';
import {useData, useRoute} from 'vitepress';

const route = useRoute();
const {isDark} = useData();
</script>

<style scoped>
.giscus {
  margin-top: 24px
}
</style>
