import React from 'react';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Hashnode API</h2>
      </header>
      <div className="post">
        <BlogPost />
      </div>
    </div>
  );
}

export default App;
