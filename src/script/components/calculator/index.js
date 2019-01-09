import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.scss";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    }
  }


  // 获取数字及操作符号的按钮列表项
  getBtnList = (arr, ctrl = false) => {
    let result = []
    if (ctrl) {
      result = arr.map((item, index) => <div styleName="btn ctrl" data-ctrl={item} key={index}>{item}</div>)
    } else {
      for (let i = 0, length = arr.length; i < length; i++) {
        if (arr[i] === 0) {
          result.push(<div styleName="btn zero" data-num={arr[i]} key={i}>{arr[i]}</div>)
        } else {
          result.push(<div styleName="btn" data-num={arr[i]} key={i}>{arr[i]}</div>)
        }
      }
    }
    return result
  }

  // 数字点击事件
  handleNum = (e) => {
    let data = e.target.dataset.num
    let { number } = this.state
    if (data) {
      if (number == 0 && data != '.') {
        number = data
      } else if(String(number).includes('.') && data == '.'){ // 含有小数且点击的是 '.'
        number = number
      } else {
        number = `${number}${data}`
      }
      this.setState({number})
    }
  }

  handleCtrl = (e) => {
    console.log(e.target)
  }


  render() {
    return (
      <div styleName="wrap">
        <div styleName="box">
          <div styleName="top">
            <ul styleName="menu">
              <li styleName="item">×</li>
              <li styleName="item"></li>
              <li styleName="item"></li>
            </ul>
            <div styleName="number-wrap">
              <div styleName="number">{this.state.number}</div>
            </div>
          </div>
          <div styleName="bottom">
            <ul styleName="btn-wrap">
              <li styleName="left" onClick={(e) => { this.handleNum(e) }}>
                {
                  this.getBtnList(numberList)
                }
              </li>
              <li styleName="right" onClick={(e) => { this.handleCtrl(e) }}>
                {
                  this.getBtnList(ctrlIcon, true)
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const numberList = [9, 8, 7, 6, 5, 4, 3, 2, 1, ".", 0]
const ctrlIcon = ['/', '-', '+', '=']