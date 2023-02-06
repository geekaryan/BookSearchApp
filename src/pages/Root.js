import { Outlet } from "react-router-dom";
import Subject from "../components/Subjects";

const Root = () => {
  return (
    <div style={{ display: "flex" }}>
      <Subject />
      <main style={{ borderLeft: "2px solid black", height: "100%" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
