import FriendList from './friend-list/FriendList';
import friends from './friend-list/friends.json';
import Profile from './social-profile/Profile';
import TransactionHistory from './transaction-history/TransactionHistory';
import transactions from './transaction-history/transactions.json';

import Statistics from './statistics/Statistics';
import statisticalData from './statistics/statistical-data.json';
import * as user from './social-profile/user.json';

console.log(friends);

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
