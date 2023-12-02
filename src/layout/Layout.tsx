import { Navigate } from 'react-router-dom';
import Header from '../components/Navbar';

const Layout = ({children}:any) => {
  let isToken = localStorage.getItem("token")
  if(isToken){
    return (
      <>
      <Header/>
        {children}
      </>
    );
  }else{
   return <Navigate to="/" replace={true} />
  }
 
}

export default Layout;
