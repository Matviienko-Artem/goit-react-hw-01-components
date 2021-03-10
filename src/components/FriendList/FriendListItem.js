import React from 'react';
import style from './FriendList.module.css';

const styleIsOnline = {
  backgroundColor: `#9acd32`,
};

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li key={id} className={style.item}>
    {isOnline ? (
      <span
        className={style.status}
        style={{ backgroundColor: '#9acd32' }}
      ></span>
    ) : (
      <span
        className={style.status}
        style={{ backgroundColor: '#ff0000' }}
      ></span>
    )}

    <img className={style.avatar} src={avatar} alt={name} width="48" />
    <p className={style.name}>{name}</p>
  </li>
);

export default FriendListItem;
