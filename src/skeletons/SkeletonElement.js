import React from 'react';
import './Skeleton.css';

const SkeletonElement = ({ element }) => {
    const classElement = `skeleton ${element}`;
    
    return (
        <div className={classElement}></div>
    )
}

export default SkeletonElement;