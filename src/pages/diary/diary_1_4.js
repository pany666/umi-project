export default () => {
  const p = {
    padding: '0 0 0 20px'
  }
  return (
    <div>
      <h3>今日完成工作：</h3>
      <div style={p}>
        <p>1.练习使用antd的Card、Menu、Layout、Button等组件</p>
        <p>2.练习简单的页面路由，对路由配置的原理熟悉</p>
        <p>3.学习umi插件中的dva，搭建基于model的简单卡片列表页面</p>
        <p>4.听取国际中心产品概念讲座，了解公司主要产品</p>
        <p>5.为考试做准备，复习Linux基本操作命令</p>
      </div>
      <h3>未完成工作：</h3>
      <div style={{ minHeight: 20 }}></div>
      <h3>需协调工作：</h3>
      <div style={{ minHeight: 20 }}></div>
      <h3>备注：</h3>
      <div style={{ minHeight: 20 }}>
        对于dva中的异步请求没有看懂，明天还要多看几遍，查阅资料弄懂
        </div>
    </div>
  )
}