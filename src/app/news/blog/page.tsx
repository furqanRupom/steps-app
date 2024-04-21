import * as React from 'react';

interface IBlogPageProps {
}

const BlogPage: React.FunctionComponent<IBlogPageProps> = (props) => {
    return <div>
        <h4 className='text-4xl font-bold text-center'>this is our blog page</h4>
    </div>;
};

export default BlogPage;
