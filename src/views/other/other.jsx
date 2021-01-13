import React from 'react';
import { Button } from 'antd';
import './other.less';

export default class Other extends React.Component {
    // 默认数据
    state = {
      name: '其他页面',
    }

    // 默认props属性
    static defaultProps = {
      name: '我是默认数据',
    }

    // 继承属性
    constructor(props) {
      super(props);
      this.state.name = '其他';
    }

    // 数据绑定完成
    componentDidMount() {
      console.log(this);
    }

    // 跳转到首页
    toHome() {
      this.props.history.push('/home');
    }

    render() {
      return (<Button onClick={this.toHome.bind(this)} className="other">其他页面</Button>)
    }
}
