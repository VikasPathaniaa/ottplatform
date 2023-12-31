import { useEffect, useState } from "react";
import { fetchRequest } from "../utils/api";
const useFetch = (url:string) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState<string | null | boolean>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        fetchRequest(url)
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch((_err:any) => {
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
