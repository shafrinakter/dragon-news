import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import LeftNews from "./leftNews/LeftNews";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="">
            <h1 className="text-2xl  text-[#403F3F] font-bold p-2">All Caterogy</h1>

            {
                categories.map(category =>
                    <NavLink
                        className='block  p-4 '
                        key={category.id}
                        to="/messages"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : " ",
                                color: isPending ? "red" : "gray",
                            };
                        }}
                    >
                        {category.name}
                    </NavLink>
                   

                )
            }
            <LeftNews></LeftNews>
        </div>
    );
};

export default LeftSideNav;