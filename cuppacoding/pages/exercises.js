import Nav from "@/components/nav";
import HomeStyle from "@/styles/home.module.css";
import LoadExercises from "@/components/loadExercises";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();
export default function Exercises() {
  return (
    <>
      <div className={HomeStyle.container}>
        <Nav />
        <QueryClientProvider client={queryClient}>
          <LoadExercises />
        </QueryClientProvider>
      </div>
    </>
  );
}
