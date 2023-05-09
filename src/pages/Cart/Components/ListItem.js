import React, { useState } from 'react';
import Count from './Count';
import './ListItem.scss';

const ListItem = ({
  book,
  handleSingleCheck,
  checkItems,
  setCheckItems,
  // productPrice,
}) => {
  const { image, title, Key, price } = book;
  const [count, setCount] = useState(1);

  return (
    <div className="listitem-info">
      <div className="item-left">
        <input
          type="checkbox"
          className=""
          checked={checkItems.includes(Key)}
          onChange={e => handleSingleCheck(e.target.checked, Key)}
        />
        <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fckk2n9%2Fbtseh8XtY4Z%2FbyMbN3ftovv3oUiL9vV8p0%2Fimg.png" />
        {image}
        <div className="product-info">
          <p className="product-title">{title}</p>
          <div>{count}개</div>
        </div>
      </div>
      <div className="item-right">
        <Count count={count} setCount={setCount} />
        <div className="product-info">{price * count}원</div>
      </div>
    </div>
  );
};

export default ListItem;
