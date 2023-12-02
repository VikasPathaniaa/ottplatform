import {
  Button,
  Card,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface ErrorTypes {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
}

export function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<ErrorTypes>({});
  const navigate = useNavigate()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    // Custom validation logic (Example: check for empty fields)
    const newErrors: any = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    if (Object.keys(newErrors).length > 0) {
      console.log(newErrors, "newErrors");

      setErrors(newErrors);
    } else {
      let response = await localStorage.setItem("user-info", JSON.stringify(formData))
      console.log(response, "red");
      navigate("/")
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="user"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <Typography variant="small" color="deep-orange" className="mt[-12px]" >
              {errors.name}
            </Typography>}

            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <Typography variant="small" color="deep-orange" className="mt[-12px]" >
              {errors.email}  </Typography>
            }

            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <Typography variant="small" color="deep-orange" className="mt[-12px]" >
              {errors.password}  </Typography>
            }
          </div>

          <Button className="mt-6" fullWidth onClick={handleSubmit}>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?
            <Link to="/" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}