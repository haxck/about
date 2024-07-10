<script setup>
import Modal from './Modal.vue'
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  <section class="ctx mx-1 mt-6 leading-10 text-lg tracking-wide dark:text-gray-300">
    <h1 class="inline-block py-2 text-3xl uppercase font-semibold tracking-[1.6rem] dark:text-gray-300">Haxck</h1>
    <h2 class="text-gray-500">Creater &amp; Developer</h2>

    <p>👋Hi, i'm haxck. </p>
    <p>如果失眠在深夜，<a class="c cursor-pointer" @click="showModal = true" >NightMate</a>(微信小程序) 伴你入睡；如果心念某人，不如写一封 <a
        href="http://echo.haxck.com">Echo</a> 给 TA。</p>
    <p>更多内容欢迎来我 <a href="https://blog.haxck.com">Blog</a> 。</p>
  </section>
  <!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->

  <Teleport to="body">
    <!-- 使用这个 modal 组件，传入 prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #body>
        <img src="/images/nightmate_qrcode.jpg" alt="">
      </template>
    </modal>
  </Teleport>
</template>