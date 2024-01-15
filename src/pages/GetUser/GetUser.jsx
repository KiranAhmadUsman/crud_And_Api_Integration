import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneUser } from "../../Services/UserApi";

const GetUser = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const getOneEditUser = async () => {
            const data = await getOneUser(id);
            setUserData(data);
        }
        getOneEditUser()
    }, []);

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
