export default () => {
  const p = {
    padding: '0 0 0 20px'
  }
  return (
    <div>
      <h3>今日完成工作：</h3>
      <div style={p}>
        <p >1.解决昨天umi插件版本冲突问题，使用umi2练习</p>
        <p>2.2.参加线上培训课程</p>
        <p>3.核对pad pos接口字段</p>
        <p>4.参加SQL考试</p>
      </div>
      <h3>未完成工作：</h3>
      <div style={{ minHeight: 20 }}></div>
      <h3>需协调工作：</h3>
      <div style={{ minHeight: 20 }}></div>
      <h3>备注：</h3>
      <div style={{ minHeight: 20 }}>
      SQL考试没有通过，很多题答案记得很模糊，对SQL理解还不够透彻，后续还需要继续对SQL仔细学习，查漏补缺。
        </div>
    </div>
  )
}