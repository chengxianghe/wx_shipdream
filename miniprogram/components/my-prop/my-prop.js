// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    content: {
      type: String,
      value: "我是默认的内容",
      // 加监听
      observer: function(newVal, oldVal) {
        console.log(oldVal);
        console.log(newVal);
      }
    }
  },

  externalClasses: ['titleclass'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleIncrement() {
      console.log("handleIncrement");
    }

  }
})
