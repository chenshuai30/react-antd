import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './layout.jsx';

export default class Root extends React.Component {
  // 继承属性
  constructor(props) {
    super(props);
  }

  // 数据绑定
  componentDidMount() {
    // if (this.props.history.location.pathname === '/home') {
    //   this.props.history.push('/other');
    // } else {
    //   this.props.history.push('/home');
    // }
  }

  // 数据渲染
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Route component={Layout} to="/" />
      </div>
    )
  }
}
