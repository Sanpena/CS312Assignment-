import fetch from "node-fetch";

export const hello = () => {
    return "Hello World!";
};

export const names = async () =>{
    let data;
    const url = "https://www.usemodernfullstack.dev/api/v1/users"

    try{
        const response = await fetch(url);
        data = await response.json();

    } catch (error){
        console.error(`Error : ${error}`)
    }

    return data
    .map(user => `id: ${user.id}, name: ${user.name}`)
    .join("<br>");
};