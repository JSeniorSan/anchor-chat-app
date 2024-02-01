import { UserType } from "@/entities/session/model/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

const PeoplesList = ({ members }: { members: UserType[] }) => {
  return (
    <div className="h-screen w-full p-5 flex flex-wrap gap-5">
      {members.map((member) => {
        return (
          <Card
            className="w-80 h-64 hover:border-orange-200 transition-all ease-in-out hover:scale-105"
            key={member?.email}
          >
            <CardHeader className="flex gap-3">
              <Avatar>
                <AvatarImage src={member?.image as string | undefined} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <CardTitle>{member?.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <Button className="w-32 ">Send a message</Button>
              <Button className="w-32">Add to friends</Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default PeoplesList;
