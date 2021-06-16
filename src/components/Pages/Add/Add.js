import Bodyframe from "../../../Frames/Bodyframe/Bodyframe";
import Mainframe from "../../../Frames/Mainframe/Mainframe";
import Addform from "./Addform";

function  Add() {
    function saver(readyObj) {
        fetch("https://like-or-dislike-fb001-default-rtdb.europe-west1.firebasedatabase.app/",
            {
                method:"POST",
                body: JSON.stringify(readyObj),
                headers: {
                    "Content-Type": 'application/json'
                }
            }
            );
    }
    return(
        <Bodyframe>
            <Mainframe>
                <Addform saveIntoBase={saver}/>
            </Mainframe>
        </Bodyframe>
    )
}

export default Add;