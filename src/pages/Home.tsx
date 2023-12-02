import { useState } from 'react';
import GenersSection from '../components/common/GenersSection';
import Spinner from '../components/common/Spinner';
import VideoPopUp from '../components/videoPopUp/VideoPopUp';
import useFetch from '../hooks/useFetch';

const Home = () => {
    const { data: trendingData, loading: trendingLoading } = useFetch('/trending/movie/day');
    const { data: popularData } = useFetch('/movie/popular');
    const { data: topRatedData } = useFetch('/movie/top_rated');
    const [show, setShow] = useState(false);
    const [vidId, setVidId] = useState(0);
    const { data: videoData , loading } = useFetch(`/movie/${vidId}/videos`);

    const videoKey = videoData?.results?.[0]?.key;

    console.log("v" , trendingData)
    if (trendingLoading) {
        return (
            <div className='flex justify-center h-[100vh] items-center'>
                <Spinner />
            </div>
        );
    }

    return (
        <div className='mt-11'>
            {!show ? (
                <>
                    <GenersSection
                        title={'Top Rated'}
                        setShow={setShow}
                        setVidId={setVidId}
                        value={topRatedData?.results}
                    />
                    <GenersSection
                        title={'Trending content'}
                        setShow={setShow}
                        setVidId={setVidId}
                        value={trendingData?.results}
                    />
                    <GenersSection
                        title={'Popular'}
                        setShow={setShow}
                        setVidId={setVidId}
                        value={popularData?.results}
                    />
                </>
            ) : (
                <VideoPopUp
                    show={show}
                    setShow={setShow}
                    videoId={videoKey}
                    setVideoId={setVidId}
                    loading={loading}
                />
            )}
        </div>
    );
};

export default Home;
