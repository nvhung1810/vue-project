<!-- Component Registration -->

<!-- 
    Một thành phần Vue cần phải được "đăng ký" để Vue biết vị trí triển khai của nó khi gặp nó trong một mẫu. Có hai cách để đăng ký thành phần: toàn cầu và cục bộ.
 -->

<!-- @@ Global Registration 

    We can make components available globally in the current Vue application using the .component() method:

            import { createApp } from 'vue'

            const app = createApp({})

            app.component(
                // the registered name
                'MyComponent',
                // the implementation
                {
                    /* ... */
                }
            )
    If using SFCs, you will be registering the imported .vue files:

            import MyComponent from './App.vue'

            app.component('MyComponent', MyComponent)

    The .component() method can be chained (xâu chuỗi):

            app
            .component('ComponentA', ComponentA)
            .component('ComponentB', ComponentB)
            .component('ComponentC', ComponentC)
-->