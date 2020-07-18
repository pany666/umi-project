export default () => {
  const p = {
    padding: '0 0 0 20px'
  }
  return (
    <div>
      <h3>今日完成工作：</h3>
      <div style={p}>
        <p>1.听讲座，了解公司文化、组织架构、十大高压线和注意事项</p>
        <p>2.继续核对pad pos接口字段</p>
        <p>3.学习antd的布局和路由</p>
        <p>4.复习linux基础知识</p>
      </div>
      <h3>未完成工作：</h3>
      <div style={{ minHeight: 20 }}></div>
      <h3>需协调工作：</h3>
      <div style={{ minHeight: 20 }}></div>
      <h3>备注：</h3>
      <div style={{ minHeight: 20 }}>

      </div>
    </div>
  )
}