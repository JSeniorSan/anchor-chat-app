import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { queryClient } from "./query-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const TanstackProvider = ({ children }: { children?: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </QueryClientProvider>
  );
};

export default TanstackProvider;
