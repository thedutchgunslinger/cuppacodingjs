import Head from "next/head";
import Image from "next/image";
import Nav from "@/components/nav";
import HomeStyle from "@/styles/home.module.css";
import indexStyle from "@/styles/index.module.css";
import Link from "next/link";


export default function Home() {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={HomeStyle.container}>
        <Nav />
        <div className={indexStyle.container}>
          <Link href="/modules" className={indexStyle.link}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9023 7.21094L17.9258 1.28125C17.6719 0.515625 16.957 0 16.1484 0H10.625V7.5H19.9492C19.9336 7.40234 19.9336 7.30469 19.9023 7.21094ZM9.375 0H3.85156C3.04297 0 2.32813 0.515625 2.07422 1.28125L0.0976563 7.21094C0.0664063 7.30469 0.0664063 7.40234 0.0507813 7.5H9.375V0ZM0 8.75V18.125C0 19.1602 0.839844 20 1.875 20H18.125C19.1602 20 20 19.1602 20 18.125V8.75H0Z"
                fill="#FED53C"
              />
            </svg>
            <p>Modules</p>
          </Link>
          <Link href="/exercises" className={indexStyle.link}>
            <svg
              width="38"
              height="38"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.09437 7.47658C4.92982 7.35359 4.76484 7.2921 4.60029 7.2921H3.86065V11.7227H4.60071C4.76527 11.7227 4.93025 11.6612 5.0948 11.5383C5.25935 11.4153 5.34163 11.2308 5.34163 10.9844V8.03047C5.34121 7.78449 5.2585 7.59958 5.09437 7.47658ZM17.1382 0H1.86183C0.835491 0 0.00254464 0.830826 0 1.85759V17.1424C0.00254464 18.1692 0.835491 19 1.86183 19H17.1382C18.1649 19 18.9975 18.1692 19 17.1424V1.85759C18.9975 0.830826 18.1645 0 17.1382 0ZM6.53973 10.9924C6.53973 11.7902 6.04734 12.9989 4.48875 12.9963H2.52089V5.97906H4.53031C6.03335 5.97906 6.53888 7.18607 6.53931 7.98424L6.53973 10.9924ZM10.8096 7.2323H8.55V8.86172H9.93132V10.1158H8.55V11.7448H10.8101V12.9989H8.17297C7.69967 13.0112 7.30609 12.6371 7.29422 12.1638V6.85781C7.28277 6.38493 7.65725 5.99221 8.13013 5.98033H10.8101L10.8096 7.2323ZM15.2051 12.1218C14.6453 13.426 13.6423 13.1664 13.1931 12.1218L11.559 5.98076H12.9404L14.2004 10.8037L15.4545 5.98076H16.8362L15.2051 12.1218Z"
                fill="#FED53C"
              />
            </svg>
            <p>Exercises</p>
          </Link>
          <Link href="/addExercise" className={indexStyle.link}>
            <svg
              width="44"
              height="44"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3125 8.59375H13.2812V1.5625C13.2812 0.699707 12.5815 0 11.7188 0H10.1562C9.29346 0 8.59375 0.699707 8.59375 1.5625V8.59375H1.5625C0.699707 8.59375 0 9.29346 0 10.1562V11.7188C0 12.5815 0.699707 13.2812 1.5625 13.2812H8.59375V20.3125C8.59375 21.1753 9.29346 21.875 10.1562 21.875H11.7188C12.5815 21.875 13.2812 21.1753 13.2812 20.3125V13.2812H20.3125C21.1753 13.2812 21.875 12.5815 21.875 11.7188V10.1562C21.875 9.29346 21.1753 8.59375 20.3125 8.59375Z"
                fill="#FED53C"
              />
            </svg>
          <p>Add Exercise</p></Link>
        </div>
      </div>
    </>
  );
}
