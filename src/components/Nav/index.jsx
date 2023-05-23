import React from "react";
import { data } from "../../data";
import { Link } from 'react-router-dom';

export const Nav = () => {
    return(
        <div style={style}>
            {
                data.map((link, id) => {
                    return <Link key={id} to={link.route}>
                        {link.name}
                    </Link>
                })
            }
        </div>
    )
}

const style ={
    display:"flex",
    flexDirection:"column"
}
    
