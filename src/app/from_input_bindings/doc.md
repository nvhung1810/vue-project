# Form Input Bindings

```
    <input
        :value="text"
        @input="event => text = event.target.value">
```
Lệnh `v-model` giúp chúng ta đơn giản hóa những điều trên thành:
```
    <input v-model="text">
```
Bên cạnh đó, `v-model` có thể được sử dụng trên các đối tượng input của các loại khác nhau, các phần tử `<textarea>`, và `<select>`. Nó tự động mở rộng thành các cặp thuộc tính và sự kiện DOM khác nhau dựa trên phần tử mà nó được sử dụng:

- `<input> với các loại văn bản và các phần tử <textarea> sử dụng thuộc tính value và sự kiện input;`
- `<input type="checkbox"> và <input type="radio"> sử dụng thuộc tính checked và sự kiện change`
- `select> sử dụng value như là một prop và sự kiện change.`

## Basic Usage

```
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
```

## Modifiers
### .lazy
Mặc định, `v-model` đồng bộ hóa đầu vào với dữ liệu sau mỗi sự kiện đầu vào (ngoại trừ quá trình soạn thảo IME như đã nêu ở trên). Bạn có thể thêm bộ điều chỉnh lazy để thay đổi đồng bộ hóa sau sự kiện change thay vì sau mỗi sự kiện đầu vào:
```
    <!-- synced after "change" instead of "input" -->
    <input v-model.lazy="msg" />
```
### .number

Nếu bạn muốn đầu vào của người dùng tự động chuyển đổi kiểu dữ liệu sang số, bạn có thể thêm bộ điều chỉnh number vào các đầu vào được quản lý bởi v-model của bạn:
```
    <input v-model.number="age" />
```

### .trim
Nếu bạn muốn khoảng trắng từ đầu vào của người dùng được tự động cắt bớt, bạn có thể thêm công cụ sửa đổi cắt vào đầu vào được quản lý bởi mô hình v của mình:
```
    <input v-model.trim="msg" />
```