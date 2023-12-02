import ReactPlayer from "react-player/youtube";
import Spinner from "../common/Spinner";

const VideoPopUp = ({ show, setShow, videoId, setVideoId, loading }: any) => {

    console.log(videoId)
    console.log(videoId)
    const hidePopup = () => {
        setShow(false);
        setVideoId(null);
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full h-[100vh] flex items-center justify-center ${show ? "" : "hidden"
                }`}
        >
            {loading ? <div className="flex justify-center items-center h-[100vh] "><Spinner />  </div>
                :
                (<>
                    <div className="absolute inset-0 bg-black opacity-50" onClick={hidePopup}></div>
                    <div className="relative z-10 max-w-4xl w-full">
                        <span
                            className="absolute top-2 right-2 text-white cursor-pointer"
                            onClick={hidePopup}
                        >
                            Close
                        </span>
                        <div className="aspect-w-16 aspect-h-9 h-[100vh]">
                            <ReactPlayer
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                controls
                                width="100%"
                                height="100vh"

                            />

                         
                        </div>
                        </div>
                        </>  
                    )
                
             }
        </div>
    );
};

export default VideoPopUp;
