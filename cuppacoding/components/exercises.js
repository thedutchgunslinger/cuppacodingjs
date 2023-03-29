import ExerCard from "@/components/exerCard";
import ExerStyle from "@/styles/exercises.module.css";
import React, { useState } from "react";

import { gsap } from "gsap/dist/gsap";

export default function Exercises() {
  const languages = ["html", "css", "javascript", "php", "flask"];

   const [toggle, setToggle] = useState(false);
    const handleClick = () => {
      setToggle(!toggle);
    };
  const isList = toggle;

  return (
    <>
      <div onClick={handleClick} className={ExerStyle.toggleView}>
        {
          /* switch the displayed icon on what the value of toggle is */
          toggle ? (
            <svg
              width="28"
              height="21"
              viewBox="0 0 21 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 1.64062C6 0.73418 5.16094 0 4.125 0H1.875C0.839062 0 0 0.73418 0 1.64062V3.60938C0 4.51582 0.839062 5.25 1.875 5.25H4.125C5.16094 5.25 6 4.51582 6 3.60938V1.64062ZM6 9.51562C6 8.60918 5.16094 7.875 4.125 7.875H1.875C0.839062 7.875 0 8.60918 0 9.51562V11.4844C0 12.3908 0.839062 13.125 1.875 13.125H4.125C5.16094 13.125 6 12.3908 6 11.4844V9.51562ZM7.5 1.64062V3.60938C7.5 4.51582 8.33906 5.25 9.375 5.25H11.625C12.6609 5.25 13.5 4.51582 13.5 3.60938V1.64062C13.5 0.73418 12.6609 0 11.625 0H9.375C8.33906 0 7.5 0.73418 7.5 1.64062ZM13.5 9.51562C13.5 8.60918 12.6609 7.875 11.625 7.875H9.375C8.33906 7.875 7.5 8.60918 7.5 9.51562V11.4844C7.5 12.3908 8.33906 13.125 9.375 13.125H11.625C12.6609 13.125 13.5 12.3908 13.5 11.4844V9.51562ZM15 1.64062V3.60938C15 4.51582 15.8391 5.25 16.875 5.25H19.125C20.1609 5.25 21 4.51582 21 3.60938V1.64062C21 0.73418 20.1609 0 19.125 0H16.875C15.8391 0 15 0.73418 15 1.64062ZM21 9.51562C21 8.60918 20.1609 7.875 19.125 7.875H16.875C15.8391 7.875 15 8.60918 15 9.51562V11.4844C15 12.3908 15.8391 13.125 16.875 13.125H19.125C20.1609 13.125 21 12.3908 21 11.4844V9.51562Z"
                fill="#FED53C"
              />
            </svg>
          ) : (
            <svg
              width="28"
              height="25"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.984375 0C0.438867 0 0 0.438867 0 0.984375V2.95312C0 3.49863 0.438867 3.9375 0.984375 3.9375H2.95312C3.49863 3.9375 3.9375 3.49863 3.9375 2.95312V0.984375C3.9375 0.438867 3.49863 0 2.95312 0H0.984375ZM7.21875 0.65625C6.49277 0.65625 5.90625 1.24277 5.90625 1.96875C5.90625 2.69473 6.49277 3.28125 7.21875 3.28125H19.0312C19.7572 3.28125 20.3438 2.69473 20.3438 1.96875C20.3438 1.24277 19.7572 0.65625 19.0312 0.65625H7.21875ZM7.21875 7.21875C6.49277 7.21875 5.90625 7.80527 5.90625 8.53125C5.90625 9.25723 6.49277 9.84375 7.21875 9.84375H19.0312C19.7572 9.84375 20.3438 9.25723 20.3438 8.53125C20.3438 7.80527 19.7572 7.21875 19.0312 7.21875H7.21875ZM7.21875 13.7812C6.49277 13.7812 5.90625 14.3678 5.90625 15.0938C5.90625 15.8197 6.49277 16.4062 7.21875 16.4062H19.0312C19.7572 16.4062 20.3438 15.8197 20.3438 15.0938C20.3438 14.3678 19.7572 13.7812 19.0312 13.7812H7.21875ZM0 7.54688V9.51562C0 10.0611 0.438867 10.5 0.984375 10.5H2.95312C3.49863 10.5 3.9375 10.0611 3.9375 9.51562V7.54688C3.9375 7.00137 3.49863 6.5625 2.95312 6.5625H0.984375C0.438867 6.5625 0 7.00137 0 7.54688ZM0.984375 13.125C0.438867 13.125 0 13.5639 0 14.1094V16.0781C0 16.6236 0.438867 17.0625 0.984375 17.0625H2.95312C3.49863 17.0625 3.9375 16.6236 3.9375 16.0781V14.1094C3.9375 13.5639 3.49863 13.125 2.95312 13.125H0.984375Z"
                fill="#FED53C"
              />
            </svg>
          )
        }
      </div>

      <div className={ExerStyle.container}>
        <ExerCard
          id={1}
          level={1}
          lang={languages}
          title="name"
          module="python trainee"
          time={30}
          list={isList}
          description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
        />
        <ExerCard
          id={2}
          level={2}
          lang={["html", "css", "extraLangeTaal"]}
          title="name"
          module="python trainee"
          time={30}
          list={isList}
          description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
        />
        <ExerCard
          id={3}
          level={3}
          lang={languages}
          title="name"
          module="python trainee"
          time={30}
          list={isList}
          description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
        />
        <ExerCard
          id={4}
          level={4}
          lang={["python", "html"]}
          title="python & html"
          module="python training"
          time={120}
          list={isList}
          description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
        />
        <ExerCard
          id={1}
          level={5}
          lang={languages}
          title="name"
          module="python trainee"
          time={30}
          list={isList}
          description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
        />
        <ExerCard
          id={2}
          level={6}
          lang={["html", "css"]}
          title="name"
          module="python trainee"
          time={30}
          list={isList}
          description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
        />
        <ExerCard
          id={3}
          level={7}
          lang={languages}
          title="name"
          module="python trainee"
          time={30}
          list={isList}
          description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
        />
        <ExerCard
          id={4}
          level={8}
          lang={["python", "html"]}
          title="python & html"
          module="python training"
          time={120}
          list={isList}
          description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
        />
        <ExerCard
          id={4}
          level={8}
          lang={["python", "html"]}
          title="python & html"
          module="python training"
          time={120}
          list={isList}
          description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
        />
        <ExerCard
          id={1}
          level={1}
          lang={languages}
          title="name"
          module="python trainee"
          time={30}
          list={isList}
          description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
        />
        <ExerCard
          id={2}
          level={3}
          lang={["html", "css"]}
          title="name"
          module="python trainee"
          time={30}
          list={isList}
          description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
        />
        <ExerCard
          id={3}
          level={6}
          lang={languages}
          title="name"
          module="python trainee"
          time={30}
          list={isList}
          description="Lorem ipsum dolor sit amet consectetur. Quis maecenas tortor id integer sit ante varius malesuada. Suspendisse sed vitae enim enim dolor consectetur viverra. Luctus diam lacus feugiat sit arcu curabitur eget nisi integer. Quam in duis eget habitant et congue morbi felis amet. Sit amet neque suscipit aliquam arcu duis enim. Felis urna aliquam eget sed rhoncus pharetra. Eget volutpat adipiscing et pellentesque. Amet natoque vel nulla magna in vestibulum neque."
        />
      </div>
    </>
  );
}
