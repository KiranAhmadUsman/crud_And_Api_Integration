import instance from "./Instance";
const deleteUser = async (id) => {
    try {
        const deleteRes = await instance.delete(id);
        const getRes = await instance.get();
        const data = getRes.data.filter((item) => deleteRes.id !== item.id)
        return data;
    } catch (error) {
        console.error(error);
    }
};
export default deleteUser;