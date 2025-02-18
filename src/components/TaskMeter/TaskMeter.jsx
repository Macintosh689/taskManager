import st from "./TaskMeter.module.scss";
import star from "../../assets/star.svg";
export default function TaskMeter() {
  return (
    <div className={st.root}>
      <div className={st.topRow}>
        <p>Task Meter</p>
        <p>
          <span className={st.complete}>25</span>/50
        </p>
      </div>
      <div className={st.bottomRow}>
        <div className={st.progress}>
          <div className={st.progressBar}></div>
        </div>
        <div className={st.status}>
          <img src={star} alt="Star icon" className={st.star} />
          Good Job!
        </div>
      </div>
    </div>
  );
}
