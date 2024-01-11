import { useState } from 'react';

const usePost = (url) => {
    const [successMessage, setSuccessMessage] = useState('');

    const postData = async (data, resetdata, setData, message) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setData(resetdata)
                setSuccessMessage(message);
                setTimeout(() => {
                    setSuccessMessage('');
                }, 2000);
            } else {
                console.error('Failed to post data.');
                console.error(await response.text());
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return {
        successMessage,
        postData,
    };
};

export default usePost;
