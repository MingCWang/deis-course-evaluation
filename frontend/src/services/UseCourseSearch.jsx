import { useEffect, useState } from 'react';

const process = import.meta.env;

export default function UseCourseSearch(course, page) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [hasmore, setHasmore] = useState(true);
    const [loading, setLoading] = useState(true);

    function storeData(retrievedData) {
        setData((prevData) => [...prevData, ...retrievedData]);
    }

    useEffect(() => {
        setData([]);
    }, [course]);

    useEffect(() => {
        setLoading(true);
        fetch(
            `${process.VITE_BASE_URL}api/courses?course=${course}&page=${page}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        )
            .then((res) => res.json())
            .then((res) => {
                if (!res.error) {
                    console.log(`retrieved course data`);
                    storeData(res.courses);
                    setHasmore(res.hasmore);
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.log(err);
                setError(true);
            });
    }, [course, page]);

    return { data, error, loading, hasmore };
}
