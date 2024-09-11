import React from "react";
import { ArrowButton } from "./Arrow-Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TopContainer } from "./TopContainer";
import { MadeFor } from "./MadeFor";

export function MainContainer() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-3">
        <ArrowButton>
          <ChevronLeft />
        </ArrowButton>
        <ArrowButton>
          <ChevronRight />
        </ArrowButton>
      </div>
      <h1 className="mt-10 font-semibold text-3xl">Good Afternoon</h1>
      <TopContainer />
      <h2 className="mt-10 font-semibold text-3xl">Made for José Marques</h2>
      <MadeFor />
    </main>
  );
}
