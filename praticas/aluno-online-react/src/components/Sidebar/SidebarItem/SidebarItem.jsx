import React from "react";

function SidebarItem (props) {
    return (
        <li>
            <button onClick={props.acao}>
                {props.texto}
            </button>
        </li>
    )
}

export default SidebarItem;