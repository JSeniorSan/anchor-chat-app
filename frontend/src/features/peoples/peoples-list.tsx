import PeopleCard from "./_ui/_people-card";
import { getAllMembers } from "./actions";

const PeoplesList = async () => {
  const users = await getAllMembers();
  console.log("members", users);
  return (
    <div className="h-fit w-full p-5 flex flex-wrap gap-5">
      {users.map((user) => {
        return (
          <PeopleCard
            state="user"
            image={user.image}
            username={user.name}
            userId={user.id}
            email={user.email}
            key={user.email}
          />
        );
      })}
    </div>
  );
};

export default PeoplesList;
