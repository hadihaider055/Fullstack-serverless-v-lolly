import { Link } from "gatsby";
import React from "react";
import Header from "../components/Header";
import Lolly from "../components/Lolly";

const LollyTemplate = ({ pageContext }) => {
    return (
        <div className="max-w-4xl w-full mx-auto overflow-x-hidden">
            <Header />
            <div className="mt-20 md:-ml-40">
                <div className="flex flex-col md:flex-row items-center justify-center -ml-10 md:ml-2">
                    <div className="mx-auto text-center w-full">
                        <Lolly
                            fillLollyTop={pageContext.colorTop}
                            fillLollyBottom={pageContext.colorBottom}
                            fillLollyMiddle={pageContext.colorMiddle}
                            lollyWidth={500}
                            lollyHeight={500}
                        />
                    </div>
                    <div className=" max-w-md md:max-w-xl mx-auto">
                        <h1 className="text-gray-300 font-lato font-semibold text-center mt-6 md:mt-0 text-lg">
                            Enjoy your lolly! Share it with this link:
                        </h1>
                        <div className="bg-black max-w-md md:max-w-xl w-full text-pink-400 py-4 px-2 text-center text-md font-roboto tracking-wider mt-6 shadow-lg rounded-md box-shadow">
                            https://jamstack-virtual-lolly.netlify.app/v_lolly/
                            {pageContext.id}
                        </div>
                        <div className="mt-6 bg-gray-800 p-7 rounded-md box-shadow shadow-lg max-w-md md:max-w-xl w-full max-h-72 h-full text-gray-300 mb-3">
                            <h1 className="font-pacifico text-3xl italic m-4 mb-8">
                                {pageContext.recipientName}
                            </h1>
                            <p className="font-georama my-3 text-xl">{pageContext.message}</p>
                            <h1 className="font-pacifico text-3xl italic m-8 ml-8">
                                ___ {pageContext.senderName}
                            </h1>
                        </div>
                        <div>
                            <p className="text-gray-400 font-semibold font-nunito text-center text-md break-words my-8">
                                {pageContext.sender} made this virtual lollipop for you. You can{" "}
                                <Link
                                    to="/create"
                                    className="border-b-2 border-pink-400 text-gray-200 hover:border-white hover:text-white transition-all duration-500 ease-in-out"
                                >
                                    {" "}
                                    make your own
                                </Link>{" "}
                                to send to a friend who deserve some sugary treat which won't
                                rot their teeth...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LollyTemplate;