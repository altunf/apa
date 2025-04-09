import { InfoCardList } from "@/components/info-card-list";
import { RandomUniversities } from "@/components/university/random-universities";
import { RandomAcademics } from "@/components/academic/random-academics";

export default function Home() {
  return (
    <main className="flex flex-1  gap-4 md:gap-8 md:p-8 h-full w-full flex-col p-4">
      <InfoCardList />
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <RandomUniversities />
        <RandomAcademics />
      </div>
    </main>
  );
}
