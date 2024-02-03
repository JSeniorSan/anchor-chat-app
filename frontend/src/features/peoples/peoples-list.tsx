import PeopleCard from "./_ui/_people-card";
import { getAllMembers } from "./actions";

const PeoplesList = async () => {
  const members = await getAllMembers();
  console.log("members", members);

  return (
    <div className="h-fit w-full p-5 flex flex-wrap gap-5">
      {members.map((user) => {
        return <PeopleCard user={user} type="user" key={user.email} />;
      })}
    </div>
  );
};

export default PeoplesList;
