<script setup>
    import { ref } from 'vue';

    const checked = ref(true);

    // setup with array
    const checkedNames = ref([]) // results: Checked names: [ "Mike", "John", "Jack" ]
</script>

<template>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
    <!-- setup with array -->
    <div>Checked names: {{ checkedNames }}</div>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>

    <input
        type="checkbox"
        v-model="toggle"
        true-value="yes"
        false-value="no" />
</template>