import React, {useContext} from 'react';
import {SWContexr} from "../utils/context.js";

const NavItem = ({itemTitle}) => {
    const {changePage} = useContext(SWContexr);
    return (
        <li onClick={() => changePage(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
    );
};

export default NavItem;