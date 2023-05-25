import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="/d" className="logo">MyBlog</a>
        <nav>
          <a href="/a">Login</a>
          <a href="/a">Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
          <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt="blog post"></img>
        </div>
        <div className="texts">
          <h2>Full house blah blah blah</h2>
          <p className='info'>
            <span className="author">Joel Abraham</span>
            <time>11/05/2023</time>
          </p>
          <p className='summary'>lerum ipsum dolor nfjfnjwn wefbwfjbwjfwf wkhfbhjwbf w nw h fhwbf</p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt="blog post"></img>
        </div>
        <div className="texts">
          <h2>Full house blah blah blah</h2>
          <p>lerum ipsum dolor nfjfnjwn wefbwfjbwjfwf wkhfbhjwbf w nw h fhwbf</p>
        </div>
      </div>
    </main>
  );
}

export default App;
