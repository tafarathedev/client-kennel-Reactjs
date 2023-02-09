import React  from "react"
import axios from "axios"


export default function useFetchAxios(url){

    const [data,setData] = React.useState(null)
    const [error,setError] = React.useState(null)
    const [loading,setLoading] = React.useState(false)

    React.useEffect(() => {
        return async function(){
                try{
                    setLoading(true)
                    const res = await axios.get(url,{mode:"cors", headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        "Access-Control-Allow-Origin": true,
                        "Access-Control-Allow-Credentials": true,
                    }})
                    setData(res.data)
                }catch(err){
                    setError(err)
                }finally{
                    setLoading(false)
                }
            }
        
    }, [url])

    return { data, error, loading }

}