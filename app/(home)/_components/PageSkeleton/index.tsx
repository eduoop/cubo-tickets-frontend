import { Skeleton } from "@/app/_components/ui/skeleton";
import React from "react";

function PageSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} className="min-h-[125px] px-2 py-3 h-full">
          <Skeleton className="w-[25%] h-5 rounded-full mb-5" />
          <Skeleton className="w-[50%] h-3 mb-3" />
          <Skeleton className="w-[85%] h-3 " />
        </Skeleton>
      ))}
    </div>
  );
}

export default PageSkeleton;
