<!-- Refs inside v-for [ /ɪnˈsaɪd/: bên trong] -->

<!-- 
    Khi mà `ref` sử dụng bên trong thằng `v-for`, `ref` tương ứng phải chứa một giá trị Array, 
    Giá trị này sẽ được điền với các phần tử sau khi mount.

    @@ Túm lại là ref mà sài với v-for thì nó phải là mảng.
-->

<script setup>
import { onMounted, ref } from 'vue';

    const list = ref([1, 2, 3]);
    const itemRefs = ref([]);

    onMounted(
        () => {
            console.log(itemRefs.value.map(i => i.textContent)); // Results  ['1', '2', '3']
        }
    )
</script>

<template>
    <ul>
        <li v-for="item in list" ref="itemRefs">
            {{  item }}
        </li>
    </ul>
</template>