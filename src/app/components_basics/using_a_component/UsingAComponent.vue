<!-- Using a component -->


<!-- Để sử dụng thành phần con, chúng ta cần nhập nó vào thành phần cha. 
    Giả sử chúng ta đặt thành phần bộ đếm bên trong một tệp có tên ButtonCounter.vue, thành phần này sẽ được hiển thị dưới dạng xuất mặc định của tệp: -->

<!-- Code ỏ file ButtonCounter.setup -->

<!--  
    Với <script setup>, các thành phần đã nhập được tự động làm cho chúng có sẵn cho mẫu.

    Cũng có thể đăng ký một thành phần một cách toàn cầu, làm cho nó có sẵn cho tất cả các thành phần trong một ứng dụng cụ thể mà không cần phải nhập nó.
    Ưu điểm và nhược điểm của việc đăng ký toàn cầu so với đăng ký cục bộ được thảo luận trong phần Đăng ký Thành phần được dành riêng.

    Components can be reused as many times as you want:

    <h1>Here are many child components!</h1>
    <ButtonCounter />
    <ButtonCounter />
    <ButtonCounter />
-->