<script setup>
    import { ref } from 'vue'

    const selected = ref('A')
    const options = ref([
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
    ])
</script>

<template>
    <span> Selected: {{ selected }}</span>

    <select v-model="selected">
        <option v-for="option in options" :value="option.value">
            {{ option.text }}
        </option>
    </select>
</template>