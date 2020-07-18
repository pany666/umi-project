import { Component } from 'react';
import { Layout, Menu } from 'antd';
import Link from 'umi/link';
// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout;
// 引入子菜单组件
const SubMenu = Menu.SubMenu;
//设置sider、header、content、footer样式
const sider = {
  minHeight: '100vh',
  textAlign: 'center',
  color: 'green'
};
const header = {
  background: '#fff', 
  textAlign: 'center',
  padding: 0,
  color: 'cyan',
  fontSize: '22px',
  textShadow: '2px 2px 4px cyan'
};
const content = {
  margin: '24px 16px 0'
};
const footer = {
  textAlign: 'center'
}
// 设置标题样式
const title = {
    height: '32px',
    background: 'rgba(255,255,255,.2)',
    margin: '16px',
    lineHeight: '32px',
    fontSize: '18px'
}
export default class BasicLayout extends Component {
render() {
  
  return (
      <Layout>
      <Sider width={256} style={ sider }>
      <div style={ title }>日志目录</div>
          <Menu theme='dark' mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key='1'>
              <Link to='/'>
              <strong>第一周</strong>
              </Link>
            </Menu.Item>
            <SubMenu key='sub1'  title={<a>日志</a>}>
              <Menu.Item key='2'><Link to='/diary/diary_1_1'>星期一</Link></Menu.Item>
              <Menu.Item key='3'><Link to='/diary/diary_1_2'>星期二</Link></Menu.Item>
              <Menu.Item key='4'><Link to='/diary/diary_1_3'>星期三</Link></Menu.Item>
              <Menu.Item key='5'><Link to='/diary/diary_1_4'>星期四</Link></Menu.Item>
              <Menu.Item key='6'><Link to='/diary/diary_1_5'>星期五</Link></Menu.Item>
            </SubMenu>
            <SubMenu key='sub2' title={<a>总结</a>}>
              <Menu.Item key='7'><Link to='/summary/sum1'>总结一</Link></Menu.Item>
            </SubMenu>
          </Menu>
      </Sider>
      <Layout >
        <Header style={ header }>我的日志内容</Header>
        <Content style={ content }>
          <div style={{ padding: 24, background: '#fff', minHeight: '70vh' }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={ footer }>Wish you have a good time~</Footer>
      </Layout>
    </Layout>
  )
}
}