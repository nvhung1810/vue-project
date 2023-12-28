<!-- ref -->
<script setup>
    import { ref } from 'vue'

    const count = ref(0)

    const obj = ref({
      nested: { count: 0 },
      arr: ['foo', 'bar']
    })

    function increment() {
      count.value++
    }

    function mutateDeeply() {
      obj.value.nested.count++
      obj.value.arr.push('baz')
    }

    // DOM Update Timing
    async function increment() {
      count.value++
      await nextTick()
    }
</script>

<template>
    <button @click="increment">
      {{ count }}
    </button>
</template>

<!--
  Why ref?
  - KHi co su thay doi ve tham chieu vue se tu cap nhat DOM nhu react
  - Trong JavaScript tiêu chuẩn, không có cách nào để phát hiện quyền truy cập hoặc đột biến của các biến đơn giản.
  - Thuộc tính .value mang lại cho Vue cơ hội phát hiện khi nào một ref được truy cập hoặc bị thay đổi.
  Vue thực hiện theo dõi trong getter của nó và thực hiện kích hoạt trong setter của nó.
 -->

