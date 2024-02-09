import PeopleCard from "../peoples/_ui/_people-card";
import { getCurrentUser } from "./action";

export type Friend = {
  id: string;
  status: boolean | null;
  userId: string;
  userEmail: string | null;
  userName: string | null;
};

const FriendsList = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="flex gap-5 p-5 w-full h-full border flex-col">
      <div className="text-3xl font-bold p-2 ">Friends</div>
      <div className="flex gap-5 h-full flex-wrap">
        {currentUser?.userFriends.map((friend) => {
          return (
            <PeopleCard
              state="friend"
              image={friend.image ?? null}
              username={friend.userName}
              userId={friend.userId}
              email={friend.friendEmail}
              key={friend.userId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FriendsList;
