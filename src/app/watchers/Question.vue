<script setup>
    import { ref, watch } from 'vue'

    const question = ref('')
    const answer = ref('Questions usually contain a question mark. ;-)')
    const loading = ref(false)

// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
    if (newQuestion.includes('?')) {
        loading.value = true
        answer.value = 'Thinking...'
        try {
            const res = await fetch('https://yesno.wtf/api')
            answer.value = (await res.json()).answer // cập nhật giá trị của answer thành cái vế đằng sau
        } catch (error) {
            answer.value = 'Error! Could not reach the API. ' + error
        } finally {
            loading.value = false 
        }
    }
})
</script>

<template>
    <p>
        Ask a yes/no question:
        <input v-model="question" :disabled="loading" />
    </p>
    <p>{{ answer }}</p>
</template>

<!-- 
    watch(question, async (newQuestion, oldQuestion) => { ... }): Sử dụng watch để theo dõi sự thay đổi của biến question.
    Khi giá trị của question thay đổi, một hàm callback sẽ được gọi.
    Trong trường hợp này, nó kiểm tra xem câu hỏi mới có chứa dấu '?' không.
    Nếu có, nó đặt loading thành true, thiết lập answer là 'Thinking...', thực hiện một cuộc gọi API đến https://yesno.wtf/api,
    và sau đó cập nhật answer với kết quả trả về từ API. Nếu có lỗi, nó sẽ cập nhật answer với thông báo lỗi.

    cái thằng watch này có vẻ giống thằng useEffect() của reactjs.
 -->