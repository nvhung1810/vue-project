<!-- Eager Watchers -->

<!-- 
    watch is lazy by default: hàm gọi lại sẽ không được gọi cho đến khi nguồn được theo dõi thay đổi.
    Tuy nhiên, trong một số trường hợp, chúng ta có thể muốn logic gọi lại giống nhau được thực hiện ngay lập tức 
    - ví dụ, chúng ta có thể muốn tải một số dữ liệu ban đầu, sau đó tải lại dữ liệu mỗi khi trạng thái liên quan thay đổi
 -->

<script setup>
    // Chúng ta có thể buộc lệnh gọi lại của người theo dõi được thực hiện ngay lập tức bằng cách chuyền "immediate: true"
    watch(
        source,
        (newValue, oldValue) => {
            // được thực thi ngay lập tức, sau đó thực hiện lại khi `source` thay đổi
        },
        { immediate: true }
    )
</script>