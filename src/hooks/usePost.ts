
import axios from "axios";
import { useState, useEffect } from 'react';

const usePost = <T>(url: string) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [data, setData] = useState<T>();

    const postData = async (body: T) => {
        try {
            setLoading(true);
            const response = await axios.post<T>(url, body);
            const dataApi = response.data;
            setData(dataApi);
        }
        catch (error: unknown) {
            let errorMessage = "Ha ocurrido un error inesperado";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            setError(errorMessage);

        } finally {
            setLoading(false);
        }
        return data

    }

   /*  useEffect(() => {
        postData();
    }, [])

 */
    return { loading, error, postData }

    

    }

export default usePost