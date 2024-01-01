<!-- Prop Name Casing -->

<!-- 
    Dùng camelCase để định nghĩa tên 

        defineProps({
            greetingMessage: String
        })
        <span>{{ greetingMessage }}</span>

    Về mặt kỹ thuật, bạn cũng có thể sử dụng CamelCase khi truyền props cho một thành phần con (ngoại trừ trong các mẫu trong DOM).
    Tuy nhiên, quy ước đang sử dụng kebab-case trong mọi trường hợp để căn chỉnh với các thuộc tính HTML:

        <MyComponent greeting-message="hello" />

    Chúng tôi sử dụng PascalCase cho các thẻ thành phần khi có thể vì nó cải thiện khả năng đọc mẫu bằng cách phân biệt các thành phần Vue với các phần tử gốc.
    Tuy nhiên, việc sử dụng CamelCase khi truyền đạo cụ không mang lại nhiều lợi ích thiết thực, vì vậy chúng tôi chọn tuân theo quy ước của từng ngôn ngữ.
-->

<!-- Static vs. Dyamic Props 

    Cho đến nay, bạn đã thấy các props được truyền dưới dạng giá trị tĩnh, như trong:

        <BlogPost title="My journey with Vue" />

    Bạn cũng đã thấy các props được gán động bằng v-bind hoặc phím tắt : của nó, chẳng hạn như trong:

        -- Dynamically assign the value of a variable --
        <BlogPost :title="post.title" />

        -- Dynamically assign the value of a complex expression --
        <BlogPost :title="post.title + ' by ' + post.author.name" />
-->

<!-- Passing Different Value Types
    Trong hai ví dụ trên, chúng ta tình cờ truyền các giá trị chuỗi, nhưng bất kỳ loại giá trị nào cũng có thể được truyền cho một prop.
        --  Even though `42` is static, we need v-bind to tell Vue that -- 
        --  this is a JavaScript expression rather than a string.       -- 
        <BlogPost :likes="42" />

        --  Dynamically assign to the value of a variable. -- 
        <BlogPost :likes="post.likes" />
-->

<!-- One-Way Data Flow
    Tất cả các props tạo thành một ràng buộc một chiều giữa thuộc tính con và thuộc tính cha: khi thuộc tính cha cập nhật,
    nó sẽ chuyển xuống thuộc tính con chứ không phải ngược lại.
    Điều này ngăn các thành phần con vô tình làm thay đổi trạng thái của thành phần gốc, điều này có thể khiến luồng dữ liệu trong ứng dụng của bạn khó hiểu hơn.

    Ngoài ra, mỗi khi thành phần cha được cập nhật, tất cả các props trong thành phần con sẽ được làm mới với giá trị mới nhất.
    Điều này có nghĩa là bạn không nên cố gắng thay đổi một prop bên trong một thành phần con. Nếu bạn làm vậy, Vue sẽ cảnh báo bạn trong bảng điều khiển

        const props = defineProps(['foo'])

        // ❌ warning, props are readonly!
        props.foo = 'bar'
-->