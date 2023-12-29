# Event Handling

## Listening to Events

Chúng ta có thể sử dụng chỉ thị `v-on`, mà thông thường chúng ta viết tắt thành ký hiệu @, để lắng nghe các sự kiện DOM và thực thi mã JavaScript khi chúng được kích hoạt. Cách sử dụng sẽ là `v-on:click="handler"` hoặc với phím tắt `@click="handler`".
Giá trị xử lý có thể là một trong những giá trị sau:
- Inline handlers (Xử lý trực tiếp):
JavaScript được viết trực tiếp trong thuộc tính sự kiện, tương tự như thuộc tính onclick trong HTML native.
Ví dụ: <button @click="handleClick">Click me</button>.
- Method handlers (Xử lý thông qua phương thức):
Tên thuộc tính hoặc đường dẫn trỏ đến một phương thức đã được định nghĩa trên thành phần.

## Inline Handlers

Trình xử lý nội tuyến thường được sử dụng trong các trường hợp đơn giản, ví dụ:

```
  const count = ref(0)
```

```
  <button @click="count++">Add 1</button>
  <p>Count is: {{ count }}</p>
```

## Method Handlers

Logic cho nhiều xử lý sự kiện thường sẽ phức tạp hơn và có thể không thích hợp với xử lý trực tiếp trong thuộc tính. Đó là lý do tại sao v-on cũng có thể chấp nhận tên hoặc đường dẫn của một phương thức của thành phần mà bạn muốn gọi.

```
  const name = ref('Vue.js')

  function greet(event) {
    alert(`Hello ${name.value}!`)
    // `event` is the native DOM event
    if (event) {
      alert(event.target.tagName)
    }
  }
```

```
  <!-- `greet` is the name of the method defined above -->
  <button @click="greet">Greet</button>
```

## Method vs. Inline Detection

## Calling Methods in Inline Handlers

Thay vì liên kết trực tiếp với tên phương thức, chúng ta cũng có thể gọi các phương thức trong trình xử lý nội tuyến. Điều này cho phép chúng ta truyền các đối số tùy chỉnh của phương thức thay vì sự kiện gốc:

```
  function say(message) {
    alert(message)
  }
```

```
  <button @click="say('hello')">Say hello</button>
  <button @click="say('bye')">Say bye</button>
```

## Accessing Event Argument in Inline Handlers(Truy cập đối số sự kiện trong Trình xử lý nội tuyến)

Đôi khi chúng ta cũng cần truy cập sự kiện DOM gốc trong một xử lý trực tuyến. Bạn có thể chuyển nó vào một phương thức bằng cách sử dụng biến đặc biệt $event, hoặc sử dụng một hàm mũi tên trực tuyến (inline arrow function):

``Nhìn code thì có nghĩa là muốn truyền event vào hàm `warn`, ở react thì thông thường mình sẽ sài cách dùng arrow funtion, còn ở vue thiof có thể "," thêm $event``

```
  <!-- using $event special variable -->
  <button @click="warn('Form cannot be submitted yet.', $event)">
    Submit
  </button>

  <!-- using inline arrow function -->
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">
    Submit
  </button>
```

```
  function warn(message, event) {
    // now we have access to the native event
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
```

## Event Modifiers

Đó là một nhu cầu rất phổ biến để gọi event.preventDefault() hoặc event.stopPropagation() bên trong các xử lý sự kiện. Mặc dù chúng ta có thể làm điều này dễ dàng bên trong các phương thức, nhưng nó sẽ tốt hơn nếu các phương thức có thể tập trung hoàn toàn vào logic dữ liệu thay vì phải xử lý chi tiết sự kiện DOM.
Để giải quyết vấn đề này, Vue cung cấp các công cụ sửa đổi sự kiện cho v-on. Hãy nhớ lại rằng công cụ sửa đổi là các hậu tố chỉ thị được biểu thị bằng dấu chấm.
`.stop
.prevent
.self
.capture
.once
.passive`

```
<!-- the click event's propagation will be stopped -->
<a @click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form @submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a @click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form @submit.prevent></form>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div @click.self="doThat">...</div>
```

## Key Modifiers

Khi lắng nghe các sự kiện bàn phím, chúng ta thường cần kiểm tra các phím cụ thể. Vue cho phép thêm công cụ sửa đổi khóa cho v-on hoặc @ khi nghe các sự kiện chính:
```
  <!-- only call `submit` when the `key` is `Enter` -->
  <input @keyup.enter="submit" />
  <input @keyup.page-down="onPageDown" />
```

## ​​​​​​Key Aliases
Vue provides aliases for the most commonly used keys:

.enter
.tab
.delete (captures both "Delete" and "Backspace" keys)
.esc
.space
.up
.down
.left
.right

## System Modifier Keys
You can use the following modifiers to trigger mouse or keyboard event listeners only when the corresponding modifier key is pressed:
.ctrl
.alt
.shift
.meta

```
  <!-- Alt + Enter -->
  <input @keyup.alt.enter="clear" />

  <!-- Ctrl + Click -->
  <div @click.ctrl="doSomething">Do something</div>
```