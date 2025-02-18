import st from "./TaskItem.module.scss";
import more from "../../assets/more.svg";
import person from "../../assets/person.svg";
import deadline from "../../assets/deadline.svg";
import { useDrag } from "react-dnd";
import classNames from "classnames";
import { priorityClassName } from "../../utills";

export default function TaskItem({ task }) {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id: task.id },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div
      ref={drag}
      className={classNames(st.root, isDragging ? st.drag : null)}
    >
      <div className={st.task}>
        <div className={st.header}>
          <div className={st.projectName}>{task.project}</div>
          <div className={st.menu}>
            <img src={more} alt="" />
          </div>
        </div>
        <div className={st.title}>{task.name}</div>
        <div className={st.description}>
          {task.description} diverse experience into play.
        </div>
        <div className={st.labels}>
          <div
            className={classNames(
              st.label,
              st[priorityClassName[task.priority]]
            )}
          >
            {task.priority}
          </div>
        </div>
        <div className={st.footer}>
          <div className={st.deadline}>
            <img src={deadline} alt="" />
            {task.dateTime}
          </div>
          <div className={st.lead}>
            <img src={person} alt="" />
            {task.assignee}

            {/* <span>Json Statham</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
