const REQ_API = 'http://www.mocky.io/v2/5b0054dc3100009f0076df29';
const PUT_API = 'https://www.mocky.io/v2/5a42648f300000201b709dfd';

export async function getListData(){
  try {
    const data = await fetch(REQ_API);
    return {data: await data.json()};
  }
  catch(e) {
    return {error: e.message}
  }
}

export async function setNewStatus(data){
  try {
    const data = await fetch(PUT_API, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    return {data: await data.json()};
  }
  catch(e) {
    return {error: e.message}
  }
}