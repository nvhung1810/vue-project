<!-- Watch Source Types -->

<!-- 
    Đối số đầu tiên của watch có thể là các loại "sources" phản ứng khác nhau:
    nó có thể là một ref (bao gồm cả các ref được tính toán), một đối tượng phản ứng, một hàm getter hoặc một mảng gồm nhiều nguồn:

 -->

<script setup>
    import { ref, watch } from 'vue'

    const x = ref(0)
    const y = ref(0)

    // single ref
    watch(x, (newX) => {
        console.log(`x is ${newX}`)
    })

    // getter
    watch(
        () => x.value + y.value,
        (sum) => {
            console.log(`sum of x + y is: ${sum}`)
        }
    )

    // array of multiple sources
    watch([x, () => y.value], ([newX, newY]) => {
        console.log(`x is ${newX} and y is ${newY}`)
    })

    // Xin lưu ý rằng bạn không thể xem thuộc tính của đối tượng phản ứng như thế này:

    const obj = reactive({ count: 0 })

    // this won't work because we are passing a number to watch()
    watch(obj.count, (count) => {
        console.log(`count is: ${count}`)
    })
    // Instead, use a getter:
    watch(
        () => obj.count,
        (count) => {
            console.log(`count is: ${count}`)
        }
    )
    // Tóm tắt lại là méo gọi trực tiếp được mà phải chơi hàm getter();
</script>