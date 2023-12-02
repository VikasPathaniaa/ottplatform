import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import PosterFallback from "../../assets/no-poster.png";
import dayjs from "dayjs";


export function VideoCard({ data, setVidId, setShow }: any) {
  const { url } = useSelector((state: any) => state.home);

  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;
  return (
    <Card className="mt-6 ">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={posterUrl}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {data.title || data.name}
        </Typography>
        <Typography>
          {dayjs(data.release_date).format("MMM D, YYYY")}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={() => {
          setVidId(data?.id)
          setShow(true)
        }}>Watch Now</Button>
      </CardFooter>
    </Card>
  );
}