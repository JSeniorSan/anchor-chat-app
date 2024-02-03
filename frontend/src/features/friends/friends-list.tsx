import { db } from "@/shared/lib/db";
import PeopleCard from "../peoples/_ui/_people-card";

const FriendsList = async () => {
  const friends = await db.friend.findMany();
  console.log("friends", friends);

  return (
    <div className="flex gap-5 p-5 w-full h-fit border flex-col">
      <div className="text-3xl font-bold p-2 ">Friends</div>
      {friends.map((friend) => {
        return (
          <PeopleCard member={friend} type="friend" key={friend.userEmail} />
        );
      })}
    </div>
  );
};

export default FriendsList;
