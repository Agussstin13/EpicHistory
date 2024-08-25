const backendUrl = "http://localhost:8080/";

export default async function Get(endPoint, data){
    const params = '?' + new URLSearchParams(data).toString();
    return await fetch(backendUrl + endPoint + params, {
        method: 'get',
        mode: 'cors',
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err)=>console.log(err));
}