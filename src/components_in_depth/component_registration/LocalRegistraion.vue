<!-- 
    Mặc dù thuận tiện, đăng ký toàn cầu có một số điểm hạn chế:

    1.  Đăng ký toàn cầu ngăn các hệ thống xây dựng loại bỏ các thành phần không sử dụng (hay còn gọi là "tree-shaking").
        Nếu bạn đăng ký một thành phần toàn cầu nhưng cuối cùng không sử dụng nó ở bất kỳ nơi nào trong ứng dụng của bạn, nó vẫn sẽ được bao gồm trong bản cuối cùng.

    2.  Đăng ký toàn cầu làm cho mối quan hệ phụ thuộc ít rõ ràng hơn trong các ứng dụng lớn.
        Nó làm cho việc định vị mã nguồn của một thành phần con từ một thành phần cha sử dụng nó trở nên khó khăn.
        Điều này có thể ảnh hưởng đến khả năng bảo trì lâu dài tương tự như việc sử dụng quá nhiều biến toàn cầu.

    3.  Đăng ký cục bộ giới hạn sự sẵn có của các thành phần đã đăng ký chỉ trong phạm vi của thành phần hiện tại.
    Điều này làm cho mối quan hệ phụ thuộc trở nên rõ ràng hơn và thân thiện với "tree-shaking".

    Khi sử dụng SFC với <script setup>, các thành phần được nhập có thể được sử dụng cục bộ mà không cần đăng ký:

            <script setup>
                import ComponentA from './ComponentA.vue'
            </script>

            <template>
                <ComponentA />
            </template>

    import ComponentA from './ComponentA.js'

    export default {
    components: {
        ComponentA
    },
    setup() {
        // ...
    }
    }
 -->