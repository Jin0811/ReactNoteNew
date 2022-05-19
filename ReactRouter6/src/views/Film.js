import { Outlet } from "react-router-dom";

const bannerStyle = {
  width: "400px",
  height: "200px",
  background: "#f1f1f1",
  borderRadius: "5px",
  margin: "20px 0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const tabContainerStyle = {
  width: "400px",
  padding: "10px",
  border: "1px solid #ccc",
  marginBottom: "20px",
  boxSizing: "border-box"
};
const outletContainerStyle = {
  width: "400px",
  padding: "10px",
  border: "1px solid #ccc",
  boxSizing: "border-box"
};

const Film = () => {
  return (
    <div>
      <h1>Film</h1>

      <div style={{ ...bannerStyle }}>
        <h2>轮播区域</h2>
      </div>

      <div style={{ ...tabContainerStyle }}>

      </div>

      {/* 路由容器，类似于vue的router-view */}
      <div style={{ ...outletContainerStyle }}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Film;