import React from 'react'
import "./customButton.scss";
export default function CustomButton({btn, children}) {
    return (
        <button className={btn}>{children}</button>
    )
}
