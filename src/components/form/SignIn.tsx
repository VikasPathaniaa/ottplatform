import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useState } from "react";
  import {Link, useNavigate} from "react-router-dom" 
import { toast } from "react-toastify";

  export function SignIn() {
    const [data, setData] = useState({
      email:"",
      password:""
    });

    const navigate = useNavigate()
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    };
  

  const handleSignIn = () => {
    // Retrieve data from localStorage
    const userInfo = localStorage.getItem('user-info');
    
    // Check if userInfo exists in localStorage and matches entered credentials
    if (userInfo) {
      const storedUserInfo = JSON.parse(userInfo);
      if (storedUserInfo.email === data?.email && storedUserInfo.password === data?.password) {
        // If credentials match, generate a random token
        const token = generateToken();
        
        // Save token to localStorage
        localStorage.setItem('token', token);
        navigate("/home")
       
      } else {
        // Handle incorrect credentials
        toast('Invalid email or password. Please try again.');
      }
    } else {
      // Handle case when user-info doesn't exist in localStorage
      toast('User information not found. Please sign up.');
    }
  };

  const generateToken = () => {
    const tokenLength = 64; 
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
  
    for (let i = 0; i < tokenLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }
  
    return token;
  };
  
    return (
      <div className="flex justify-center items-center h-[100vh]">
       <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter Your Crediantials.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">  
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              name="email"
              value={data.email}
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleInputChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              name="password"
              value={data.password}
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleInputChange}
            />
          </div>
          
          <Button className="mt-6" fullWidth onClick={handleSignIn}>
            Sign In
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?
            <Link to="/sign-up" className="font-medium text-gray-900">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
      </div>
    );
  }