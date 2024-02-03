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
  // const friends = await db.friend.findMany();
  const currentUser = await getCurrentUser();

  return (
    <div className="flex gap-5 p-5 w-full h-fit border flex-col">
      <div className="text-3xl font-bold p-2 ">Friends</div>
      {currentUser?.userFriends.map((friend) => {
        return (
          <PeopleCard
            email={friend.userEmail}
            image={null}
            username={friend.userName}
            key={friend.userEmail}
          />
        );
      })}
    </div>
  );
};

export default FriendsList;
