<!-- Deep Watchers -->

<!-- 
    Khi bạn gọi watch() trực tiếp trên một đối tượng phản ứng,
    nó sẽ ngầm tạo ra một trình theo dõi sâu - lệnh gọi lại sẽ được kích hoạt trên tất cả các đột biến lồng nhau:

 -->

<script setup>
    import { reactive } from 'vue';

    const object = reactive({
        count: 0,
    })

    watch(obj, (newValue, oldValue) => {
        // được kích hoạt khi có sự thay đổi trong các thuộc tính lồng nhau
        // Lưu ý: newValue sẽ bằng oldValue ở đây 
        // vì cả hai đều trỏ đến cùng một đối tượng!
    })

    object.count++

    // Điều này cần được phân biệt bằng một getter trả về một đối tượng phản ứng - trong trường hợp sau, lệnh gọi lại sẽ chỉ kích hoạt nếu getter trả về một đối tượng khác:

    watch(
        () => state.someObject,
        () => {
            // chỉ kích hoạt khi state.someObject được thay thế
        }
    )

    // Tuy nhiên, bạn có thể buộc trường hợp thứ hai vào trình theo dõi sâu bằng cách sử dụng tùy chọn sâu một cách rõ ràng:
    watch(
        () => state.someObject,
        (newValue, oldValue) => {
            // Note: `newValue` will be equal (bằng) to `oldValue` here
            // *unless(trừ khi)* state.someObject has been replaced
        },
        { deep: true }
    )
</script>