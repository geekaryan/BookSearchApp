import { Link, useNavigate } from "react-router-dom";
import styles from "./Subjects.module.css";

const Subject = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("..");
  };
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.heading}>Trending Subjects</p>
      </div>
      <div>
        <p className={styles.list}>
          <Link to="Javascript">Javascirpt</Link>
        </p>
        <p className={styles.list}>
          <Link to="HarryPotter">Harry Potter</Link>
        </p>
        <p className={styles.list}>
          <Link to="IndianHistory">Indian History</Link>
        </p>
        <p className={styles.list}>
          {" "}
          <Link to="Crypto">Crypto</Link>
        </p>
      </div>
      <button onClick={backHandler} className={styles.Btn}>
        Back
      </button>
    </div>
  );
};

export default Subject;
