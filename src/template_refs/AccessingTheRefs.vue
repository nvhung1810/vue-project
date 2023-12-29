<!-- Accessing the Refs [access /ˈæk.ses/: truy cập] -->
<!-- Để có được tham chiếu bằng Composition API, chúng ta cần khai báo một tham chiếu có cùng tên: -->

<script setup>
import { ref } from 'vue';
    // khai báo một ref để giữ tham chiếu phần tử

    // tên phải khớp với giá trị tham chiếu mẫu
    const input = ref(null)
    onMounted(() => {
        input.value.focus()
    })
</script>

<template>
    <input ref="input" />
</template>

<!-- If not using <script setup>, make sure to also return the ref from setup(): 
    export default {
        setup() {
            const input = ref(null)
            // ...
            return {
                input
            }
        }
    }
-->
<!-- 
    Lưu ý: Chỉ có thể truy cập `ref` sau khi thành phần được gắn kết (after the component is mounted).
    Nếu như cố gắng truy cập `input` trong một biểu thức mẫu, nó sẽ là giá trị `null` trong lần render đầu.
    Điều này là do phần tử không tồn tại cho đến sau lần hiển thị đầu tiên!
 -->

<!-- 
    Nếu như đang cố gắng theo dõi các thay đổi của một giá trị tham chiếu mẫu (template ref),
    Hãy đảm bảo tính đến trường hợp tham chiếu giá trị là `null`

    watchEffect(() => {
        if (input.value) {
            input.value.focus()
        } else {
            // not mounted yet, or the element was unmounted (e.g. by v-if)
        }
    }
-->