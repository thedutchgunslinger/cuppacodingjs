import Nav from "@/components/nav";
import HomeStyle from "@/styles/home.module.css";


export default function AddExercises() {
  return (
    <>
      <div className={HomeStyle.container}>
        <Nav />
        <h1 data-test>Add exercises</h1>
      </div>
    </>
  );
}
