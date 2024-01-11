import { useState } from 'react';

const useDelete = (url, data, setData) => {
    const [successMessage, setSuccessMessage] = useState('');
    const deleteData = async (id, message) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                const newDataArray = data.filter(item => item.id !== id);
                setData(newDataArray);
                setSuccessMessage(message);
                setTimeout(() => {
                    setSuccessMessage('');
                }, 2000);
            } else {
                console.error('Failed to delete data.');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return {
        successMessage,
        deleteData,
    };
};

export default useDelete;
