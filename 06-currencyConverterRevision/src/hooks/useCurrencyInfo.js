import { useEffect, useState } from "react";


const useCurrencyInfo =   function(currency){

    const [data, setData] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try{
                const res = await fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)

                const result = await res.json();
                setData(result[currency])
            }
            catch(error){
                console.error("Error in Fetching Data", error)
            }
        }
        


        fetchData()
    }, [currency])
    

    return data;

}

export default useCurrencyInfo