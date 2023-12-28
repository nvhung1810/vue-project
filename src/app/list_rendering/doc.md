# List Rendering

## v-for
Chúng ta có thể sử dụng chỉ thị `v-for` để render một danh sách các mục dựa trên một mảng. Chỉ thị `v-for` yêu cầu một cú pháp đặc biệt dưới dạng item in items, trong đó items là mảng dữ liệu nguồn và item là một đối tượng thay thế cho phần tử mảng đang được lặp qua:

```
  const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
```
```
  <li v-for="item in items">
    {{ item.message }}
  </li>
```

Bên trong phạm vi của `v-for`, các biểu thức mẫu có quyền truy cập vào tất cả các thuộc tính của phạm vi cha. Ngoài ra, `v-for` cũng hỗ trợ một đối số thứ hai tùy chọn để đặt tên đại diện cho chỉ số của mục hiện tại: (Nghe nó khó hiểu, thực ra nó là cái index thôi !!!)
```
  const parentMessage = ref('Parent')
  const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
```
```
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
```

Phạm vi biến của v-for tương tự như JavaScript sau:
```
  const parentMessage = 'Parent'
  const items = [
    /* ... */
  ]

  items.forEach((item, index) => {
    // has access to outer scope `parentMessage`
    // but `item` and `index` are only available in here
    console.log(parentMessage, item.message, index)
  })
```


Chú ý cách giá trị của v-for khớp với chữ ký của hàm gọi lại của forEach. Trong thực tế, bạn có thể sử dụng phá hủy (destructuring) trên đối tượng v-for giống như phá hủy đối số của hàm:
```
  <li v-for="{ message } in items">
    {{ message }}
  </li>

  <!-- with index alias -->
  <li v-for="({ message }, index) in items">
    {{ message }} {{ index }}
  </li>
```
Đối với v-for lồng nhau, phạm vi cũng hoạt động tương tự như các hàm lồng nhau. Mỗi phạm vi v-for có quyền truy cập vào phạm vi chính:
```
  <li v-for="item in items">
    <span v-for="childItem in item.children">
      {{ item.message }} {{ childItem }}
    </span>
  </li>
```
Bạn cũng có thể sử dụng of làm dấu phân cách thay vì in để nó gần với cú pháp của JavaScript hơn cho các trình vòng lặp:
```
  <div v-for="item of items"></div>
```

## v-for with an Object
Bạn cũng có thể sử dụng `v-for` để duyệt qua các thuộc tính của một `object`. Thứ tự lặp sẽ dựa trên kết quả của việc gọi `Object.keys()` trên đối tượng:
```
  const myObject = reactive({
    title: 'How to do lists in Vue',
    author: 'Jane Doe',
    publishedAt: '2016-04-10'
  })
```
```
  <ul>
    <li v-for="value in myObject">
      {{ value }}
    </li>
  </ul
```
You can also provide a second alias for the property's name (a.k.a. key):
```
  <li v-for="(value, key) in myObject">
    {{ key }}: {{ value }}
  </li>
```
```
  <li v-for="(value, key, index) in myObject">
    {{ index }}. {{ key }}: {{ value }}
  </li>
```

## v-for with a Range
v-for cũng có thể lấy một số nguyên. Trong trường hợp này, nó sẽ lặp lại mẫu nhiều lần, dựa trên phạm vi 1...n.
```
  <span v-for="n in 10">{{ n }}</span>
```

## v-for on `<template>`
```
  <ul>
    <template v-for="item in items">
      <li>{{ item.msg }}</li>
      <li class="divider" role="presentation"></li>
    </template>
  </ul>
```

## v-for with v-if
Không nên sử dụng v-if và v-for trên cùng một phần tử do quyền ưu tiên ngầm định.
Khi chúng tồn tại trên cùng một nút, v-if có mức độ ưu tiên cao hơn v-for. Điều đó có nghĩa là điều kiện v-if sẽ không có quyền truy cập vào các biến trong phạm vi của v-for:
```
  <!--
  This will throw an error because property "todo"
  is not defined on instance.
  -->
  <li v-for="todo in todos" v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
```
Điều này có thể được khắc phục bằng cách di chuyển v-for sang thẻ `<template>` gói (điều này cũng rõ ràng hơn):
```
  <template v-for="todo in todos">
    <li v-if="!todo.isComplete">
      {{ todo.name }}
    </li>
  </template>
```

## Maintaining State with key
Khi Vue đang cập nhật một danh sách các phần tử được hiển thị bằng v-for, mặc định nó sử dụng chiến lược "patch in-place" (sửa chữa ngay tại chỗ). Nếu thứ tự của các mục dữ liệu đã thay đổi, thay vì di chuyển các phần tử DOM để phản ánh thứ tự của các mục, Vue sẽ sửa chữa mỗi phần tử tại chỗ và đảm bảo rằng nó phản ánh điều gì nên được hiển thị tại chỉ mục cụ thể đó.

Chế độ mặc định này hiệu quả, nhưng chỉ phù hợp khi đầu ra hiển thị của danh sách bạn không phụ thuộc vào trạng thái của thành phần con hoặc trạng thái DOM tạm thời (ví dụ: giá trị của input trong form).

Để cung cấp một gợi ý cho Vue để nó có thể theo dõi danh tính của mỗi nút, và do đó tái sử dụng và sắp xếp lại các phần tử hiện có, bạn cần cung cấp một thuộc tính key duy nhất cho mỗi mục:
```
  <div v-for="item in items" :key="item.id">
    <!-- content -->
  </div>
```
When using `<template v-for>`, the key should be placed on the `<template>` container:

```
  <template v-for="todo in todos" :key="todo.name">
    <li>{{ todo.name }}</li>
  </template>
```

## v-for with a Component
Bạn có thể trực tiếp sử dụng v-for trên một thành phần, giống như bất kỳ thành phần thông thường nào (đừng quên cung cấp `key:`)
```
  <MyComponent v-for="item in items" :key="item.id" />
```
Tuy nhiên, điều này sẽ không tự động chuyển bất kỳ dữ liệu nào đến thành phần vì các thành phần có phạm vi riêng biệt. Để truyền dữ liệu lặp vào thành phần, chúng ta cũng nên sử dụng props:
```
  <MyComponent
    v-for="(item, index) in items"
    :item="item"
    :index="index"
    :key="item.id"
  />
```
## Array Change Detection
### Mutation Methods
Vue có thể phát hiện khi nào các phương thức đột biến của mảng phản ứng được gọi và kích hoạt các cập nhật cần thiết. Các phương pháp đột biến này là:
`push()
pop()
shift()
unshift()
splice()
sort()
reverse()`

### Replacing an Array
```
  items.value = items.value.filter((item) => item.message.match(/Foo/))
```
### Displaying Filtered/Sorted Results
Đôi khi chúng ta muốn hiển thị một phiên bản được lọc hoặc sắp xếp của một mảng mà không làm thay đổi hoặc đặt lại dữ liệu gốc.
```
  const numbers = ref([1, 2, 3, 4, 5])

  const evenNumbers = computed(() => {
    return numbers.value.filter((n) => n % 2 === 0)
  })

  <li v-for="n in evenNumbers">{{ n }}</li>
```
Trong trường hợp các thuộc tính được tính toán không khả thi (ví dụ: bên trong các vòng lặp v-for lồng nhau), bạn có thể sử dụng một phương thức:
```
  const sets = ref([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10]
  ])

  function even(numbers) {
    return numbers.filter((number) => number % 2 === 0)
  }
```

```
  <ul v-for="numbers in sets">
    <li v-for="n in even(numbers)">{{ n }}</li>
  </ul>
```
Hãy cẩn thận khi sử dụng reverse() và sort() trong một thuộc tính tính toán! Hai phương thức này sẽ thay đổi mảng gốc, điều nên tránh trong các hàm getter của thuộc tính tính toán. Hãy tạo một bản sao của mảng gốc trước khi gọi các phương thức này:
```
  - return numbers.reverse()
  + return [...numbers].reverse()
```
