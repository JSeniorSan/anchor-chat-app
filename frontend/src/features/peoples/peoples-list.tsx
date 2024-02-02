import PeopleCard from "./_ui/_people-card";
import { getAllMembers } from "./actions";

const PeoplesList = async () => {
  const members = await getAllMembers();
  return (
    <div className="h-screen w-full p-5 flex flex-wrap gap-5">
      {members.map((member) => {
        return <PeopleCard member={member} />;
      })}
    </div>
  );
};

export default PeoplesList;
