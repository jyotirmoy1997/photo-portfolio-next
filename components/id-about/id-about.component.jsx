import classes from "./id-about.module.css"

const IDAbout = ({name, aboutString, socialHandles}) => {
    return (
        <div className={classes.id_about}>
            <h1>{name}</h1>
            <p>{aboutString}</p>
        </div>
    )
}

export default IDAbout