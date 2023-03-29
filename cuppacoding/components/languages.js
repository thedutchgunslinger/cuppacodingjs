import LangStyle from "../styles/lang.module.css";

export default function Languages({ lang }) {
  return (
    <div className={LangStyle.container}>
      {lang.map((language) => {
        return <div>{giveIcon(language)}</div>;
      })}
    </div>
  );
}

function giveIcon(lang) {
  switch (lang) {
    case "python":
      return (
        <div className={LangStyle.tooltip}>
          <span className={LangStyle.tooltiptext}>{lang}</span>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.4867 10.531C27.0054 8.59979 26.093 7.14359 24.1493 7.14359H21.6431V10.106C21.6431 12.4059 19.6932 14.3433 17.4682 14.3433H10.7935C8.96851 14.3433 7.45606 15.9058 7.45606 17.737V24.0993C7.45606 25.9117 9.03101 26.9742 10.7935 27.4929C12.9059 28.1116 14.9371 28.2241 17.4682 27.4929C19.1494 27.0054 20.8056 26.0242 20.8056 24.0993V21.5556H14.1371V20.7056H24.1493C26.093 20.7056 26.8117 19.3494 27.4867 17.3182C28.1866 15.2246 28.1554 13.2121 27.4867 10.531ZM17.887 23.2493C18.5807 23.2493 19.1432 23.818 19.1432 24.518C19.1432 25.2242 18.5807 25.7929 17.887 25.7929C17.1995 25.7929 16.6308 25.218 16.6308 24.518C16.637 23.8118 17.1995 23.2493 17.887 23.2493ZM10.4872 13.5059H17.162C19.0182 13.5059 20.4994 11.9747 20.4994 10.1122V3.7437C20.4994 1.93126 18.9744 0.575061 17.162 0.268822C14.9246 -0.0999159 12.4934 -0.0811664 10.4872 0.275071C7.6623 0.775054 7.14982 1.81877 7.14982 3.74995V6.29362H13.8309V7.14359H4.64365C2.69996 7.14359 1.00001 8.3123 0.468782 10.531C-0.143699 13.0746 -0.168698 14.6621 0.468782 17.3182C0.943767 19.2932 2.07498 20.7056 4.01867 20.7056H6.31235V17.6557C6.31235 15.4496 8.21853 13.5059 10.4872 13.5059ZM10.0685 4.59367C9.37475 4.59367 8.81227 4.02494 8.81227 3.32497C8.81851 2.61874 9.37475 2.05001 10.0685 2.05001C10.756 2.05001 11.3247 2.62499 11.3247 3.32497C11.3247 4.02494 10.7622 4.59367 10.0685 4.59367Z"
              fill="black"
              fill-opacity="0.5"
            />
          </svg>
        </div>
      );
    case "html":
      return (
        <div className={LangStyle.tooltip}>
          <span className={LangStyle.tooltiptext}>{lang}</span>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L2.54479 24.7375L13.9635 28L25.4552 24.7375L28 0H0ZM22.4729 7.99375H9.07083L9.36979 11.0813H22.174L21.1823 20.3563L14.0437 22.0438V22.0625H13.9635L6.76667 20.3563L6.32917 15.6187H9.80729L10.0625 18L13.9635 18.9062L17.8792 18L18.3167 14.1125H6.14688L5.21354 5.0125H22.7937L22.4729 7.99375Z"
              fill="black"
              fill-opacity="0.5"
            />
          </svg>
        </div>
      );
    case "css":
      return (
        <div className={LangStyle.tooltip}>
          <span className={LangStyle.tooltiptext}>{lang}</span>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M0 0L2.54479 24.7375L14 28L25.4552 24.7375L28 0H0ZM22.8302 5L22.4802 7.95625L14.0729 11.0375L14.051 11.0437H22.1813L21.2479 20.2062L14.0875 22L6.88333 20.175L6.41667 15.5562H9.98229L10.2156 17.95L14.051 18.7812L18.0396 17.8188L18.3094 13.9688L6.18333 13.9375V13.9312L6.16875 13.9375L5.90625 11.0437L14.0802 8.125L14.5542 7.95625H5.59271L5.16979 5H22.8302Z"
              fill="black"
            />
          </svg>
        </div>
      );
    case "javascript":
      return (
        <div className={LangStyle.tooltip}>
          <span className={LangStyle.tooltiptext}>{lang}</span>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 0H3C1.34375 0 0 1.34375 0 3V25C0 26.6562 1.34375 28 3 28H25C26.6562 28 28 26.6562 28 25V3C28 1.34375 26.6562 0 25 0ZM15.2375 21.8375C15.2375 24.5625 13.6375 25.8062 11.3062 25.8062C9.2 25.8062 7.98125 24.7187 7.35625 23.4L9.5 22.1063C9.9125 22.8375 10.2875 23.4562 11.1938 23.4562C12.0563 23.4562 12.6062 23.1187 12.6062 21.8V12.8562H15.2375V21.8375ZM21.4625 25.8062C19.0187 25.8062 17.4375 24.6437 16.6688 23.1187L18.8125 21.8813C19.375 22.8 20.1125 23.4813 21.4062 23.4813C22.4937 23.4813 23.1938 22.9375 23.1938 22.1812C23.1938 21.2812 22.4812 20.9625 21.275 20.4312L20.6187 20.15C18.7187 19.3437 17.4625 18.325 17.4625 16.1812C17.4625 14.2062 18.9688 12.7063 21.3125 12.7063C22.9875 12.7063 24.1875 13.2875 25.05 14.8125L23 16.125C22.55 15.3188 22.0625 15 21.3062 15C20.5375 15 20.05 15.4875 20.05 16.125C20.05 16.9125 20.5375 17.2313 21.6688 17.725L22.325 18.0063C24.5625 18.9625 25.8188 19.9437 25.8188 22.1437C25.8188 24.5062 23.9562 25.8062 21.4625 25.8062Z"
              fill="black"
              fill-opacity="0.5"
            />
          </svg>
        </div>
      );
    default:
      return (
        <div className={LangStyle.tooltip}>
          <span className={LangStyle.tooltiptext}>{lang}</span>
          <svg
            width="21"
            height="28"
            viewBox="0 0 21 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_25_1079)">
              <path
                d="M3.5 0C1.56953 0 0 1.56953 0 3.5V24.5C0 26.4305 1.56953 28 3.5 28H17.5C19.4305 28 21 26.4305 21 24.5V8.75H14C13.032 8.75 12.25 7.96797 12.25 7V0H3.5ZM14 0V7H21L14 0ZM8.36719 15.8047L6.67188 17.5L8.36719 19.1953C8.88125 19.7094 8.88125 20.5406 8.36719 21.0492C7.85313 21.5578 7.02187 21.5633 6.51328 21.0492L3.88281 18.4297C3.36875 17.9156 3.36875 17.0844 3.88281 16.5758L6.50781 13.9508C7.02187 13.4367 7.85312 13.4367 8.36172 13.9508C8.87031 14.4648 8.87578 15.2961 8.36172 15.8047H8.36719ZM14.4922 13.9453L17.1172 16.5703C17.6312 17.0844 17.6312 17.9156 17.1172 18.4242L14.4922 21.0492C13.9781 21.5633 13.1469 21.5633 12.6383 21.0492C12.1297 20.5352 12.1242 19.7039 12.6383 19.1953L14.3336 17.5L12.6383 15.8047C12.1242 15.2906 12.1242 14.4594 12.6383 13.9508C13.1523 13.4422 13.9836 13.4367 14.4922 13.9508V13.9453Z"
                fill="black"
                opacity="0.5"
              />
            </g>
            <defs>
              <clipPath id="clip0_25_1079">
                <rect width="21" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      );
  }
}
