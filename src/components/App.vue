<script setup>
import Modal from './Modal.vue'
import { ref } from 'vue'

const showModal = ref(false)

</script>

<template>
  <section class="ctx mx-1 mt-6 leading-10 text-lg tracking-wide dark:text-gray-300 font-a">
    <div class="my-6 flex gap-3 items-center">
      <div class="relative flex rounded-full w-16 overflow-hidden">
        <img src="/images/unnamed.jpg" alt="avatar">
      </div>
      <p>👋Hi, i'm haxck. </p>
    </div>
    <p>做产品 / 写代码 / 喜设计 </p>
    <p>如果失眠在深夜，<a class="c cursor-pointer" @click="showModal = true">NightMate</a>(微信小程序) 伴你入睡；如果心念某人，不如写一封 <a
        href="http://echo.haxck.com">Echo</a> 给 TA。</p>
    <p>在写 <a href="https://blog.haxck.com">Blog</a> ，还在以下地方出没：</p>
  </section>

  <Teleport to="body">
    <!-- 使用这个 modal 组件，传入 prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #body>
        <img src="/images/nightmate_qrcode.jpg" alt="">
      </template>
    </modal>
  </Teleport>
</template>