import * as React from 'react';

interface IArticleProps {
}

const Article: React.FunctionComponent<IArticleProps> = (props) => {
    return <div>
        <h3 className='text-4xl font-bold text-center text-green-400'>this is our article page</h3>
    </div>;
};

export default Article;
