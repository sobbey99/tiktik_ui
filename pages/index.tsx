import axios from "axios";
import type { Video } from "../types";
import VideoCard from "../components/VideoCard";
import NoResults from "../components/NoResults";
import { BASE_URL } from "../utils";

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {/* {videos.length ?  {videos.map((video: Video) => (
       <VideoCard post={video} key={video._id}/>
      ))}
    : (
      <NoResults text="No Videos"/>
    )} */}
      {videos.length ? (
        videos.map((video) => <VideoCard post={video} key={video._id} />)
      ) : (
        <NoResults text={"No Videos"} />
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://${BASE_URL}:3000/api/post`);

  return {
    props: {
      videos: data,
    },
  };
};

export default Home;
