<!-- Passing Props -->

<!-- 
    Nếu chúng ta đang xây dựng một blog, chúng ta có thể sẽ cần một thành phần đại diện cho một bài viết trong blog.
    Chúng ta muốn tất cả các bài viết trong blog sử dụng cùng một bố cục trực quan, nhưng với nội dung khác nhau.
    Một thành phần như vậy sẽ không hữu ích trừ khi bạn có thể truyền dữ liệu cho nó,
    chẳng hạn như tiêu đề và nội dung của bài viết cụ thể chúng ta muốn hiển thị. Đó là nơi props đến.

    Props là các thuộc tính tùy chỉnh bạn có thể đăng ký trên một thành phần.
    Để truyền một tiêu đề vào thành phần bài viết blog của chúng ta, chúng ta phải khai báo nó trong danh sách các props mà thành phần này chấp nhận,
    sử dụng macro defineProps:
 -->

<!-- BlogPost.vue -->
<script setup>
    defineProps(['title'])
</script>

<template>
    <h4>{{ title }}</h4>
</template>

<!-- defineProps là một macro thời biên dịch chỉ có sẵn bên trong <script setup> và không cần phải được nhập một cách rõ ràng.
    Các props được khai báo sẽ tự động xuất hiện trong mẫu.
    defineProps cũng trả về một đối tượng chứa tất cả các props được truyền vào thành phần, để chúng ta có thể truy cập chúng trong JavaScript nếu cần: -->

<!-- Nếu như không sử dụng <script setup> props nên được khai báo bằng cách sử dụng `props` oprion và sẽ được truyền đến `setup() như một đôi số
    export default {
        props: ['title'],
        setup(props) {
            console.log(props.title)
        }
    }

    Một component có thể có nhiều props, mặc định bất kì giá trị nào cũng có thể truyền cho prop
    Khi một props được đăng ký, bạn có thể truyền dữ liệu tới nó dưới dạng thuộc tính tùy chỉnh

    <BlogPost title="My journey with Vue" />
    <BlogPost title="Blogging with Vue" />
    <BlogPost title="Why Vue is so fun" />

    In a typical app, however, you'll likely have an array of posts in your parent component:

    const posts = ref([
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
    ])

    Then want to render a component for each one, using v-for:

    <BlogPost
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
    />
-->