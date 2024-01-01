<!-- Emitting and Listening to Events -->

<!-- A component can emit custom events directly in template expressions (e.g. in a v-on handler) using the built-in $emit method: -->

<!-- MyComponent -->
<button @click="$emit('someEvent')">click me</button>

<!-- Parent -->
<MyComponent @some-event="callback" />

<!-- Công cụ sửa đổi .once cũng được hỗ trợ trên trình xử lý sự kiện thành phần: -->
<MyComponent @some-event.once="callback" />

<!-- Event Arguments 
    Đôi khi việc phát ra một giá trị cụ thể bằng một sự kiện sẽ rất hữu ích.
    Ví dụ: chúng ta có thể muốn thành phần <BlogPost> chịu trách nhiệm về mức độ phóng to văn bản.
    Trong những trường hợp đó, chúng ta có thể chuyển các đối số bổ sung cho $emit để cung cấp giá trị này:

        <button @click="$emit('increaseBy', 1)">
            Increase by 1
        </button>

    Sau đó, khi chúng ta lắng nghe sự kiện trong phần cha, chúng ta có thể sử dụng hàm mũi tên nội tuyến làm trình nghe, cho phép chúng ta truy cập vào đối số sự kiện.

        <MyButton @increase-by="(n) => count += n" />

    Or
        <MyButton @increase-by="increaseCount" /> 

        function increaseCount(n) {
            count.value += n
        }
-->

<!-- Declaring Emitted Events 
    Một thành phần có thể khai báo rõ ràng các sự kiện mà nó sẽ phát ra bằng macro định defineEmits():
    <script setup>
        defineEmits(['inFocus', 'submit'])
    </script>

    Phương thức $emit mà chúng ta đã sử dụng trong <template> không thể truy cập được trong phần <script setup> của một thành phần, 
        nhưng definEmits() trả về một hàm tương đương mà chúng ta có thể sử dụng thay thế:

        <script setup>
            const emit = defineEmits(['inFocus', 'submit'])

            function buttonClick() {
                emit('submit')
            }
        </script>
-->