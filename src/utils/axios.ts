import axios from "axios";

const client = axios.create({baseURL: "https://planfit-fe.vercel.app"})

export default client;