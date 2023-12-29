<!-- watchEffect() -->

<!-- 
    Điều phổ biến là hàm gọi lại của watcher sử dụng chính trạng thái phản ứng giống như nguồn.
    Ví dụ, xem đoạn mã sau, sử dụng một watcher để tải một nguồn từ xa mỗi khi giá trị của ref todoId thay đổi:
 -->

<script setup>
import { ref, watch } from 'vue';

    const todoId = ref(1);
    const data = ref(null);

    watch(
        todoId,
        async () => {
            const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
            )
            data.value = await response.json()
        },
        { immediate: true }
    )
    /**
        Đặc biệt, lưu ý cách watcher sử dụng todoId hai lần, một lần làm nguồn và sau đó làm lại trong hàm gọi lại.
        Điều này có thể được đơn giản hóa bằng watchEffect(). watchEffect() cho phép chúng ta theo dõi các phụ thuộc phản ứng của hàm gọi lại một cách tự động.
        Watcher ở trên có thể được viết lại như sau:
     */
    watchEffect
    (
        async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
            )
            data.value = await response.json()
        }
    )
    /**
        Ở đây, hàm gọi lại sẽ chạy ngay lập tức, không cần phải chỉ định immediate: true.
        Trong quá trình thực hiện, nó sẽ tự động theo dõi todoId.value như là một phụ thuộc (tương tự như computed properties). 
        Mỗi khi todoId.value thay đổi, hàm gọi lại sẽ được chạy lại. Với watchEffect(), chúng ta không cần phải truyền todoId một cách rõ ràng như là giá trị nguồn.

        Đối với các ví dụ như thế này, với chỉ một phụ thuộc, lợi ích của watchEffect() tương đối nhỏ.
        Nhưng đối với những watcher có nhiều phụ thuộc, việc sử dụng watchEffect() giúp giảm bớt công đoạn phải duy trì danh sách các phụ thuộc một cách thủ công.
        Ngoài ra, nếu bạn cần theo dõi nhiều thuộc tính trong một cấu trúc dữ liệu lồng nhau, watchEffect() có thể hiệu quả hơn so với một deep watcher,
        vì nó chỉ theo dõi những thuộc tính được sử dụng trong hàm gọi lại thay vì theo dõi tất cả chúng một cách đệ quy.
     */
</script>
