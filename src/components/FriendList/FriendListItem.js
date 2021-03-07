import React from "react";

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li key={id} className="item">
    <span className="status">{isOnline ? "В сети" : "Отсутсвует"}</span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </li>
);

export default FriendListItem;
