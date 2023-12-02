import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/common/Spinner';
import { VideoCard } from '../components/common/VideoCard';
import VideoPopUp from '../components/videoPopUp/VideoPopUp';
import useFetch from '../hooks/useFetch';
import { fetchRequest } from '../utils/api';

const Search = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const { query } = useParams();

    const [show, setShow] = useState(false);
    const [vidId, setVidId] = useState(0);
    const { data: videoData, loading: vidLoading } = useFetch(`/movie/${vidId}/videos`);

    useEffect(() => {
        setVidId(vidId)
    }, [vidId])

    const videoKey = videoData?.results?.[0]?.key;

    const fetchInitialData = () => {
        setLoading(true);
        fetchRequest(`/search/multi?query=${query}`).then(
            (res) => {
                setData(res);
                setLoading(false);
            }
        );
    };
    useEffect(() => {
        fetchInitialData()
    }, [query])


    if (loading) {
        return (
            <div className='flex justify-center h-[100vh] items-center'>
                <Spinner />
            </div>
        );
    }

    return (

        <div>
            <div className="flex justify-between items-center mx-12">
                <h2 className="font-bold ml-3 text-2xl my-3"> Search  </h2>

            </div>
            {
                !show ? (<> <div className="grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-5">
                    {data && data?.results.length > 0 ?
                        data?.results?.map((item: any) => {
                            return <VideoCard data={item} setVidId={setVidId} setShow={setShow} />;
                        }) : <div className="grid place-items-center">
                            <div>No Matched Data</div>
                        </div>}
                </div> </>) : (<>
                    <VideoPopUp show={show} setShow={setShow} videoId={videoKey} setVideoId={setVidId} loading={vidLoading} /></>)
            }

        </div>
    );
}

export default Search;
