import classes from "./Mainframe.module.css"

function Mainframe(props) {
    return(
        <div className={classes.frame}>
            {props.children}
        </div>
    )
}

export default Mainframe;