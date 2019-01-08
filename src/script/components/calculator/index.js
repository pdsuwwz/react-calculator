import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.scss";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
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
              <div styleName="number">69</div>
            </div>
          </div>
          <div styleName="bottom">
            <ul styleName="btn-wrap">
              <li styleName="left">
              {
                getBtnList(numberList)
              }
              </li>
              <li styleName="right">
                {
                  getBtnList(ctrlIcon, true)
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.']
const ctrlIcon = ['/', '-', '+', '=']

// 获取数字及操作符号的按钮列表项
const getBtnList = (arr, ctrl = false) => {
  let result = []
  if(ctrl){
    result = arr.map((item, index) => <div styleName="btn ctrl" key={index}>{item}</div>)
  }else{
    for(let i = 0, length = arr.length; i < length; i++){
      if(arr[i] === 0){
        result.push(<div styleName="btn zero" key={i}>{arr[i]}</div>)
      }else{
        result.push(<div styleName="btn" key={i}>{arr[i]}</div>)
      }
    }
  }
  return result
}