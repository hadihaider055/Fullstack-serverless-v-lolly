import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import LollyTemplate from "../templates/lollyTemplate";
import Spinner from "../components/Spinner";
import { getLolly } from '../graphql/queries'
import { API } from 'aws-amplify'

interface LollyDataType {
    data: {
        getLolly: [
            {
                id: string
                recipientName: string
                senderName: string
                message: string
                colorTop: string
                colorBottom: string
                colorMiddle: string
            }
        ]
    }
}


const VLolly = ({ location }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lollyData, setLollyData] = useState<LollyDataType | null>(null);
    const path = location.pathname.replace("/v_lolly/", "");

    const fetchLolly = async () => {
        try {
            const data = await API.graphql({
                query: getLolly,
                variables: {
                    id: path
                }
            })
            setLollyData(data as LollyDataType)
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchLolly();
    }, [])


    if (error) {
        return (
            <h1 className="font-nunito absolute top-2/4 left-2/4 mt-16 -ml-10 text-2xl text-gray-200">
                Something went wrong. Please try again later.
            </h1>
        );
    }
    if (loading) {
        return (
            <>
                <Spinner
                    width="w-24"
                    height="h-24"
                    display="absolute top-2/4 left-2/4"
                    marginLeft="-ml-12"
                    marginTop="-mt-12"
                />
                <h1 className="font-nunito absolute top-2/4 left-2/4 mt-16 -ml-10 text-2xl text-gray-200">
                    Loading...
                </h1>
            </>
        );
    }
    return (
        <div>
            <Router basepath="/v_lolly">
                <LollyTemplate
                    pageContext={lollyData.data.getLolly}
                    path={`/${path}`}
                />
            </Router>
        </div>
    );
};

export default VLolly;