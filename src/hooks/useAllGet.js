import { useState, useEffect } from 'react';

const useGet = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                });

                if (response.ok) {
                    const responseData = await response.json();
                    setData(responseData);
                } else {
                    console.error('Failed to get data.');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [url]);
    return {
        data,
    };
};

export default useGet;
