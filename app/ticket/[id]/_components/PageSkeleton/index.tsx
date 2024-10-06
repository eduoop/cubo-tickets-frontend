import React from "react";
import { Skeleton } from "@/app/_components/ui/skeleton";
import { Card } from "@/app/_components/ui/card";

function PageSkeleton() {
  return (
    <div className="px-4 md:px-6 py-4">
      <Card className="flex gap-4 h-[150px] items-center px-2 mt-5 mb-4">
        <Skeleton className="h-[70%] w-[5px] rounded-full" />
        <div className="flex flex-col gap-2 overflow-hidden text-ellipsis text-nowrap items-start w-full">
          <Skeleton className="w-32 h-6 rounded-full mb-2" />
          <Skeleton className="w-40 h-5 rounded-full mb-1" />
          <div className="flex items-center gap-2 w-full">
            <Skeleton className="w-4 h-4" />
            <Skeleton className="w-16 h-5 rounded-full" />
          </div>
          <Skeleton className="w-48 h-5 rounded-full" />
        </div>
      </Card>
      <div className="flex flex-col space-y-4 mt-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton
            key={index}
            className="w-full h-12 rounded-lg max-w-3xl mx-auto"
          />
        ))}
      </div>
    </div>
  );
}

export default PageSkeleton;
