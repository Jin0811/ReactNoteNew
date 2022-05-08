import { withRouter } from "react-router-dom";

const FilmItem = (props) => {
  // 点击事件
  const handleClick = () => {
    props.history.push(`/detail/${props.filmInfo.filmId}`);
  };

  return (
    <div className='film-item' key={props.filmInfo.filmId} onClick={handleClick}>{ props.filmInfo.name }</div>
  );
};

export default withRouter(FilmItem);