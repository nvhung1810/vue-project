import './assets/main.css'

import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './App.vue'

/**
  mot phien ban ung dung se khong hien thi cai j cho den khi phuong thuc
  .mount() duoc goi. No mong doi mot doi so "container", co the la
  phan tu DOM thuc te hoac chuoi bo chon
  --> Tom lai la khi nao co .mount() thi no moi dc goi

  ##### <div id="app"></div>
  ##### app.mount('#app')
 */


createApp(App).mount('#app')

/**
    App (root component)
    ├─ TodoList
    │  └─ TodoItem
    │     ├─ TodoDeleteButton
    │     └─ TodoEditButton
    └─ TodoFooter
      ├─ TodoClearButton
      └─ TodoStatistics
 */
