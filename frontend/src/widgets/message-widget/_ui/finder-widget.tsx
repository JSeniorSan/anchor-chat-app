import { Input } from "@/shared/ui/input";
import { Plus, Search } from "lucide-react";
import React from "react";

const FinderWidget = () => {
  return (
    <div className="flex justify-between p-3 items-center border-borderColor border-b">
      <div className="flex items-center gap-1">
        <Search />
        <Input
          type="search"
          placeholder="People, groups and messages"
          className="border-none w-fit"
        />
      </div>
      <Plus />
    </div>
  );
};

export default FinderWidget;
