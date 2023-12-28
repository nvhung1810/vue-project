# Computed Properties (Thuộc tính tính toán)

## Basic Example

```
  const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
  })
```

```
  <p>Has published books:</p>
  <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
```

Tại điểm này, mẫu đã trở nên hơi rối rắm. Chúng ta cần nhìn vào đó một lúc trước khi nhận ra rằng nó thực hiện một phép tính tùy thuộc vào `author.books`. Quan trọng hơn, chúng ta có lẽ không muốn lặp lại chính mình nếu cần bao gồm phép tính này trong mẫu nhiều hơn một lần.

```
  <script setup>
    import { reactive, computed } from 'vue'

    const author = reactive({
      name: 'John Doe',
      books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
      ]
    })

    // a computed ref
    const publishedBooksMessage = computed(() => {
      return author.books.length > 0 ? 'Yes' : 'No'
    })
  </script>

  <template>
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
  </template>
```

`computed(): function expects to be passed a getter function, and the returned value is a computed ref. `


Một thuộc tính tính toán tự động theo dõi các phụ thuộc phản ứng của nó. Vue nhận thức được rằng việc tính toán của `publishedBooksMessage` phụ thuộc vào `author.books`, vì vậy nó sẽ cập nhật bất kỳ ràng buộc nào phụ thuộc vào `publishedBooksMessage` khi `autshor.books` thay đổi.

## Computed Caching vs. Methods (Bộ nhớ đệm được tính toán so với các phương thức)
Bạn có thể nhận thấy rằng chúng ta có thể đạt được kết quả tương tự bằng cách gọi một phương thức trong biểu thức
```
  <p>{{ calculateBooksMessage() }}</p>
```
```
  // in component
  function calculateBooksMessage() {
    return author.books.length > 0 ? 'Yes' : 'No'
  }
```
Thay vì sử dụng một thuộc tính tính toán, chúng ta có thể định nghĩa cùng một hàm như là một phương thức. Đối với kết quả cuối cùng, cả hai cách tiếp cận đều giống nhau. Tuy nhiên, sự khác biệt là thuộc tính tính toán được lưu vào bộ nhớ cache dựa trên các phụ thuộc phản ứng của nó. Một thuộc tính tính toán chỉ sẽ được đánh giá lại khi một số phụ thuộc phản ứng của nó đã thay đổi. Điều này có nghĩa là miễn là author.books không thay đổi, nhiều lần truy cập đến publishedBooksMessage sẽ ngay lập tức trả về kết quả đã tính toán trước đó mà không cần chạy lại hàm getter.
Điều này cũng có nghĩa là thuộc tính được tính toán sau đây sẽ không bao giờ cập nhật, vì `Date.now()` không phải là một phần phụ thuộc phản ứng:
```
  const now = computed(() => Date.now())
```

## Writable Computed (Tính toán có thể ghi)
Thuộc tính tính toán theo mặc định chỉ có thể được sử dụng với hàm getter. Nếu bạn cố gắng gán một giá trị mới cho một thuộc tính tính toán, bạn sẽ nhận được một cảnh báo trong thời gian chạy. Trong những trường hợp hiếm hoi khi bạn cần một thuộc tính tính toán "có thể ghi", bạn có thể tạo ra nó bằng cách cung cấp cả hàm getter và setter:

```
  <script setup>
  import { ref, computed } from 'vue'

  const firstName = ref('John')
  const lastName = ref('Doe')

  const fullName = computed({
    // getter
    get() {
      return firstName.value + ' ' + lastName.value
    },
    // setter
    set(newValue) {
      // Note: we are using destructuring assignment syntax here.
      [firstName.value, lastName.value] = newValue.split(' ')
    }
  })
  </script>
```

## Best Practices
- Getters should be side-effect free​
- Avoid mutating computed value​
