import axios from "axios";

axios.defaults.baseURL = "https://65fdee5db2a18489b3859b8f.mockapi.io/task";

export const fetchToDo = async ()=>{
    const res = await axios.get("/");
    return res.data
}

export const createToDo = async (data)=>{
    const res = await axios.post("/", data);
    return res.data;
}
export const delToDo = async (toDoID)=>{
    const res = await axios.delete(`/${toDoID}`);
    return res.data;
}