import React, { Component } from 'react';
// import './TodoItem.scss';
import styled, { css } from 'styled-components';

const Item = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  .tick {
    margin-right: 1rem;
  }
  .text {
    float: 1px;
    word-break: break-all;
    ${props =>
      props.done &&
      css`
        & .done {
          text-decoration: line-through;
        }
      `};
  }

  .delete {
    margin-left: 1rem;
    color: $oc-red-7;
    font-size: 0.8rem;
    &:hover {
      color: $oc-red-5;
      text-decoration: underline;
    }
  }
  &:nth-child(odd) {
    background: $oc-gray-0;
  }
  &:hover {
    background: $oc-gray-1;
  }

  & + & {
    border-top: 1px solid black;
  }
`;
class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.done !== nextProps.done;
  }
  render() {
    const { done, children, onToggle, onRemove } = this.props;
    return (
      //  <div className="todo-item" onClick={onToggle}>
      <Item onClick={onToggle} done={done}>
        <input className={'tick'} type="checkbox" checked={done} readOnly />
        <div className=" text done">{children}</div>
        <div
          className="delete"
          onClick={e => {
            onRemove();
            e.stopPropagation();
          }}
        >
          [지우기]
        </div>
      </Item>
      // </div>
    );
  }
}

export default TodoItem;
