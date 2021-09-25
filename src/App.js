import FriendList from './friend-list/FriendList';
import friends from './friend-list/friends.json';

import Profile from './Profile/Profile';
import Statistics from './statistics/Statistics';
import statisticalData from './statistics/statistical-data.json';
import * as user from './social-profile/user.json';

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
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
