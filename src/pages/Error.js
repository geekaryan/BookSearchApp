import { useNavigate } from "react-router-dom";
import styles from "./../components/Subjects.module.css";
const Error = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("..");
  };
  return (
    <div style={{ marginLeft: "2rem" }}>
      <h1>Some of the data is missing from backend.. </h1>
      <button onClick={backHandler} className={styles.Btn}>
        Back
      </button>
    </div>
  );
};

export default Error;
