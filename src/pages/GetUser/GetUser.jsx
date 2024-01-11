import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useOneGet from "../../hooks/useOneGet";

const GetUser = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    const { data } = useOneGet(`https://659a84a0652b843dea53a3f9.mockapi.io/Crud/${id}`);
    useEffect(() => {
        setUserData(data)
    }, [id, data]);
    return (
        <div>
            <h2>User Details</h2>
            { userData ? (
                <>
                    <div>
                        Name:{ userData.Name }
                    </div>
                    <div>
                        Email:{ userData.Email }
                    </div>
                    <div>
                        Password:{ userData.Gender }
                    </div>
                    <div>
                        Country:{ userData.Country }
                    </div>
                    <div>
                        isEmployeed:{ userData.isEmployeed ? "Yes" : "NO" }
                    </div>
                </>
            ) : (
                <p>User Not Found</p>
            ) }
        </div>
    );
};

export default GetUser;
