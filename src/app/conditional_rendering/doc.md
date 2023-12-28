# Conditional Rendering

## v-if
Lệnh v-if được sử dụng để hiển thị một khối có điều kiện. Khối sẽ chỉ được hiển thị nếu biểu thức của lệnh trả về giá trị trung thực.
```
  <h1 v-if="awesome">Vue is awesome!</h1>
```

## v-else
Bạn có thể sử dụng lệnh v-else để chỉ ra "khối khác" cho v-if:
```
  <button @click="awesome = !awesome">Toggle</button>

  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
```
## v-else-if
V-else-if, như tên cho thấy, đóng vai trò là "else if block" cho v-if. Nó cũng có thể được xâu chuỗi nhiều lần:
```
  <div v-if="type === 'A'">
  A
  </div>
  <div v-else-if="type === 'B'">
    B
  </div>
  <div v-else-if="type === 'C'">
    C
  </div>
  <div v-else>
    Not A/B/C
  </div>
```

## v-if on `<template>`
Bởi vì `v-if` là một chỉ thị, nó phải được gắn liền với một phần tử duy nhất. Nhưng nếu chúng ta muốn chuyển đổi nhiều hơn một phần tử thì sao? Trong trường hợp này, chúng ta có thể sử dụng `v-if` trên một phần tử  `<template>`, nó sẽ hoạt động như một bao bọc vô hình. Kết quả cuối cùng được hiển thị sẽ không bao gồm phần tử `<template>`.
```
  <template v-if="ok">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>
```
v-else and v-else-if can also be used on `<template>`.

## v-show
Một tùy chọn khác để hiển thị có điều kiện một phần tử là lệnh `v-show`. Cách sử dụng phần lớn giống nhau:
```
  <h1 v-show="ok">Hello!</h1>
```
Sự khác biệt là phần tử có `v-show` sẽ luôn được hiển thị và duy trì trong DOM; `v-show` chỉ chuyển đổi thuộc tính CSS hiển thị của phần tử.
`v-show` không hỗ trợ phần tử `<template>` và cũng không hoạt động với `v-else`.

## v-if vs. v-show
- v-if là một cách "thực sự" để hiển thị có điều kiện vì nó đảm bảo rằng các trình lắng nghe sự kiện và các thành phần con bên trong khối điều kiện được hủy và tạo lại đúng cách khi chuyển đổi.

- v-if cũng là lựa chọn lười biếng: nếu điều kiện là false khi render lần đầu, nó sẽ không thực hiện bất cứ điều gì - khối điều kiện sẽ không được render cho đến khi điều kiện trở thành true lần đầu tiên.

- So sánh với đó, v-show đơn giản hơn nhiều - phần tử luôn được render bất kể điều kiện ban đầu, với việc chuyển đổi dựa trên CSS.

Nói chung, v-if có chi phí chuyển đổi cao hơn trong khi v-show có chi phí render ban đầu cao hơn. Do đó, hãy sử dụng v-show nếu bạn cần chuyển đổi điều gì đó thường xuyên, và sử dụng v-if nếu điều kiện khả năng sẽ không thay đổi trong quá trình chạy.

## v-if with v-for
Khi v-if và v-for đều được sử dụng trên cùng một phần tử, v-if sẽ được đánh giá đầu tiên. Xem hướng dẫn kết xuất danh sách để biết chi tiết.
