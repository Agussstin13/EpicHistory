const backendUrl = "http://localhost:8080/";

export default async function Post(endPoint, data){
    return await fetch(backendUrl + endPoint, {
        method: 'POST',
        mode: 'cors',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err)=>console.log(err));
}