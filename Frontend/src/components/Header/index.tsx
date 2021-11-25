import React from "react";
import { Link } from "gatsby";

const Header = () => {
    return (
        <div className="text-center mt-14 mx-auto">
            <h1 className="text-white text-7xl font-pacifico main__heading leading-loose">
                <Link to="/">Virtual Lollipop</Link>
            </h1>
            <p className="text-gray-100 text-shadow font-lato tracking-wider font-semibold text-lg">
                because we all know someone
            </p>
            <p className="text-gray-100 text-shadow font-lato tracking-wider font-semibold text-lg">
                who deserves some sugar.
            </p>
        </div>
    );
};

export default Header;