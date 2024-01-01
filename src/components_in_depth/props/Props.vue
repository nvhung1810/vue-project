<!-- Props Declaration -->

<!-- Các thành phần Vue yêu cầu khai báo props rõ ràng để Vue biết props bên ngoài nào được truyền cho thành phần đó sẽ được coi là thuộc tính dự phòng 
    (điều này sẽ được thảo luận trong phần dành riêng cho nó). 

    Trong SFC sử dụng <script setup>, props có thể được khai báo bằng macro definProps():
-->

<script setup>
    const props = defineProps(['foo'])

    console.log(props.foo)
</script>

<!-- In non-<script setup> components, props are declared using the props option: 
    export default {
        props: ['foo'],
        setup(props) {
            // setup() receives props as the first argument.
            console.log(props.foo)
        }
    }
-->

<!-- Lưu ý đối số được truyền cho `defineProps()` giống như giá trị cung cấp cho `props` options API tùy chọn đạo cụ giống nhau được chia sẻ giữa hai kiểu khai báo. 

    // in <script setup>
    defineProps({
        title: String,
        likes: Number
    })

    // in non-<script setup>
    export default {
        props: {
            title: String,
            likes: Number
        }
    }

    Đối với ts thì làm như này
    <script setup lang="ts">
        defineProps<{
            title?: string
            likes?: number
        }>()
    </script>
-->
