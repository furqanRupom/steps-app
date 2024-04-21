import * as React from 'react';

interface IProductProps {
    params:number;
}



const Product: React.FunctionComponent<IProductProps> = ({params}) => {
    console.log(params);
    return <div>
        <h3 className='text-4xl font-thin text-center text-red-400'>this is our product page</h3>
    </div>;
};

export default Product;
