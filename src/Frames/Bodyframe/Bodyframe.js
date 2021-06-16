import style from "./Bodyframe.module.css";

function Bodyframe(props) {
    return (
        <div className={style.frame}>
            {props.children}
        </div>
    )
}

export default Bodyframe;