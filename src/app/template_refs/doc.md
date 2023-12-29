# Template Refs

Trong khi mô hình rendering khai báo của Vue ẩn đi hầu hết các hoạt động DOM trực tiếp cho bạn, vẫn có những trường hợp nơi chúng ta cần truy cập trực tiếp vào các phần tử DOM cơ bản. Để đạt được điều này, chúng ta có thể sử dụng thuộc tính đặc biệt là `ref`:
` Có vẻ cái này giống thằng useRef() ở reactjs??`

```
    <input ref="input">
```
`ref` là một thuộc tính đặc biệt, tương tự như thuộc tính key đã được thảo luận trong chương về v-for. Nó cho phép chúng ta có được một tham chiếu trực tiếp đến một phần tử DOM cụ thể hoặc một instance của component con sau khi nó đã được gắn kết. Điều này có thể hữu ích khi bạn muốn, ví dụ, tập trung vào một đầu vào một cách tự động khi component được gắn kết, hoặc khởi tạo một thư viện bên thứ ba trên một phần tử.

## Accessing the Refs
Xem file AccessingTheRefs.vue

## Refs inside v-for
Xem file RefsInsideVFor.vue

## Funtions Refs
Xem file FunctionRefs.vue

## Ref on Component
Xem file RefOnComponent.vue
