export async function veryGood(params){

    const responce=await fetch(`http://localhost:8080/use/${params}`,{
        method:"GET"
    });
    if(!responce.ok){
        throw{
            message:"doesn't work",
            status:responce.status
        };
    }
return responce.json();
    console.log(responce.json());
}