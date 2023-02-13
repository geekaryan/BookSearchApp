import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("..");
  };
  return (
    <div>
      <p
        style={{
          textAlign: "center",
          fontFamily: "monospace",
          fontSize: "3rem",
        }}
      >
        Something went wrong...
      </p>
      <button onClick={backHandler}>Back</button>
    </div>
  );
};

export default Error;
