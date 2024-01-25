"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";
import React from "react";
import { friendsArray } from "../model/friends-stories.data";

const StoriesWidget = () => {
  return (
    <div className="p-3 border-b border-borderColor">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
            <div className="flex flex-col items-center gap-1">
              <span className="border rounded-full w-20 h-20 bg-transparent border-dashed text-lg flex justify-center items-center">
                +
              </span>
              <h3>My story</h3>
            </div>
          </CarouselItem>

          {friendsArray.map((obj) => {
            return (
              <CarouselItem
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/3 flex flex-col items-center gap-1"
                key={obj.name}
              >
                <Avatar className="w-20 h-20">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h3>{obj.name}</h3>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default StoriesWidget;
