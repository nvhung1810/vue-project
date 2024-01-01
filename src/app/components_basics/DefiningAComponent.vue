<!-- Defining /xác định/ a Component -->

<!--  
    Khi sử dụng bước xây dựng, chúng ta thường xác định mỗi thành phần Vue trong một tệp riêng biệt sử dụng đuôi .vue 
    - được biết đến là Single-File Component (SFC viết tắt).
-->

<script setup>
    import { ref } from 'vue'

    const count = ref(0)
</script>

<template>
    <button @click="count++">You clicked me {{ count }} times.</button>
</template>

<!-- When not using a build step, a Vue component can be defined (định nghĩa) as a plain (chứa) JavaScript object containing Vue-specific options: -->
<!-- 
    import { ref } from 'vue'

    export default {
    setup() {
        const count = ref(0)
        return { count }
    },
    template: `
        <button @click="count++">
        You clicked me {{ count }} times.
        </button>`
    // Can also target an in-DOM template:
    // template: '#my-template-element'
    }
 -->