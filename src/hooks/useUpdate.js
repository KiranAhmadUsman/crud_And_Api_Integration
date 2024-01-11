const useUpdate = (url) => {
    const updateData = async (data) => {
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                return true;
            } else {
                console.error('Failed to update data.');
                return false;
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    return {
        updateData,
    };
};

export default useUpdate;
