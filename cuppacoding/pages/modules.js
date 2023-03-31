import Nav from "@/components/nav";
import HomeStyle from "@/styles/home.module.css";

export default function Exercises() {
  
  return (
    <>
        <div className={HomeStyle.container}>
            <Nav />
            <h1 data-test>Modules</h1>
        </div>
    </>
  );
}
