import { Option, Select } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { VideoCard } from "../components/common/VideoCard";
import VideoPopUp from "../components/videoPopUp/VideoPopUp";
import useFetch from "../hooks/useFetch";
import { fetchRequest } from "../utils/api";

let filters: any = {};
const AllVideos = () => {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<any>([]);
  const { data: genresData }: any = useFetch(`/genre/movie/list`);
  const [show, setShow] = useState(false);
  const [vidId, setVidId] = useState(0);
  const { data: videoData ,loading:vidLoading } = useFetch(`/movie/${vidId}/videos`);

  useEffect(()=>{
    setVidId(vidId)
  },[vidId])
 
    const videoKey = videoData?.results?.[0]?.key;
  const fetchInitialData = () => {
    setLoading(true);
    fetchRequest(`/discover/movie`, filters).then((res) => {
      setData(res);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  const onChangeHandle = (value: string) => {
    filters["with_genres"] = value;
    fetchInitialData();
  };



  return (
    <>
      <div className="flex gap-3 justify-between items-center mx-12">
        <h2 className="font-bold sm:text-sm  md:text-2xl my-3"> All Videos </h2>

        <div className="w-72">
          {genresData && genresData.genres && (
            <Select
              label="Filter Videos"
              name="geners"
              onChange={onChangeHandle}
            >
              {genresData.genres.map((item: any, index: number) => (
                <Option key={index} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          )}
        </div>
      </div>
      {
        !show ? (<> <div className="grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-5">
        {data &&
          data?.results?.map((item: any) => {
            return <VideoCard data={item} setVidId={setVidId} setShow={setShow} />;
          })}
      </div> </>) : (<>
        <VideoPopUp show={show} setShow={setShow} videoId={videoKey} setVideoId={setVidId} loading={vidLoading} /></>)
      }
     
    </>
  );
};

export default AllVideos;
