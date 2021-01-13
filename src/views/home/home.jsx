import React from 'react';
import { Button } from 'antd';
import './home.less';

export default class Home extends React.Component {
  // 默认数据
  state = { name: '我是首页e' };

  // 默认prop数据
  static defaultProps = {
    name: '我是首页',
  };

  // 继承prop数据
  constructor(props) {
    super(props);
    this.state.name = '首页'
  }

  // 跳转到其他页面
  toOther() {
    this.props.history.push('/other');
  }

  render() {
    return <Button onClick={this.toOther.bind(this)} className="home">{this.state.name}</Button>
  }
}
