export async function send(data:string) {
    try {
      const response = await fetch('http://localhost:5001/login', {
        method: 'Post',
        headers: {
          'Content-type': 'application/json'
          
        },
          body: JSON.stringify({ token:  data })
      })
      const result = await response.json();
      if (result.message !== "success") {
        console.log(result)
      }
      else {
        return {token : result.user , uid : result.uid}
      }
    }
    
    catch (error) {
      alert(error)
    }

  }

  export async function send_2(data:object) {
    try {
      const response = await fetch('http://localhost:5001/task', {
        method: 'Post',
        headers: {
          'Content-type': 'application/json'
          
        },
        body: JSON.stringify(data)
      })
      const result = await response.json();
      
        return result;
   
     
    }
    
    catch (error) {
      alert(error)
    }

  }


  
  export async function get(uid:string) {
    try {
      const response = await fetch('http://localhost:5001/get', {
        method: 'Post',
        headers: {
          'Content-type': 'application/json'
          
        },
        body: JSON.stringify({ uid })
      })
      const result = await response.json();
      
        return result;
   
     
    }
    
    catch (error) {
      alert(error)
    }

  }


    
  export async function update(data:object) {
    try {
      const response = await fetch('http://localhost:5001/update', {
        method: 'Post',
        headers: {
          'Content-type': 'application/json'
          
        },
        body: JSON.stringify(data)
      })
      const result = await response.json();
      return result;
   
     
    }
    
    catch (error) {
      alert(error)
    }

  }


  export async function remove(id:string,uid:string) {
    try {
      const response = await fetch('http://localhost:5001/remove', {
        method: 'Post',
        headers: {
          'Content-type': 'application/json'
          
        },
        body: JSON.stringify({id:id,Uid:uid})
      })
      const result = await response.json();
      return result;
   
     
    }
    
    catch (error) {
      alert(error)
    }

  }
