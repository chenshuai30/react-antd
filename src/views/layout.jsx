import React from 'react';
import { Layout } from 'antd';
import { Route, Redirect } from 'react-router-dom';
// import { createHashHistory } from 'history';
import Home from './home';
import Other from './other';
// const history = createHashHistory();
// const Home = lazy(() => import('./home/home'));
// const Other = lazy(() => import('./other/other'));
// const loading = <div>loading...</div>;
// const ReadHome = () => (
//   <Suspense fallback={loading}>
//     <Home history={history} />
//   </Suspense>
// )

// const ReadOther = () => (
//   <Suspense fallback={loading}>
//     <Other history={history} />
//   </Suspense>
// )

// import Home from './home';
// import Other from './other';

const {
  Header, Content, Sider, Footer,
} = Layout;
export default class App extends React.Component {
  // 默认props属性
  static defaultProps = {
    hehehe: 'layout布局',
  };

  // 继承props属性
  constructor(props) {
    super(props);
  }

  // 按钮点击事件
  clickButton() {
    console.log('点击', this);
  }

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        {/* layout布局 */}
        <Layout style={{ height: '100%', flexDirection: 'column' }}>
          {/* 头部 */}
          <Header theme="light" style={{ background: '#fff' }}>头部</Header>
          {/* 内容区域 */}
          <Content>
            <Layout style={{ height: '100%' }}>
              {/* 侧边 */}
              <Sider style={{ height: '100%' }} theme="light">侧边</Sider>
              {/* 内容主区域 */}
              <Content>
                {/* 首页 */}
                <Route component={Home} path="/home" />
                {/* 其他页面 */}
                <Route component={Other} path="/other" />
                {/* 重定向到首页 */}
                <Redirect from="/" to="/home" />
              </Content>
            </Layout>
          </Content>
          {/* 底部 */}
          <Footer>底部</Footer>
        </Layout>
      </div>
    )
  }
}
