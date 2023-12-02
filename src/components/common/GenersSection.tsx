import { VideoCard } from './VideoCard';

const GenresSection = ({ title,setVidId ,setShow,  value }: { title: string,setShow:any, setVidId:any ,  value: any }) => {
  return (
    <div>
      <h2 className='font-bold ml-3 text-2xl my-3'>{title}</h2>
      <div className='overflow-x-auto whitespace-nowrap no-scrollbar'>
        <div className='flex space-x-5 p-3'>
          {value &&
            value?.map((item: any, index: number) => (
              <VideoCard key={index} data={item} setVidId={setVidId} setShow={setShow} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default GenresSection;
