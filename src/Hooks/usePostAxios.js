import React  from 'react'
import axios from  'axios'
export default function usePostAxios(url, payload){
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null)
    const [loading, setLoaded] = React.useState(false);
  
    React.useEffect(() => {
      (async () => {
        try {
          const res = await axios.post(url,payload)
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
  