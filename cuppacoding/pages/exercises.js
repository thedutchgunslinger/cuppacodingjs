import Nav from "@/components/nav";
import HomeStyle from "@/styles/home.module.css";
import LoadExercises from "@/components/loadExercises";
import { QueryClientProvider, QueryClient } from "react-query";
import ExportFAB from "@/components/exportFAB";

const queryClient = new QueryClient();
export default function Exercises() {
  return (
    <>
      <div className={HomeStyle.container}>
        <Nav />
        <ExportFAB/>
        <QueryClientProvider client={queryClient}>
          <LoadExercises />
        </QueryClientProvider>
      </div>
    </>
  );
}
