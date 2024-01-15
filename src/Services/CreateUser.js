import instance from "./Instance";
const CreateUser = async (data) => {
    const response = await instance.post("/", data);
    console.log(response);
    return response.status

};
export default CreateUser;