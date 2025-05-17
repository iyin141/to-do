export async function send(data:string) {
    try {
      const response = await fetch('https://to-do-344h.onrender.com/login', {
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
      const response = await fetch('https://to-do-344h.onrender.com/task', {
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
      const response = await fetch('https://to-do-344h.onrender.com/get', {
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
      const response = await fetch('https://to-do-344h.onrender.com/update', {
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
      const response = await fetch('https://to-do-344h.onrender.com/remove', {
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
