<!-- reactive() -->

<!--
      Có một cách khác để khai báo trạng thái phản ứng, với API Reactive().
      Không giống như một ref bao bọc giá trị bên trong trong một đối tượng đặc biệt, Reactive() làm cho chính một đối tượng có tính phản ứng:
 -->
<script setup>
    import { reactive } from 'vue'

    const state = reactive({ count: 0 })
</script>

<template>
    <button @click="state.count++">
        {{ state.count }}
    </button>
</template>
<!--
  Han che cua reactive()
  1.  Limited value types: it only works for object types (objects, arrays, and collection types such as Map and Set).
      It cannot hold primitive types such as string, number or boolean.

  2.  Không thể thay thế toàn bộ đối tượng: vì tính năng theo dõi phản ứng của Vue hoạt động dựa trên quyền truy cập
      thuộc tính nên chúng ta phải luôn giữ cùng một tham chiếu đến đối tượng phản ứng.
      Điều này có nghĩa là chúng ta không thể dễ dàng "thay thế" một đối tượng phản ứng vì kết nối phản ứng với tham chiếu đầu tiên bị mất:
            let state = reactive({ count: 0 })
            // the above reference ({ count: 0 }) is no longer being tracked
            // (reactivity connection is lost!)
            state = reactive({ count: 1 })

  3.  Không thân thiện với cấu trúc: khi chúng ta cấu trúc thuộc tính kiểu nguyên thủy của đối tượng phản ứng thành các biến cục bộ
      hoặc khi chúng ta chuyển thuộc tính đó vào một hàm, chúng ta sẽ mất kết nối phản ứng:
            const state = reactive({ count: 0 })

            // count is disconnected from state.count when destructured.
            let { count } = state
            // does not affect original state
            count++

            // the function receives a plain number and
            // won't be able to track changes to state.count
            // we have to pass the entire object in to retain reactivity
            callSomeFunction(state.count)
  ===> Do những hạn chế này, chúng tôi khuyên bạn nên sử dụng ref() làm API chính để khai báo trạng thái phản ứng.
 -->

<!-- Additional Ref Unwrapping Details
  1. As Reactive Object Property
      Một tham chiếu sẽ tự động được mở khi được truy cập hoặc bị thay đổi dưới dạng thuộc tính của đối tượng phản ứng.
      Nói cách khác, nó hoạt động giống như một thuộc tính bình thường:

  2. Caveat in Arrays and Collections

-->
