import { env } from "process";
import dotenv from 'dotenv'; 


const axios = require('axios').default;
dotenv.config();

export async function getInfo() {
    try {
        const response = await axios.get("http://localhost:3000");
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
}