<!-- 
    For radio, checkbox and select options,
     the v-model binding values are usually static strings (or booleans for checkbox):

     -> Voi radio, checkbox va select thi v-model chi lay gia tri string or boolean
 -->

<script setup>
    import { ref } from 'vue'

    const message = ref('')
</script>

<template>
    <!-- `picked` is a string "a" when checked -->
    <input type="radio" v-model="picked" value="a" />
    <!-- `toggle` is either true or false -->
    <input type="checkbox" v-model="toggle" />
    <!-- `selected` is a string "abc" when the first option is selected -->
    <select v-model="selected">
        <option value="abc">ABC</option>
    </select>
</template>