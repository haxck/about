<script setup>
import Modal from './Modal.vue'
import { onMounted, ref } from 'vue'
import anime from 'animejs/lib/anime.es.js';
const showModal = ref(false)
onMounted(() => {
  const random_char = () => {
    const possible = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

    return possible.charAt(Math.floor(Math.random() * possible.length));
  };

  const mask = (chars, progress) => {
    const masked = [];

    for (let i = 0; i < chars.length; i++) {
      const position = (i + 1) / chars.length;
      if (position > progress) {
        masked.push(random_char());
      } else {
        masked.push(chars[i]);
      }
    }

    return masked.join('');
  };

  const shuffle = el => {
    const chars = el.textContent.split('');

    const params = {
      progress: 0
    };

    const a = anime({
      targets: params,
      progress: 1,
      delay: 1000,
      duration: 1000,
      easing: 'easeInQuad',
      update: () => {
        el.textContent = mask(chars, params.progress);
      }
    });
  };

  for (const el of document.querySelectorAll('.shuffle')) {
    shuffle(el);
  }
  anime.set("footer", {
    opacity: 0,
    translateY: 20
  })
  anime.set("#avater", {
    opacity: 0,
  })
  anime.set("#words", {
    opacity: 0,
    translateY: 20
  })
  anime.set("#social", {
    opacity: 0,
    scale: 0,
  })

  anime({
    targets: '#avater',
    opacity: 1,
    duration: 1000
  })
  let t1 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 950,
  })
  t1.add({
    targets: "#words",
    translateY: 0,
    opacity: 1,
    delay: (e, i) => { return i * 200 },
  })
    .add({
      targets: "#social",
      opacity: 1,
      scale: 1,
      rotate: (e, i) => { return anime.random(-6, 6) },
      delay: (e, i) => { return i * 200 },
    })
    .add({
      targets: "footer",
      opacity: 1,
      translateY: 0,
    })
})
</script>

<template>

  <section class="ctx mx-1 mt-6 leading-10 text-lg tracking-wide dark:text-gray-300 font-a">
    <div id="avater" class="my-6 flex gap-3 items-center">
      <div class="relative flex rounded-full w-16 overflow-hidden">
        <img src="/images/unnamed.jpg" alt="avatar">
      </div>
      <p class="shuffle">👋Hi, i'm haxck. </p>
    </div>
    <p id="words">[ 做产品 / 写代码 / 喜设计 ]</p>
    <p id="words">如果失眠在深夜，<a class="c cursor-pointer" @click="showModal = true">NightMate</a>(微信小程序) 伴你入睡；如果心念某人，不如写一封
      <a href="http://echo.haxck.com">Echo</a> 给 TA。
    </p>
    <p id="words">在写 <a href="https://blog.haxck.com">Blog</a> ，还在以下地方出没：</p>
  </section>


  <section class="md:max-w-[960px] m-auto my-8 test">
    <ul class="grid grid-cols-2 md:grid-cols-6 gap-2">
      <li id="social">
        <a class="group" href="https://weibo.com/haxck" target="_blank" title="微博">
          <div
            class="relative rounded-xl bg-red-300 w-full h-24 overflow-hidden border-white dark:border-gray-900 hover:border-gray-200 duration-500 ransition-all border-4">
            <svg
              class="absolute w-16 top-2 right-2 md:-top-6 md:-right-6 group-hover:right-2 group-hover:top-2 transition-all duration-500 ease-in-out"
              viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor"
                d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02c-.259-2.609 2.759-5.047 6.74-5.441c3.979-.394 7.413 1.404 7.671 4.018c.259 2.6-2.759 5.049-6.737 5.439zM9.05 17.219c-.384.616-1.208.884-1.829.602c-.612-.279-.793-.991-.406-1.593c.379-.595 1.176-.861 1.793-.601c.622.263.82.972.442 1.592m1.27-1.627c-.141.237-.449.353-.689.253c-.236-.09-.313-.361-.177-.586c.138-.227.436-.346.672-.24c.239.09.315.36.18.601zm.176-2.719c-1.893-.493-4.033.45-4.857 2.118c-.836 1.704-.026 3.591 1.886 4.21c1.983.64 4.318-.341 5.132-2.179c.8-1.793-.201-3.642-2.161-4.149m7.563-1.224c-.346-.105-.57-.18-.405-.615c.375-.977.42-1.804 0-2.404c-.781-1.112-2.915-1.053-5.364-.03c0 0-.766.331-.571-.271c.376-1.217.315-2.224-.27-2.809c-1.338-1.337-4.869.045-7.888 3.08C1.309 10.87 0 13.273 0 15.348c0 3.981 5.099 6.395 10.086 6.395c6.536 0 10.888-3.801 10.888-6.82c0-1.822-1.547-2.854-2.915-3.284zm1.908-5.092a3.1 3.1 0 0 0-2.96-.962a.786.786 0 0 0-.616.932a.79.79 0 0 0 .932.602a1.51 1.51 0 0 1 1.442.465c.376.421.466.977.316 1.473a.786.786 0 0 0 .51.992a.813.813 0 0 0 .992-.512a3.11 3.11 0 0 0-.646-3.035zm2.418-2.195c-1.576-1.757-3.905-2.419-6.054-1.968a.91.91 0 0 0-.706 1.081a.91.91 0 0 0 1.082.707a4.5 4.5 0 0 1 4.296 1.383a4.53 4.53 0 0 1 .947 4.416a.91.91 0 0 0 .586 1.157c.479.165.991-.104 1.157-.586a6.39 6.39 0 0 0-1.338-6.235z" />
            </svg>
            <div class="absolute top-1/2 left-4">
              <p class="text-lg">Weibo</p>
            </div>
          </div>
        </a>
      </li>
      <li id="social">
        <a class="group" href="https://github.com/haxck" target="_blank" title="GitHub">
          <div
            class="relative rounded-xl bg-gray-300 w-full h-24 overflow-hidden border-white dark:border-gray-900 hover:border-gray-200 duration-500 ransition-all border-4">
            <svg
              class="absolute w-16 top-2 right-2 md:-top-6 md:-right-6 group-hover:right-2 group-hover:top-2 transition-all duration-500 ease-in-out"
              viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor"
                d="M8.422 20.081c0 .896.01 1.753.016 2.285a.617.617 0 0 0 .422.58c2.078.686 4.317.718 6.414.091l.292-.087a.67.67 0 0 0 .478-.638c.005-.733.017-2.017.017-3.53c0-1.372-.477-2.25-1.031-2.707c3.399-.366 6.97-1.61 6.97-7.227c0-1.61-.592-2.91-1.566-3.934c.153-.366.688-1.866-.153-3.878c0 0-1.28-.403-4.201 1.5a14.76 14.76 0 0 0-3.82-.494c-1.298 0-2.597.165-3.819.494C5.52.65 4.24 1.036 4.24 1.036c-.84 2.012-.306 3.512-.153 3.878a5.565 5.565 0 0 0-1.566 3.934c0 5.598 3.552 6.86 6.951 7.227c-.439.366-.84 1.006-.973 1.957c-.879.384-3.075 1.006-4.45-1.207c-.286-.44-1.146-1.519-2.349-1.5c-1.28.018-.516.695.02.97c.648.347 1.393 1.646 1.565 2.067c.306.823 1.299 2.396 5.137 1.72" />
            </svg>
            <div class="absolute top-1/2 left-4">
              <p class="text-lg">GitHub</p>
            </div>
          </div>
        </a>
      </li>
      <li id="social">
        <a class="group" href="https://read.cv/haxck" target="_blank" title="Read.cv">
          <div
            class="relative rounded-xl bg-slate-200 w-full h-24 overflow-hidden border-white dark:border-gray-900 hover:border-gray-200 duration-500 ransition-all border-4">
            <svg
              class="absolute w-16 top-2 right-2 md:-top-6 md:-right-6 group-hover:right-2 group-hover:top-2 transition-all duration-500 ease-in-out"
              viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor"
                d="M9 20H5q-.825 0-1.412-.587T3 18V4q0-.825.588-1.412T5 2h14q.825 0 1.413.588T21 4v14q0 .825-.587 1.413T19 20h-4l-2.3 2.3q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213zm3-8q1.45 0 2.475-1.025T15.5 8.5t-1.025-2.475T12 5T9.525 6.025T8.5 8.5t1.025 2.475T12 12m-7 6h14v-1.15q-1.35-1.325-3.137-2.087T12 14t-3.863.763T5 16.85z" />
            </svg>
            <div class="absolute top-1/2 left-4 z-10">
              <p class="text-lg">Resume</p>
            </div>
          </div>
        </a>
      </li>
      <li id="social">
        <a class="group" href="https://space.bilibili.com/14586647" target="_blank" title="Bilibili:老三制造">
          <div
            class="relative rounded-xl bg-sky-300 w-full h-24 overflow-hidden border-white dark:border-gray-900 hover:border-gray-200 duration-500 ransition-all border-4">
            <svg
              class="absolute w-16 top-2 right-2 md:-top-6 md:-right-6 group-hover:right-2 group-hover:top-2 transition-all duration-500 ease-in-out"
              viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor"
                d="M488.6 104.1c16.7 18.1 24.4 39.7 23.3 65.7v202.4c-.4 26.4-9.2 48.1-26.5 65.1c-17.2 17-39.1 25.9-65.5 26.7H92.02c-26.45-.8-48.21-9.8-65.28-27.2C9.682 419.4.767 396.5 0 368.2V169.8c.767-26 9.682-47.6 26.74-65.7C43.81 87.75 65.57 78.77 92.02 78h29.38L96.05 52.19c-5.75-5.73-8.63-13-8.63-21.79c0-8.8 2.88-16.06 8.63-21.797C101.8 2.868 109.1 0 117.9 0q13.2 0 21.9 8.603L213.1 78h88l74.5-69.397C381.7 2.868 389.2 0 398 0q13.2 0 21.9 8.603c5.7 5.737 8.6 12.997 8.6 21.797c0 8.79-2.9 16.06-8.6 21.79L394.6 78h29.3c26.4.77 48 9.75 64.7 26.1m-38.8 69.7c-.4-9.6-3.7-17.4-10.7-23.5c-5.2-6.1-14-9.4-22.7-9.8H96.05c-9.59.4-17.45 3.7-23.58 9.8c-6.14 6.1-9.4 13.9-9.78 23.5v194.4c0 9.2 3.26 17 9.78 23.5s14.38 9.8 23.58 9.8H416.4c9.2 0 17-3.3 23.3-9.8s9.7-14.3 10.1-23.5zm-264.3 42.7c6.3 6.3 9.7 14.1 10.1 23.2V273c-.4 9.2-3.7 16.9-9.8 23.2c-6.2 6.3-14 9.5-23.6 9.5s-17.5-3.2-23.6-9.5s-9.4-14-9.8-23.2v-33.3c.4-9.1 3.8-16.9 10.1-23.2s13.2-9.6 23.3-10c9.2.4 17 3.7 23.3 10m191.5 0c6.3 6.3 9.7 14.1 10.1 23.2V273c-.4 9.2-3.7 16.9-9.8 23.2s-14 9.5-23.6 9.5s-17.4-3.2-23.6-9.5c-7-6.3-9.4-14-9.7-23.2v-33.3c.3-9.1 3.7-16.9 10-23.2s14.1-9.6 23.3-10c9.2.4 17 3.7 23.3 10" />
            </svg>
            <div class="absolute top-1/2 left-4">
              <p class="text-lg">老三制造</p>
            </div>
          </div>
        </a>
      </li>
      <li id="social">
        <a class="group" href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5NTc2NjQ2MA" target="_blank"
          title="公众号: X工厂">
          <div
            class="relative rounded-xl bg-green-300 w-full h-24 overflow-hidden border-white dark:border-gray-900 hover:border-gray-200 duration-500 ransition-all border-4">
            <svg
              class="absolute w-16 top-2 right-2 md:-top-6 md:-right-6 group-hover:right-2 group-hover:top-2 transition-all duration-500 ease-in-out"
              viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor"
                d="M14 7.3c3.2 0 6 2.258 6 5.007c0 1.472-1.1 2.846-2.5 3.926L18 18l-1.9-1.08c-.7.196-1.4.393-2.1.393c-3.4 0-6-2.258-6-5.006S10.7 7.3 14 7.3M7 2c3.5 0 6.5 2.061 7.3 4.81h-.7c-3.4 0-5.999 2.454-5.999 5.497c0 .49.1.981.2 1.472h-.7c-.9 0-1.6-.196-2.5-.393l-2.5 1.178l.699-2.06C1.1 11.324 0 9.753 0 7.89C0 4.552 3.1 2 7 2m5.1 8.049c-.3 0-.7.393-.7.687c0 .392.3.687.7.687c.5 0 .9-.392.9-.687c0-.393-.4-.687-.9-.687m3.8 0c-.3 0-.7.393-.7.687c0 .392.4.687.7.687c.6 0 .9-.392.9-.687c0-.393-.4-.687-.9-.687M4.8 4.846c-.6 0-1.1.393-1.1.884c0 .589.6.884 1.1.884q.75 0 .9-.884c0-.59-.4-.884-.9-.884m4.9 0c-.6 0-1.1.393-1.1.884c0 .589.6.884 1.1.884s.9-.295.9-.884c0-.59-.4-.884-.9-.884" />
            </svg>
            <div class="absolute top-1/2 left-4">
              <p class="text-lg">X工厂</p>
            </div>
          </div>
        </a>
      </li>
      <li id="social">
        <a class="group" href="https://www.xiaohongshu.com/user/profile/5c397cba00000000050062b1" target="_blank"
          title="小红书">
          <div
            class="relative rounded-xl bg-red-500/90 w-full h-24 overflow-hidden border-white dark:border-gray-900 hover:border-gray-200 duration-500 ransition-all border-4">
            <svg 
            class="absolute w-16 top-2 right-2 md:-top-6 md:-right-6 group-hover:right-2 group-hover:top-2 transition-all duration-500 ease-in-out"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M289.44,256H477.67c17.93,0,33.86,15.57,34.33,33.48V477.72A35.09,35.09,0,0,1,477.66,512H289.5A35.14,35.14,0,0,1,256,477.64V289.56C256.43,271.93,271.81,256.5,289.44,256Zm16.73,91.44c-.13,19.87-.06,39.75-.16,59.63a2.1,2.1,0,0,1-2.13,2.6c-2.39.14-4.79.06-7.19.08,1.61,4,3.35,7.86,5.15,11.73,4.52-.15,9.68.79,13.54-2.17,3.47-2.58,4.58-7.17,4.51-11.3,0-20.19,0-40.39-.09-60.58C315.26,347.41,310.71,347.4,306.17,347.44Zm56.08-.9q-5.08,11.67-10.36,23.24c-1,2.31-2.21,5.37-.11,7.46,2.69,2.44,6.64,1.5,9.94,1.72-2.29,5.78-5.3,11.27-7.23,17.19-1.07,2.92,1.6,5.89,4.52,5.92,5.29.36,10.6,0,15.9.14,1.73-3.87,3.47-7.73,5.17-11.62-3.09,0-6.21.22-9.25-.39,3.29-8.26,7.19-16.25,10.68-24.41-4.27-.5-9.1.89-13-.77,1.9-6.4,5.36-12.27,7.8-18.5C371.61,346.5,366.93,346.47,362.25,346.54Zm72.75.05,0,5.21c-3.06,0-6.12,0-9.18,0q0,7,0,13.93c3.07,0,6.13,0,9.19.06q.12,6,0,12.08c-4.6.09-9.21,0-13.81.07-.06,4.64-.05,9.27,0,13.9,4.61.05,9.23,0,13.84,0,0,9.86,0,19.73,0,29.59,4.62,0,9.23,0,13.85,0q0-14.79,0-29.57c6.74,0,13.47-.1,20.21,0,2.37-.2,5.08,1.46,5,4.07a110.67,110.67,0,0,1,0,11.08,2.26,2.26,0,0,1-2.12,2.39c-3.85.28-7.71,0-11.57.13,1.7,4,3.35,8,5.28,11.95,6.35-.33,14.11,1.27,18.95-4,4.6-4.26,3.22-11,3.41-16.56-.29-5.85,1.14-12.46-2.49-17.58-3.09-4.34-8.66-5.52-13.68-5.61-.3-7,1.37-15.19-3.78-20.88-4.8-5.38-12.53-5.4-19.17-5.14l0-5.2C444.23,346.56,439.61,346.57,435,346.59Zm-49.42,5.22q0,7,0,13.92c2.9,0,5.79,0,8.69,0,0,13.91,0,27.83,0,41.74-4.15.07-8.31,0-12.46.05-2.15,4.62-4.25,9.26-6.34,13.9,15.48.06,31,0,46.44,0q0-6.94,0-13.9c-4.45,0-8.91,0-13.36-.05q0-20.88,0-41.77c2.91,0,5.81,0,8.72,0,0-4.64,0-9.29,0-13.93C406.73,351.79,396.16,351.77,385.58,351.81Zm91.35,1.28c-3.88,2.94-2.61,8.32-2.78,12.51,2.59,0,5.19.14,7.78-.09,4.16-.38,7.29-5.23,5.62-9.15C486.24,352.06,480.43,350.19,476.93,353.09ZM283,365.72c-.7,9.12-1.41,18.23-2.07,27.35a22.12,22.12,0,0,1-1.32,6.06c2.34,5.35,4.68,10.7,7.18,16,5.6-7.49,7.68-16.93,8.26-26.1.49-7.8,1.36-15.59,1.64-23.4C292.1,365.79,287.54,365.68,283,365.72Zm46.13,0q1,12.69,2,25.37c.73,8.48,2.92,17.12,8.1,24,2.47-5.29,4.83-10.63,7.17-16A21.67,21.67,0,0,1,345,393c-.66-9.09-1.38-18.18-2.08-27.27Q336,365.69,329.1,365.72Zm17.16,54.69c7.08,2.09,14.58.66,21.85,1.05,2.14-4.63,4.27-9.27,6.35-13.93-7.27-.28-14.67.76-21.8-1.07Q349.42,413.41,346.26,420.41Z" transform="translate(-256 -256)" style="fill:#ff2741"/><path d="M448.77,365.77c3,.43,7-1.22,9.29,1.2.38,3.65.1,7.32.14,11-3.11,0-6.23,0-9.34,0Q448.77,371.87,448.77,365.77Z" transform="translate(-256 -256)" style="fill:#ff2741"/><path d="M306.17,347.44c4.54,0,9.09,0,13.63,0,.13,20.19.08,40.39.09,60.58.07,4.13-1,8.72-4.51,11.3-3.86,3-9,2-13.54,2.17-1.8-3.87-3.54-7.77-5.15-11.73,2.4,0,4.8.06,7.19-.08a2.1,2.1,0,0,0,2.13-2.6C306.11,387.19,306,367.31,306.17,347.44Z" transform="translate(-256 -256)" style="fill:#fff"/><path d="M362.25,346.54c4.68-.07,9.36,0,14,0-2.44,6.23-5.9,12.1-7.8,18.5,3.92,1.66,8.75.27,13,.77-3.49,8.16-7.39,16.15-10.68,24.41,3,.61,6.16.39,9.25.39-1.7,3.89-3.44,7.75-5.17,11.62-5.3-.09-10.61.22-15.9-.14-2.92,0-5.59-3-4.52-5.92,1.93-5.92,4.94-11.41,7.23-17.19-3.3-.22-7.25.72-9.94-1.72-2.1-2.09-.88-5.15.11-7.46Q357.14,358.2,362.25,346.54Z" transform="translate(-256 -256)" style="fill:#fff"/><path d="M435,346.59c4.61,0,9.23,0,13.84,0l0,5.2c6.64-.26,14.37-.24,19.17,5.14,5.15,5.69,3.48,13.9,3.78,20.88,5,.09,10.59,1.27,13.68,5.61,3.63,5.12,2.2,11.73,2.49,17.58-.19,5.57,1.19,12.3-3.41,16.56-4.84,5.23-12.6,3.63-18.95,4-1.93-3.91-3.58-7.94-5.28-11.95,3.86-.11,7.72.15,11.57-.13a2.26,2.26,0,0,0,2.12-2.39,110.67,110.67,0,0,0,0-11.08c.07-2.61-2.64-4.27-5-4.07-6.74-.1-13.47,0-20.21,0q0,14.79,0,29.57c-4.62,0-9.23,0-13.85,0,0-9.86,0-19.73,0-29.59-4.61,0-9.23,0-13.84,0,0-4.63,0-9.26,0-13.9,4.6,0,9.21,0,13.81-.07q.13-6,0-12.08c-3.06-.05-6.12-.09-9.19-.06q0-7,0-13.93c3.06,0,6.12,0,9.18,0Zm13.77,19.18q0,6.1.09,12.2c3.11,0,6.23,0,9.34,0,0-3.66.24-7.33-.14-11C455.77,364.55,451.77,366.2,448.77,365.77Z" transform="translate(-256 -256)" style="fill:#fff"/><path d="M385.58,351.81c10.58,0,21.15,0,31.72,0,0,4.64,0,9.29,0,13.93-2.91,0-5.81,0-8.72,0q0,20.89,0,41.77c4.45.05,8.91,0,13.36.05q0,6.94,0,13.9c-15.48,0-31,0-46.44,0,2.09-4.64,4.19-9.28,6.34-13.9,4.15,0,8.31,0,12.46-.05,0-13.91,0-27.83,0-41.74-2.9,0-5.79,0-8.69,0Q385.55,358.77,385.58,351.81Z" transform="translate(-256 -256)" style="fill:#fff"/><path d="M476.93,353.09c3.5-2.9,9.31-1,10.62,3.27,1.67,3.92-1.46,8.77-5.62,9.15-2.59.23-5.19.1-7.78.09C474.32,361.41,473.05,356,476.93,353.09Z" transform="translate(-256 -256)" style="fill:#fff"/><path d="M283,365.72c4.57,0,9.13.07,13.69-.11-.28,7.81-1.15,15.6-1.64,23.4-.58,9.17-2.66,18.61-8.26,26.1-2.5-5.28-4.84-10.63-7.18-16a22.12,22.12,0,0,0,1.32-6.06C281.56,384,282.27,374.84,283,365.72Z" transform="translate(-256 -256)" style="fill:#fff"/><path d="M329.1,365.72q6.91,0,13.83,0c.7,9.09,1.42,18.18,2.08,27.27a21.67,21.67,0,0,0,1.32,6.15c-2.34,5.35-4.7,10.69-7.17,16-5.18-6.91-7.37-15.55-8.1-24S329.77,374.18,329.1,365.72Z" transform="translate(-256 -256)" style="fill:#fff"/><path d="M346.26,420.41q3.17-7,6.4-13.95c7.13,1.83,14.53.79,21.8,1.07-2.08,4.66-4.21,9.3-6.35,13.93C360.84,421.07,353.34,422.5,346.26,420.41Z" transform="translate(-256 -256)" style="fill:#fff"/></svg>
            <div class="absolute top-1/2 left-4">
              <p class="text-lg">小红书</p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </section>
  <footer class="my-8 mx-1">
    <div class="text-sm text-gray-800 dark:text-gray-500 flex flex-col items-end">
      <p>Creater &amp; Developer</p>
      <p class="py-1 flex gap-1">
        <span id="busuanzi_container_site_pv" style='display:none' class="text-focus-in">
          <span id="busuanzi_value_site_pv"></span> 次访问
        </span>
        <a href="https://status.haxck.com/status/haxck">
          <img src="https://status.haxck.com/api/badge/1/status?style=flat-square"></img>
        </a>
      </p>
      <a href="https://beian.miit.gov.cn/">晋 ICP 备 16005173 号 - 1</a>
      <p>&copy;2024 haxck.com
      </p>

    </div>
  </footer>

  <Teleport to="body">
    <!-- 使用这个 modal 组件，传入 prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #body>
        <img src="/images/nightmate_qrcode.jpg" alt="">
      </template>
    </modal>
  </Teleport>
</template>
<style scoped>
.text-focus-in {
  -webkit-animation: text-focus-in 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) both;
  animation: text-focus-in 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) both;
}

@-webkit-keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }

  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}

@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }

  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
</style>