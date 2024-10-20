import React from "react";
import style from "./Suduko.module.css";

function Suduko() {
  //adding useState hooks

  let [div1, setDiv1] = React.useState(false);
  let [div2, setDiv2] = React.useState(false);
  let [div3, setDiv3] = React.useState(false);
  let [div4, setDiv4] = React.useState(false);
  let [div5, setDiv5] = React.useState(false);
  let [div6, setDiv6] = React.useState(false);
  let [div7, setDiv7] = React.useState(false);
  let [div8, setDiv8] = React.useState(false);
  let [div9, setDiv9] = React.useState(false);
  return (
    <>
      <div className={style.main_container}>
        <div
          className={style.box}
          onClick={() => {
            setDiv1(true);
          }}
        >
          {div1 && "hello"}
        </div>
        <div
          className={style.box}
          onClick={() => {
            setDiv2(true);
          }}
        >
          {div2 && "hello"}
        </div>
        <div
          className={style.box}
          onClick={() => {
            setDiv3(true);
          }}
        >
          {div3 && "hello"}
        </div>
        <div className={style.box}></div>
        <div className={style.box}></div>
        <div className={style.box}></div>
        <div className={style.box}></div>
        <div className={style.box}></div>
        <div className={style.box}></div>
      </div>
    </>
  );
}

export default Suduko;
