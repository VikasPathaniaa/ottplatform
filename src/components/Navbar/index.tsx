import {
  Button,
  Input,
  Navbar
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Profile } from "./Profile";

export default function Header() {

  const [searchInput , setSearchInput] = useState("")

  const navigate = useNavigate()
  const searchQueryHandler = (event:any) => {
    setSearchInput(event.target.value)
    if (event.key === "Enter" && searchInput.length > 0) {
      navigate(`/search/${searchInput}`);
      setSearchInput("")
    }
};

const SearchHandle = ()=>{
  if (searchInput.length > 0) {
    navigate(`/search/${searchInput}`);
   setSearchInput("")
  }
}

  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="  from-blue-gray-900 to-blue-gray-800 px-4 py-3 rounded-none max-w-none"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Link to="/home" className="mr-4 ml-2 cursor-pointer py-1.5">
          My Platform
        </Link>
        <div className="ml-auto flex gap-1 md:mr-4">
          <Profile />
        </div>
        <div className="mr-4">
        <Link to="/all-videos">    <Button
            size="sm"
            color="white"
            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-90 "
            ripple={false}
            fullWidth={true}
          >
            ALl Videos 
          </Button> </Link>
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            color="white"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
            name="search"
            value={searchInput}
            onChange={searchQueryHandler}
          />
          <Button
            size="sm"
            color="white"
            className="!absolute right-1 top-1 rounded"
            onClick={SearchHandle}
          >
            Search
          </Button>
        </div>
      </div>
    </Navbar>
  );
}

export { Navbar };
