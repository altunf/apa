import { AcademicsList } from "@/components/academic/academics-list";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AcademicsPage() {
  return (
    <main className="flex flex-1 md:p-8 h-full w-full min-h-screen flex-col  gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>Akademisyenler</CardTitle>
          <CardDescription>1355 akademisyen listeleniyor ...</CardDescription>
        </CardHeader>
        <CardContent>
          <AcademicsList />
        </CardContent>
      </Card>
    </main>
  );
}
