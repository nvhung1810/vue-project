# Vue 3 Reactivity Functions

## ref()

- `ref()` is a function provided by Vue 3 to create a reference object.
- It is used to wrap a primitive value and create an object with a `value` property containing its value.
- When you want to change the value, you manipulate it directly through the `value` property.

```
  import { ref } from 'vue';

  const count = ref(0);

  // Read the value
  console.log(count.value); // 0

  // Change the value
  count.value = 1;
  console.log(count.value); // 1
```

# Lựa Chọn Giữa `ref()` và `reactive()` trong Vue 3

## `ref()` so với `reactive()`

- Một phía, `reactive()` chỉ có thể làm việc với các kiểu đối tượng như Object, Array, Map và Set.
- Trái lại, `ref()` linh hoạt hơn nhiều và có thể làm việc với bất kỳ kiểu giá trị nào, bao gồm cả kiểu nguyên thủy như String và Number.
- Quan trọng khi chọn giữa chúng là loại dữ liệu bạn muốn làm phản ứng.

## Vậy khi nào sử dụng `ref()`?

- Khi không chắc chọn lựa:
  - Mặc định sử dụng `ref()`. Đơn giản hơn và ít gặp lỗi hơn.
- Khi con trỏ sẽ thay đổi:
  - Nếu bạn dự đoán làm việc với một biến phản ứng sẽ thay đổi con trỏ thành các đối tượng mới, sử dụng `ref()`.
  - Khi tạo một đối tượng hoặc mảng, cam kết với con trỏ đó và tránh cố gắng thay thế nó sau này bằng một con trỏ hoàn toàn mới—điều này là nơi `ref()` tỏ ra ưu việt.

## Một Lưu Ý về Sự Thoải Mái và Kinh Nghiệm

- Một số người cảm thấy thoải mái chỉ làm việc với `ref()` vì họ chưa bao giờ làm việc với các đối tượng phản ứng trước đó.
- Tuy nhiên, nếu bạn đã làm việc với props trong Composition API, bạn đã làm việc với các đối tượng phản ứng.

```javascript
  setup (props) {
    // props is `reactive`
  }

  <script setup>
  const props = defineProps({})
    // props is `reactive`
  </script>
```

## Tóm lại, nếu không chắc chọn lựa, mặc định sử dụng ref(). Đơn giản và ít gặp lỗi hơn. Sử dụng reactive() khi bạn cần làm việc cụ thể với các kiểu đối tượng và muốn tận dụng các tính năng phản ứng của chúng.
