# Class and Style Bindings​ (Class and Style Bindings​)
Một nhu cầu phổ biến trong ràng buộc dữ liệu là thao tác danh sách lớp và kiểu dáng nội tuyến của một phần tử. Vì class và style đều là thuộc tính, chúng ta có thể sử dụng v-bind để gán giá trị chuỗi động cho chúng, tương tự như với các thuộc tính khác. Tuy nhiên, việc tạo giá trị này bằng cách nối chuỗi có thể làm phiền và dễ gây lỗi. Vì lý do này, Vue cung cấp các cải tiến đặc biệt khi v-bind được sử dụng với class và style. Ngoài chuỗi, các biểu thức cũng có thể đánh giá thành đối tượng hoặc mảng.

## Binding HTML Classes
### Binding to Objects
We can pass an object to `:class` (short for `v-bind:class`) to dynamically toggle classes:
```
  <div :class="{ active: isActive }"></div>
```
Bạn có thể có nhiều lớp được chuyển đổi bằng cách có nhiều trường trong đối tượng. Ngoài ra, chỉ thị :class cũng có thể tồn tại cùng với thuộc tính class thuần. Vì vậy, giả sử trạng thái như sau:
```
  const isActive = ref(true)
  const hasError = ref(false)
```
```
  <div
    class="static"
    :class="{ active: isActive, 'text-danger': hasError }"
  ></div>

  It will render:

  <div class="static active"></div>
```

Khi `isActive` hoặc `hasError` thay đổi, danh sách lớp sẽ được cập nhật tương ứng. Ví dụ, nếu `hasError` trở thành true, danh sách lớp sẽ trở thành `"static active text-danger".`

Đối tượng bị ràng buộc không nhất thiết phải ở trong dòng:
```
  const classObject = reactive({
    active: true,
    'text-danger': false
  })

  <div :class="classObject"></div>

  This will render:

  <div class="active"></div>
```
Chúng ta cũng có thể liên kết với một thuộc tính được tính toán để trả về một đối tượng. Đây là một mô hình phổ biến và mạnh mẽ:

```
  const isActive = ref(true)
  const error = ref(null)

  const classObject = computed(() => ({
    active: isActive.value && !error.value,
    'text-danger': error.value && error.value.type === 'fatal'
  }))
```
```
  <div :class="classObject"></div>
```

### Binding to Arrays
```
  const activeClass = ref('active')
  const errorClass = ref('text-danger')
```
```
  <div :class="[activeClass, errorClass]"></div>
  # <div class="active text-danger"></div>
```
Nếu bạn cũng muốn chuyển đổi một lớp trong danh sách một cách có điều kiện, bạn có thể thực hiện điều đó bằng biểu thức bậc ba:
```
  <div :class="[isActive ? activeClass : '', errorClass]"></div>
```

### With Components
Khi bạn sử dụng thuộc tính `class` trên một thành phần có một phần tử gốc duy nhất, các lớp này sẽ được thêm vào phần tử gốc của thành phần và hợp nhất với bất kỳ lớp hiện tại nào đã có trước đó trên nó.
Ví dụ: nếu chúng ta có một thành phần có tên `MyComponent` với mẫu sau:
```
  <!-- child component template -->
  <p class="foo bar">Hi!</p>
```
Then add some classes when using it:
```
  <!-- when using the component -->
  <MyComponent class="baz boo" />
```
The rendered HTML will be:
```
  <p class="foo bar baz boo">Hi!</p>
```
The same is true for class bindings:
```
  <MyComponent :class="{ active: isActive }" />
```
When isActive is truthy, the rendered HTML will be:
```
  <p class="foo bar active">Hi!</p>
```
Nếu thành phần của bạn có nhiều phần tử gốc, bạn cần xác định phần tử nào sẽ nhận lớp này. Bạn có thể thực hiện việc này bằng cách sử dụng thuộc tính thành phần `$attrs`:
```
  <!-- MyComponent template using $attrs -->
  <p :class="$attrs.class">Hi!</p>
  <span>This is a child component</span>
```
```
  <MyComponent class="baz" />
```
Will render:
```
  <p class="baz">Hi!</p>
  <span>This is a child component</span>
```

## Binding Inline Styles
### Binding to Objects
`:style` hỗ trợ liên kết với các giá trị đối tượng JavaScript - nó tương ứng với thuộc tính style của phần tử HTML:
```
  const activeColor = ref('red')
  const fontSize = ref(30)
```
```
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```
Mặc dù các khóa CamelCase được khuyên dùng, :style cũng hỗ trợ các khóa thuộc tính CSS được bọc trong kebab (tương ứng với cách chúng được sử dụng trong CSS thực tế) - ví dụ:
```
  <div :style="{ 'font-size': fontSize + 'px' }"></div>
```
Thông thường, bạn nên liên kết trực tiếp với một đối tượng kiểu để mẫu sạch hơn:
```
  const styleObject = reactive({
    color: 'red',
    fontSize: '13px'
  })
```
```
  <div :style="styleObject"></div>
```
### Binding to Arrays​
```
  <div :style="[baseStyles, overridingStyles]"></div>
```
