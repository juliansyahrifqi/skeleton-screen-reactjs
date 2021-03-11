import React from 'react';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <div className="App">
      <header>
        <h2>React Skeleton - Hashnode API </h2>
        <a href="https://github.com/juliansyahrifqi/skeleton-screen-reactjs">Source Code</a>
      </header>
      <div className="post">
        <BlogPost />
      </div>
    </div>
  );
}

export default App;
