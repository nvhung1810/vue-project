# Watchers (Người theo dõi)

## Basic Example

Thuộc tính Computed trong Vue.js cho phép chúng ta tính toán giá trị dẫn xuất theo cách tường minh. Tuy nhiên, có những trường hợp khi chúng ta cần thực hiện `side effects` phản ứng với sự thay đổi của trạng thái - ví dụ, thay đổi DOM, hoặc thay đổi một phần khác của trạng thái dựa trên kết quả của một hoạt động không đồng bộ.

Với Composition API, chúng ta có thể sử dụng hàm `watch` để kích hoạt một hàm gọi lại mỗi khi một phần của trạng thái phản ứng thay đổi:

## watch vs . watchEffect

`watch` và `watchEffect` đều cho phép thực hiện hiệu ứng phản ứng. Sự khác biệt chính giữa chúng là cách theo dõi các phụ thuộc phản ứng của chúng:

- `watch` chỉ theo dõi nguồn mà bạn đã theo dõi một cách rõ ràng. Nó không theo dõi bất cứ thứ gì được truy cập bên trong hàm gọi lại. Ngoài ra, hàm gọi lại chỉ kích hoạt khi nguồn đã thay đổi thực sự. watch tách rời việc theo dõi phụ thuộc khỏi hiệu ứng phụ, mang lại sự kiểm soát chính xác hơn về việc khi nào hàm gọi lại nên chạy.

- Ngược lại, `watchEffect` kết hợp theo dõi phụ thuộc và hiệu ứng phụ vào một giai đoạn. Nó tự động theo dõi mọi thuộc tính phản ứng được truy cập trong quá trình thực thi đồng bộ của nó. Điều này thuận tiện hơn và thường dẫn đến mã nguồn ngắn gọn hơn, nhưng làm cho các phụ thuộc phản ứng của nó ít rõ ràng hơn.

`Tóm lại thì cái thằng watch thì cần phải truyền rõ ràng đối số ra. Còn thằng watchEffect thì méo cần.`

## Callback Flush Timing
Khi bạn thay đổi trạng thái phản ứng, điều này có thể kích hoạt cả cập nhật Vue component và các hàm gọi lại watcher do bạn tạo.

Mặc định, các hàm gọi lại watcher do người dùng tạo được gọi trước khi cập nhật Vue component. Điều này có nghĩa là nếu bạn cố gắng truy cập DOM bên trong một hàm gọi lại watcher, DOM sẽ ở trong trạng thái trước khi Vue áp dụng bất kỳ cập nhật nào.

Nếu bạn muốn truy cập DOM trong một hàm gọi lại watcher sau khi Vue đã cập nhật nó, bạn cần chỉ định tùy chọn flush: 'post':

```
    watch(source, callback, {
        flush: 'post'
    })

    watchEffect(callback, {
        flush: 'post'
    })
```

Post-flush watchEffect() cũng có một bí danh tiện lợi, watchPostEffect():
```
    import { watchPostEffect } from 'vue'

    watchPostEffect(() => {
        /* executed after Vue updates */
    })
```

## Stopping a Watcher
Các watcher được khai báo đồng bộ bên trong setup() hoặc `<script setup>` được liên kết với instance của component chủ và sẽ tự động dừng khi component chủ bị unmount. Trong hầu hết các trường hợp, bạn không cần lo lắng về việc dừng watcher bằng tay.

Quan trọng ở đây là watcher phải được tạo ra đồng bộ: nếu watcher được tạo ra trong một callback không đồng bộ, nó sẽ không được liên kết với instance của component chủ và phải được dừng bằng tay để tránh rò rỉ bộ nhớ. Dưới đây là một ví dụ:

```
    <script setup>
        import { watchEffect } from 'vue'

        // this one will be automatically stopped
        watchEffect(() => {})

        // ...this one will not!
        setTimeout(() => {
            watchEffect(() => {})
        }, 100)
    </script>
```
Để dừng trình theo dõi theo cách thủ công, hãy sử dụng hàm xử lý được trả về. Điều này hoạt động cho cả `watch` và `watchEffect`:

```
    const unwatch = watchEffect(() => {})

    // ...later, when no longer needed
    unwatch()
```
Lưu ý rằng có rất ít trường hợp nơi bạn cần tạo các watcher bất đồng bộ, và việc tạo đồng bộ nên được ưu tiên mỗi khi có thể. Nếu bạn cần chờ đợi một số dữ liệu không đồng bộ, bạn có thể làm cho logic của watcher trở nên có điều kiện thay vì tạo nó một cách không đồng bộ:
```
    // data to be loaded asynchronously
    const data = ref(null)

    watchEffect(() => {
        if (data.value) {
            // do something when data is loaded
        }
    })
```