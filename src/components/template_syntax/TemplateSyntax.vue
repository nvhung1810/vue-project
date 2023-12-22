<!-- Text Interpolation
  ********************************************************************************
    <span>Message: {{ msg }}</span>
  ********************************************************************************
-->

<!-- Raw HTML
  ********************************************************************************
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  ********************************************************************************

  ###
    Ở đây chúng ta đang gặp phải điều gì đó mới mẻ.
    Thuộc tính v-html bạn đang thấy được gọi là lệnh.
    Các chỉ thị có tiền tố v- để chỉ ra rằng chúng là các thuộc tính đặc biệt do Vue cung cấp và như bạn có thể đoán,
    chúng áp dụng hành vi phản ứng đặc biệt cho DOM được kết xuất.
    Ở đây, về cơ bản chúng tôi đang nói "luôn cập nhật HTML bên trong của phần tử này bằng thuộc tính rawHtml trên phiên bản hoạt động hiện tại".
  ###

  ###
    Nội dung của span sẽ được thay thế bằng giá trị của thuộc tính rawHtml,
    được hiểu là HTML thuần túy - các ràng buộc dữ liệu bị bỏ qua.
    Lưu ý rằng bạn không thể sử dụng v-html để soạn các phần mẫu vì Vue không phải là công cụ tạo khuôn mẫu dựa trên chuỗi.
    Thay vào đó, các thành phần được ưu tiên làm đơn vị cơ bản để tái sử dụng và kết hợp giao diện người dùng.
  ###
-->

<!-- Attribute Bindings: Ràng buộc thuộc tính
  ********************************************************************************
    <div v-bind:id="dynamicId"></div>
    Shorthand
    <div :id="dynamicId"></div>
  ********************************************************************************
  ###
    Mustaches cannot be used inside HTML attributes. Instead, use a v-bind directive:
  ###
  ###
    Lệnh v-bind hướng dẫn Vue giữ thuộc tính id của phần tử đồng bộ với thuộc tính DynamicId của thành phần.
    Nếu giá trị giới hạn là null hoặc không xác định thì thuộc tính sẽ bị xóa khỏi phần tử được hiển thị.
  ###
-->

<!-- Boolean Attributes:
  ###
    Boolean attributes are attributes that can indicate true / false values by their presence on an element.
    For example, disabled is one of the most commonly used boolean attributes.
  ###
  ********************************************************************************
    <button :disabled="isButtonDisabled">Button</button>
  ********************************************************************************
 -->

<!-- Dynamically Binding Multiple Attributes: Liên kết động nhiều thuộc tính
  ###
    If you have a JavaScript object representing multiple attributes that looks like this:
    const objectOfAttrs = {
      id: 'container',
      class: 'wrapper'
    }
    You can bind them to a single element by using v-bind without an argument: (Lien ket vo)
    <div v-bind="objectOfAttrs"></div>
  ###

 -->

<!-- Using JavaScript Expressions: Sử dụng biểu thức JavaScript
  ###
    So far we've only been binding to simple property keys in our templates.
    But Vue actually supports the full power of JavaScript expressions inside all data bindings:
  ###
  ********************************************************************************
    {{ number + 1 }}

    {{ ok ? 'YES' : 'NO' }}

    {{ message.split('').reverse().join('') }}

    <div :id="`list-${id}`"></div>
  ********************************************************************************
 -->

<!--  Expressions Only:

 -->

<!-- Calling Functions
  ********************************************************************************
  <time :title="toTitleDate(date)" :datetime="date">
    {{ formatDate(date) }}
  </time>
  ********************************************************************************
-->

<!-- Directives
  ###
    Chỉ thị là các thuộc tính đặc biệt có tiền tố v-.
    Vue cung cấp một số chỉ thị có sẵn, bao gồm v-html và v-bind mà chúng tôi đã giới thiệu ở trên.
    Các giá trị thuộc tính chỉ thị được mong đợi là các biểu thức JavaScript đơn lẻ (ngoại trừ v-for, v-on và v-slot,
    sẽ được thảo luận trong các phần tương ứng sau).
    Công việc của lệnh là áp dụng các bản cập nhật cho DOM một cách phản ứng khi giá trị biểu thức của nó thay đổi. Lấy v-if làm ví dụ:
  ###
  ********************************************************************************
    <p v-if="seen">Now you see me</p>
  ********************************************************************************
  ###
    Ở đây, lệnh v-if sẽ loại bỏ/chèn phần tử <p> dựa trên tính trung thực của giá trị của biểu thức được nhìn thấy.
  ###
-->

<!-- Arguments
  ###
    Một số lệnh có thể lấy một "đối số", được biểu thị bằng dấu hai chấm sau tên lệnh.
    Ví dụ: lệnh v-bind được sử dụng để cập nhật một cách phản ứng một thuộc tính HTML:
  ###
  ********************************************************************************
    <a v-bind:href="url"> ... </a>
    shorthand
    <a :href="url"> ... </a>
  ********************************************************************************
  ###
    Ở đây, href là đối số, cho lệnh v-bind liên kết thuộc tính href của phần tử với giá trị của url biểu thức.
    Nói cách ngắn gọn, mọi thứ trước đối số (tức là v-bind:) được cô đọng thành một ký tự duy nhất, :.
    Một ví dụ khác là lệnh v-on, dùng để lắng nghe các sự kiện DOM:
  ###
  ********************************************************************************
    <a v-on:click="doSomething"> ... </a>
    shorthand
    <a @click="doSomething"> ... </a>
  ********************************************************************************
  ###
    Ở đây, đối số là tên sự kiện cần nghe: click.
    v-on có cách viết tắt tương ứng, đó là ký tự @. Chúng ta cũng sẽ nói về việc xử lý sự kiện chi tiết hơn.
  ###
-->

<!-- Dynamic Arguments
  ###
    Cũng có thể sử dụng biểu thức JavaScript trong đối số chỉ thị bằng cách gói nó bằng dấu ngoặc vuông:
  ###
  ********************************************************************************
    Note that there are some constraints to the argument expression,
    as explained in the "Dynamic Argument Value Constraints" and "Dynamic Argument Syntax Constraints" sections below.
    <a v-bind:[attributeName]="url"> ... </a>
    shorthand
    <a :[attributeName]="url"> ... </a>
  ********************************************************************************
  ###
    Ở đây, attributeName sẽ được đánh giá động dưới dạng biểu thức JavaScript
    và giá trị được đánh giá của nó sẽ được sử dụng làm giá trị cuối cùng cho đối số.
    Ví dụ: nếu phiên bản thành phần của bạn có thuộc tính dữ liệu, attributeName, có giá trị là "href",
    thì ràng buộc này sẽ tương đương với v-bind:href.

    Tương tự, bạn có thể sử dụng các đối số động để liên kết trình xử lý với tên sự kiện động:
  ###
  ********************************************************************************
    <a v-on:[eventName]="doSomething"> ... </a>
    shorthand
    <a @[eventName]="doSomething">
  ********************************************************************************
  ###
    Trong ví dụ này, khi giá trị của eventName là "focus", v-on:[eventName] sẽ tương đương với v-on:focus.
  ###
-->
