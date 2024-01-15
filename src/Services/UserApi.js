import instance from "./Instance";
// -------------Post User--------------
export const CreateUser = async (data) => {
    const response = await instance.post("/", data);
    console.log(response);
    return response.status

};
//--------------Get All User------------
export const GetAllData = async () => {
    try {
        const response = await instance.get();
        return response.data
    } catch (error) {
        console.error(error);
    }
};
// -------------deleteUser------------
export const deleteUser = async (id) => {
    try {
        const deleteRes = await instance.delete(id);
        return deleteRes;
    } catch (error) {
        console.error(error);
    }
};
//---------------Get Single User----------
export const getOneUser = async (id) => {
    const response = await instance.get(id);
    return response.data
};
//----------------- Update User---------
export const updateUser = async (id, data) => {
    const response = await instance.put(`/${id}`, data);
    return response
};
