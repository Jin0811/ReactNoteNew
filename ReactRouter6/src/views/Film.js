import { Outlet } from "react-router-dom";

const Film = () => {
  return (
    <div className="film">
      <h1>Film</h1>

      <div className="banner">
        <h2>轮播区域</h2>
      </div>

      <div className="tab-container">
        
      </div>

      {/* 路由容器，类似于vue的router-view */}
      <div className="outlet-container">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Film;