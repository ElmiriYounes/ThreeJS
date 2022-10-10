import React from "react";
import { Item, Items } from "./Navbar.styles";
import {BiBody} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import {GiRunningShoe,GiCube} from 'react-icons/gi'
import { Link } from "react-router-dom";

const items = [{icon:<AiFillHome/>,path:'/ThreeJS'},{icon:<BiBody/>,path:'/ThreeJS/skin'},{icon:<GiCube/>,path:'/ThreeJS/cube'},{icon:<GiRunningShoe/>,path:'/ThreeJS/shoe'}]

const Navbar = () => {
  return <Items>
    {items.map((item, index)=>(
      <Link key={index} to={item.path}>
        <Item>
            {item.icon}
        </Item>
      </Link>
    ))}
  </Items>;
};

export default Navbar;
