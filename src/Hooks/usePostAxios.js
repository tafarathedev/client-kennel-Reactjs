import React  from 'react'
import axios from  'axios'
export default function usePostAxios(url, payload){
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null)
    const [loading, setLoaded] = React.useState(false);
  
    React.useEffect(() => {
      (async () => {
        try {
          const res = await axios.post(url,payload, {mode:"cors" , headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": true,
            "Access-Control-Allow-Credentials": true,
        }})
          setData(res.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoaded(true);
        }
      })();
    }, []); 
  
    return { data, error, loading };
  };
  