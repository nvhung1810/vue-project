# Lifecycle Hooks
Mỗi instance của component trong Vue đi qua một loạt các bước khởi tạo khi nó được tạo ra - ví dụ, nó cần thiết lập quan sát dữ liệu, biên dịch template, gắn kết instance vào DOM, và cập nhật DOM khi dữ liệu thay đổi. Trong quá trình này, nó cũng thực hiện các hàm được gọi là lifecycle hooks, cung cấp cho người dùng cơ hội để thêm mã của họ tại các giai đoạn cụ thể.

## Registering Lifecycle Hooks
Ví dụ: hook `onMounted` có thể được sử dụng để chạy mã sau khi thành phần kết thúc quá trình hiển thị ban đầu và tạo các nút DOM:

```
    <script setup>
    import { onMounted } from 'vue'

    onMounted(() => {
    console.log(`the component is now mounted.`)
    })
    </script>
```
Ngoài ra còn có các hook khác sẽ được gọi ở các giai đoạn khác nhau trong vòng đời của phiên bản, trong đó các hook được sử dụng phổ biến nhất là `onMounted`, `onUpdated` và `onUnmount`.

Khi gọi `onMounted`, Vue tự động liên kết hàm gọi lại đã đăng ký với phiên bản thành phần hoạt động hiện tại. Điều này yêu cầu các hook này phải được đăng ký đồng bộ trong quá trình thiết lập thành phần. Ví dụ: không làm điều này:
```
    setTimeout(() => {
    onMounted(() => {
        // this won't work.
    })
    }, 100)
```
Lưu ý rằng điều này không có nghĩa là cuộc gọi phải được đặt ngữ cảnh bên trong `setup()` hoặc `<script setup>`. Hàm `onMounted()` có thể được gọi trong một hàm bên ngoài miễn là ngăn xếp cuộc gọi là đồng bộ và bắt nguồn từ bên trong `setup()`.

<span style="color: red; font-weight: 700">Tóm lại là không dùng onMounted trong các hàm bất đồng bộ</span>

## Lifecycle Diagram
![Alt text](image.png)