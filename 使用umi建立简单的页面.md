# 使用umi搭建项目

## 初始化项目

### 1.安装Node.js



umi需要运行在JS环境下，所以需要在电脑上下载安装Node，检查是否已经安装过Node,可以ctrl+R输入cmd,打开dos命令行界面。执行以下命令：![QQ截图20200718114929](C:\Users\HP\Pictures\umi笔记\QQ截图20200718114929.png)

已经安装之后可以看到node的版本号，没安装的可以去[node官网](https://nodejs.org/zh-cn/)下载安装即可。

### 2.安装umi

先找一个位置存放项目文件，我选择的是G盘，输入`G:`,输入`md umi-project`在G盘里新建文件夹用于存放项目文件umi依赖文件，umi-project为文件夹名称，可以取其他名字，并输入`cd umi-project`进入文件夹，然后输入`npm init -y`初始化项目,成功之后会多一个package.json的文件，最后输入`npm install umi@2 -D`安装umi 2.x版本的依赖(推荐使用国内淘宝镜像cnpm安装，因为npm有的文件包需要梯子),如下图：![QQ截图20200718120809](https://raw.githubusercontent.com/pany666/images/master/umi-project_images/QQ%E6%88%AA%E5%9B%BE20200718114929.png)

### 3.安装umi-plugin-react插件

使用npm安装可能会安装失败，推荐使用cnpm安装，在dos命令行中输入cnpm install umi-plugin-react -D安装插件，安装完成后可以看到package.json文件的devDependencies中会增加`"umi-plugin-react": "^1.15.8"`，安装成功。

### 4.初始化项目文件

安装完成后，在umi-project目录下创建config/config.js文件夹存放配置文件，config.js初始内容为：

```
export default {
    routes: [{
        path: '/',
        component: '/helloworld',
    }]
};
```

在umi-project目录下创建src/pages/helloworld.js存放初始页面，helloworld.js初始内容为：

```
export default () => {
  return <div>hello world!</div>;
};
```

然后将package.json中的scripts字段修改为：

```
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "umi dev",
    "build": "umi build"
  },
}
```

### 5.运行项目

初始化项目文件完成，在dos命令行中输入 `npm run dev` 运行项目。

![QQ截图20200718144820](C:\Users\HP\Pictures\umi笔记\QQ截图20200718144820.png)

运行成功，用浏览器打开[项目地址](http://localhost:8000/)，结果如下：

![QQ截图20200718145102](C:\Users\HP\Pictures\umi笔记\QQ截图20200718145102.png)

## 编写我的项目页面

### 1.在配置中引入antd

实现页面时，可以使用umi-plugin-react中的组件，只需修改config.js文件为：

```
export default {
     plugins: [
        ['umi-plugin-react', {
          antd: true,
        }],
      ],
    routes: [{
        path: '/',
        component: '/helloworld',
    }]
};
```



### 2.页面布局

创建src/layout/index.js文件，文件内容为：

```
import { Component } from 'react';
  import { Layout } from 'antd';


const { Header, Footer, Sider, Content } = Layout;
const leftsider = {
    minHeight: '100vh',
    width: '250px',
    color: '#fff'
};
const rightsider = {
    
};
const header = {
    backgroundColor: '#fff'
};
const content = {
    
};
const footer = {

};
export default class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider style={leftsider}>Sider</Sider>
        <Layout>
          <Header style={header}>Header</Header>
          <Content style={content}>Content</Content>
          <Footer style={footer}>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}
```

### 3.修改路由

把src/layout/index.js加入路由，使页面能够成功显示，将config.js中的routes修改为：

```
 routes: [{
        path: '/',
        component: '../layout',
        routes: [
          {path: '/',component: 'helloworld'},
          {path: '/helloworld',component: 'helloworld'},
        ]
      }],
```

### 4.初始化页面

以上完成之后，打开浏览器页面，结果如下：

![QQ截图20200718195248](C:\Users\HP\Pictures\umi笔记\QQ截图20200718195248.png)

### 5.修改页面样式和内容

自定义sider、header、footer内容，让页面更加丰富。修改src/layout/index.js文件内容为：

```
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
```

配置路由，修改config.js文件为：

```
export default {
    plugins: [
        ['umi-plugin-react', {
          antd: true,
        }],
      ],
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
          {path: '/',component: 'index'},
          {path: '/index',component: 'index'},
          {
            path: '/diary',
            routes: [
              { path: '/diary', component: 'diary/diary_1_1' },
              { path: '/diary/diary_1_1', component: 'diary/diary_1_1' },
              { path: '/diary/diary_1_2', component: 'diary/diary_1_2' },
              { path: '/diary/diary_1_3', component: 'diary/diary_1_3' },
              { path: '/diary/diary_1_4', component: 'diary/diary_1_4' },
              { path: '/diary/diary_1_5', component: 'diary/diary_1_5' },
            ]
          },
          {
            path: '/summary',
            routes: [
              { path: '/summary', component: 'summary/sum1' },
              { path: '/summary/sum1', component: 'summary/sum1' },
            ]
          },
        ]
      }],
};

```

### 6.界面展示

修改完成后，在浏览器中打开结果为：

![QQ截图20200718215510](C:\Users\HP\Pictures\umi笔记\QQ截图20200718215510.png)

一个简单的界面就编写完成了，后续会添加更多组件和内容，未完待续...
