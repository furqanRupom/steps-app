import * as React from 'react';

interface ILoadingPageProps {
}

const LoadingPage: React.FunctionComponent<ILoadingPageProps> = (props) => {
    return <div className='flex items-center justify-center w-full h-full absolute inset-0 bg-gradient-to-t z-50 from-black to-gray-900 backdrop-blur-2xl '>
      <div className="w-20 h-20 flex gap-2 items-center justify-center"><div className="w-8 h-12 animate-[ping_1.4s_linear_infinite] bg-red-600"></div><div className="w-8 h-12 animate-[ping_1.8s_linear_infinite] bg-amber-600"></div><div className="w-8 h-12 animate-[ping_2s_linear_infinite] bg-rose-600"></div></div>

  </div>;
};

export default LoadingPage;
