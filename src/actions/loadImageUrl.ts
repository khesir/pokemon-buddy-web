"use server"

export async function LoadUrl(url : string){
    const data = await fetch(url);
    const response = await data.json();
    return response;
}