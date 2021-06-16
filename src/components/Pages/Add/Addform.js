import {useRef} from "react"
import style from "./Addform.module.css";

function Addform(props) {
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const textInputRef = useRef()


    function createObject() {
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredText = textInputRef.current.value;

        const readyObj = {
            title: enteredTitle,
            image: enteredImage,
            text: enteredText
        }

        props.saveIntoBase(readyObj)
    }

    return(
        <form className={style.form} onSubmit={createObject}>
            <label htmlFor="id_title">Заголовок</label>
            <input type = "text" required className={style.input} id="id_title" ref = {titleInputRef}/>
            <label htmlFor="id_img">Ссилка на фото</label>
            <input type = "url" required className={style.input} id="id_img" ref = {imageInputRef} />
            <label htmlFor="id_text">Текст</label>
            <textarea type = "text" required rows="5" className={style.input} id="id_text" ref = {textInputRef} />
            <div className={style.btn_div}>
                <button className={style.btn}>Відправити</button>
            </div>
        </form>
    )
}

export default Addform;