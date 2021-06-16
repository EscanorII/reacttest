import classes from "./Template.module.css";
import Mainframe from "../Frames/Mainframe/Mainframe";



function Template(props) {
    return(<Mainframe>
            <h1>{props.title}</h1>
            <div className={classes.div_image}>
                <img className={classes.image} alt = "wolf" src={props.img}/>
            </div>
            <p>{props.text}</p>
            <div className={classes.btns}>
                <button className={classes.btn1}>Like</button>
                <button className={classes.btn2}>Dislike</button>
                <button className={classes.btn3}>To favorite</button>
            </div>
        </Mainframe>
)
}

export default Template;