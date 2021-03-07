import React from "react";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendsList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from "./components/Profile/user.json";
import statisticalData from "./components/Statistics/statistical-data.json";
import friendsData from "./components/FriendList/friends.json";
import transactions from "./components/TransactionHistory/transactions.json";

const App = () => {
  return (
    <div>
      <h2>Профиль социальной сети</h2>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <h2>Секция статистики</h2>
      <Statistics title="Upload stats" stats={statisticalData} />
      <h2>Список друзей</h2>
      <FriendsList friends={friendsData} />
      <h2>История транзакций</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
