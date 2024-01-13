import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useOneGet from "../../hooks/useOneGet";

const GetUser = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    const { data } = useOneGet(`https://659a84a0652b843dea53a3f9.mockapi.io/Crud/${id}`);

    useEffect(() => {
        setUserData(data);
    }, [id, data]);

    return (
        <div className="p-4">
            <h2 className="text-2xl">User Details</h2>
            { userData ? (
                <>
                    <div className="mb-2">
                        <strong>Name:</strong> { userData.Name }
                    </div>
                    <div className="mb-2">
                        <strong>Email:</strong> { userData.Email }
                    </div>
                    <div className="mb-2">
                        <strong>Password:</strong> { userData.Gender }
                    </div>
                    <div className="mb-2">
                        <strong>Country:</strong> { userData.Country }
                    </div>
                    <div>
                        <strong>Is Employed:</strong>{ " " }
                        { userData.isEmployeed ? "Yes" : "No" }
                    </div>
                </>
            ) : (
                <p className="text-red-500">User Not Found</p>
            ) }
        </div>
    );
};

export default GetUser;
