import Head from "next/head";
import Image from "next/image";
import Nav from "@/components/nav";
import HomeStyle from "@/styles/home.module.css";
import Exercises from "@/components/exercises";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,

} from "react-query";
const queryClient = new QueryClient();
export default function Home() {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={HomeStyle.container}>
        <Nav />
        <QueryClientProvider client={queryClient}>
          <Exercises />

        </QueryClientProvider>
      </div>
    </>
  );
}
