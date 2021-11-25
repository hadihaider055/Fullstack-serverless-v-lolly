import React from "react";

interface types {
    width: string;
    height: string;
    display: string;
    marginTop: string;
    marginLeft: string;
}

const Spinner: React.FC<types> = ({
    width,
    height,
    marginLeft,
    marginTop,
    display,
}) => {
    return (
        <>
            <svg
                className={`spinner ${width} ${height} ${marginTop}  ${marginLeft}  ${display}`}
                viewBox="0 0 50 50"
            >
                <circle
                    className="path"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="5"
                ></circle>
            </svg>
        </>
    );
};

export default Spinner;