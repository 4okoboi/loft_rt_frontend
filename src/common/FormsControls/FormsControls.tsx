import React from "react";
import classes from "./FormsControls.module.css"

/*const FormControl = ({input, meta, children, ...props}) => {
    console.log(input)
    console.log(meta)
    console.log(children)
    console.log(props)
    const hasError = meta.touched && meta.error;
    return (
        <div className = {classes.formControl + (hasError ? classes.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}*/

export const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <Element {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};