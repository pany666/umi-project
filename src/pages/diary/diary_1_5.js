export default () => {
  const p = {
    padding: '0 0 0 20px'
  }
  return (
    <div>
      <h3>今日完成工作：</h3>
      <div style={p}>
        <p>1.对DITO和protal界面进行bug检测，提交bug漏洞</p>
        <p>2.学习umi的model，练习使用模拟数据异步请求</p>
        <p>3.学习umi的表格和表单，熟悉react的生命周期</p>
        <p>4.听取关于CICD的讲座，老师讲的太快，没听懂</p>
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