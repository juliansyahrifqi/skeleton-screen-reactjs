import React from 'react';
import SkeletonElement from './SkeletonElement';
import './Skeleton.css';
import Shimmer from './Shimmer';

const SkeletonPost = () => {
    return (
        <div className="skeleton-posts">
            <SkeletonElement element="image" />
            <SkeletonElement element="title" />
            <SkeletonElement element="date" />
            <hr></hr>
            <SkeletonElement element="text" />
            <SkeletonElement element="text" />
            <SkeletonElement element="text" />
            <Shimmer />
        </div>
    )
}

export default SkeletonPost;