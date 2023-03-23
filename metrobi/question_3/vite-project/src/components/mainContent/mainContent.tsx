import style from "./mainContent.module.scss";

export default function MainContent() {
  return (
    <div className={style.mainContentContainer}>
      <div className={style.text}>
        <h1>Main Content</h1>
        <p>
          ** If thing do not look right, make sure your browser is in
          "Experimental Mode".
        </p>
      </div>
    </div>
  );
}
