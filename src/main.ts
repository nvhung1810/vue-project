import './assets/main.css'

import { createApp } from 'vue'
/**
 * import the root component App from a single-file component.
 * nhập ứng dụng thành phần gốc từ một thành phần một tệp.
 */
import App from './App.vue'

const app = createApp(App)
/**
 * App (root component)
    ├─ TodoList
    │  └─ TodoItem
    │     ├─ TodoDeleteButton
    │     └─ TodoEditButton
    └─ TodoFooter
      ├─ TodoClearButton
      └─ TodoStatistics
 */

// ###: Mounting the App
/**
 * Một phiên bản ứng dụng sẽ không hiển thị bất kỳ thứ gì cho đến khi phương thức .mount() của nó được gọi.
 * Nó mong đợi một đối số "container", có thể là một phần tử DOM thực tế hoặc một chuỗi bộ chọn:
 */

// <div id="app"></div>
app.mount('#app')

/**
 * ###: Multiple application instances
 *  const app1 = createApp({
      .......
    })
    app1.mount('#container-1')

    const app2 = createApp({
      .......
    })
    app2.mount('#container-2')
 */
