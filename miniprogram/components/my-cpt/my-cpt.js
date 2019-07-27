// component/my-cpt/my-cpt.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   
  },

  /**
   * 组件的初始数据
   */
  data: {
   title: "组件title"
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  options: {
    // 默认属性 不会被外界样式影响
    // styleIsolation: 'isolation'

    //组件外 影响组件内 但是优先级 组件内属性 > 组件外属性
    // styleIsolation: "apply-shared"

    //组件内外 相互影响 但是 组件内属性 > 组件外属性
    // styleIsolation: "shared"
  }
})
