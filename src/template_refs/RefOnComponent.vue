<!-- Ref on Component -->

<!-- 
    ref can also be used on a child component. In this case the reference will be that of a component instance:
 -->

<script setup>
    import { ref, onMounted } from 'vue'
    import Child from './Child.vue'
 
    const child = ref(null)
 
    onMounted(() => {
        // child.value will hold an instance of <Child />
    })
</script>
 
<template>
   <Child ref="child" />
</template>