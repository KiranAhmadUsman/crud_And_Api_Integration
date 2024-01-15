import instance from "./Instance";
const updateUser = async (id, data) => {
    const response = await instance.put(`/${id}`, data);
    console.log(response);
    if (response.status === 200) {
        return true

    }
    else {
        return false
    }
};
export default updateUser