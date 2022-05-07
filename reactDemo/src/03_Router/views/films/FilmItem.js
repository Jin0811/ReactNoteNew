import { withRouter } from "react-router-dom";

const FilmItem = (props) => {
  // 点击事件
  const handleClick = () => {
    console.log(props);
    props.history.push(`/detail/${props.filmInfo.filmId}`);
  };

  return (
    <div className='film-item' key={props.filmInfo.filmId} onClick={handleClick}>{ props.filmInfo.name }</div>
  );
};

export default withRouter(FilmItem);

/**
 * 这里FilmItem是NowPlaying的子组件，也就是说，FilmItem是Router的孙子组件，是拿不到props.history
 * 
 * 解决方案：
 * 1、从NowPlaying当中往下传递，缺点是如果层级很多，需要一层一层往下传递，很麻烦
 * 2、withRouter，使用withRouter来包裹一下FilmItem，withRouter可以帮助我们跨级传递props.history
 */