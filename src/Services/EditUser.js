import instance from "./Instance";
const getOneUser = async (id) => {
    const response = await instance.get(id);
    return response.data
};
export default getOneUser