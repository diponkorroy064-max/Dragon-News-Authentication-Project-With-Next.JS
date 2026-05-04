import React from 'react';

const loading = () => {
    return (
        <div className='flex items-center justify-center h-10'>
            <p>Global Loading </p>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    );
};

export default loading;