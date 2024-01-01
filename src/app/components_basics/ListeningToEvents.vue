<!-- 
    Khi phát triển thành phần <BlogPost> của chúng ta, một số tính năng có thể yêu cầu truyền thông lên trở lại cha.
    Ví dụ, chúng ta có thể quyết định bao gồm một tính năng truy cập để làm tăng kích thước văn bản của các bài viết trong blog,
    trong khi giữ phần còn lại của trang ở kích thước mặc định.

    Trong phần tử cha, chúng ta có thể hỗ trợ tính năng này bằng cách thêm một tham chiếu postFontSize.

            const posts = ref([
                /* ... */
            ])

            const postFontSize = ref(1)

    Which can be used in the template to control the font size of all blog posts:

            <div :style="{ fontSize: postFontSize + 'em' }">
                <BlogPost
                    v-for="post in posts"
                    :key="post.id"
                    :title="post.title"
                />
            </div>
    Bây giờ hãy thêm một nút vào mẫu của thành phần <BlogPost>:
            BlogPost.vue, omitting <script>
            <template>
                <div class="blog-post">
                    <h4>{{ title }}</h4>
                    <button>Enlarge text</button>
                </div>
            </template>
    
    Nút hiện tại chưa thực hiện bất kỳ thao tác nào - chúng tôi muốn khi nhấp vào nút,
    nó sẽ thông báo đến phần cha rằng nó nên phóng to văn bản của tất cả các bài viết.
    Để giải quyết vấn đề này, các thành phần cung cấp một hệ thống sự kiện tùy chỉnh.
    Phần cha có thể chọn lắng nghe bất kỳ sự kiện nào trên thể hiện thành phần con bằng v-on hoặc @, giống như khi chúng ta làm với một sự kiện DOM nguyên thuỷ:

    <BlogPost
        ...
        @enlarge-text="postFontSize += 0.1"
    />

    Sau đó, thành phần con có thể tự phát ra một sự kiện bằng cách gọi phương thức $emit tích hợp, chuyển tên của sự kiện:

    <template>
        <div class="blog-post">
            <h4>{{ title }}</h4>
            <button @click="$emit('enlarge-text')">Enlarge text</button>
        </div>
    </template>
 -->