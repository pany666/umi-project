export default () => {
  const p = {
    padding: '0 0 0 20px'
  }
  return (
    <div>
      <h3>今日完成工作：</h3>
      <div style={p}>
        <p >1.熟悉SVN，申请SVN权限</p>
        <p>2.下载安装idea，学习使用idea</p>
        <p>3.学习umi</p>
      </div>
      <h3>未完成工作：</h3>
      <div style={{ minHeight: 20 }}></div>
      <h3>需协调工作：</h3>
      <div style={{ minHeight: 20 }}></div>
      <h3>备注：</h3>
      <div style={{ minHeight: 20 }}>
        使用umi时安装umi-plugin-react插件时版本冲突，导致dev运行失败
      </div>
    </div>
  )
}