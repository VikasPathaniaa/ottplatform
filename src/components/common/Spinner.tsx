import { Dna } from 'react-loader-spinner';

const Spinner = () => {
  return (
    
    <Dna
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{color:"#2f3d44"}}
    wrapperClass="dna-wrapper"
  />
  );
}

export default Spinner;
