#vue基础知识

1、模板语法
  ```
    Mustache语法：{{}}
    Html赋值：v-html
    绑定属性: v-bind:id=""  :id
    使用表达式:  {{ok?'yes':'no'}}
    文本赋值: v-text=""
    指令v-if
    过滤器:{{message | capitalize}} 和 v-bind:id="rawId | formatId"
  ```

2、Class和Style绑定

  ```
    对象语法: v-bind:class="{ active: isActive, 'text-danger': hasError }">

    数组语法:<div v-bind:class="[activeClass, errorClass]"></div>
    data: {
      activeClass: 'active',
      errorClass: 'text-danger'
    }
    <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>

    style绑定对象语法：<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
    data: {
      activeColor: 'red',
      fontSize: 30
    }
  ```

3、条件渲染
  ```
    v-if
    v-else
    v-else-if
    v-show
    v-cloak
    [v-cloak] {
    display: none;
    }
    <div v-cloak>
      {{ message }}
    </div>
  ```

4、vue事件处理器
  ```
    v-on:click="greet"或@click="greet"

    事件修饰符：
    v-on:click.stop 阻止冒泡
    v-on:click.stop.prevent 阻止默认事件（阻止按钮的默认事件，例如a标签让点击的打开新窗口或新页面失效）
    v-on:click.self 给对象本身绑定事件，如果元素中有子元素，点击子元素是没有作用的。
    v-on:click.once 只给事件绑定只生效一次

    v-on:keyup.enter
    enter/tab/delete(捕获删除和退格键)/esc/space/up/down/left/right

  ```

5、Vue组件
  ```
    全局组件和局部组件
    SPA一般是局部组件，多页面会有全局组件。

    父子组件通讯-数据传递
    (组件单向流，只允许父组件传递给子组件数据不允许子组件修改父组件变量，因为组件之间嵌套很复杂，为了防止紊乱。但可以通过$emit变相更改)

    Slot
  ```