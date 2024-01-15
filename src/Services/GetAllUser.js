import instance from "./Instance";
const GetAllData = async () => {
    try {
        const response = await instance.get();
        return response.data
    } catch (error) {
        console.error(error);
    }
};
export default GetAllData