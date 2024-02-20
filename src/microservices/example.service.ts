//In this example, we'll be interacting with a fake todo list service to illustrate
//how to create a front end api that connects to a backend service.
//https://jsonplaceholder.typicode.com/
//https://www.bezkoder.com/react-typescript-axios/

import axios from "axios";
import IExampleData from "../ts/IExampleData"; //We need an interface to type our data

//First, we need to initialize an axios instance that will connect to the backend
const ExampleClient = axios.create({ //replace <example> with your service name, like "account"
  baseURL: "https://jsonplaceholder.typicode.com/", //the backend url
  headers: {
    "Content-type": "application/json"
  }
});

//Next, we will define the fronted API that we'll use in our code to send requests to backend
async function getAll() {
    let response = await ExampleClient.get<Array<IExampleData>>("/todos");
    return response.data;
}

async function get(id: string) { //get one (by id)
    return await ExampleClient.get<IExampleData>(`/todos/${id}`);
}

async function create(data: IExampleData) { //create one
    return await ExampleClient.post<IExampleData>("/todos", data);
}

async function update(data: IExampleData, id: any) { //update one (by id)
    return await ExampleClient.put<any>(`/todos/${id}`, data);
}

//You can add any other methods that you think would help, just see what is
//available to you on the backend and read up on HTTP requests.

const example = {
    getAll,
    get,
    create,
    update
}

export default example;
//Now our service is ready to be used in components!

