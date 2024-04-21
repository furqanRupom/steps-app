import * as React from 'react';

interface ISingleProductProps {
    params:number;
    searchParams:string;
}


const SingleProduct: React.FunctionComponent<ISingleProductProps> = ({params,searchParams}) => {
    console.log(params);
    console.log(searchParams);
  return <div>
    <h3>this is our single product page</h3>
  </div>;
};

export default SingleProduct;
