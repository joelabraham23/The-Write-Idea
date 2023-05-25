import '../App.css'
export default function Post(){
    return (
    <div className='post'>
        <div className="image">
          <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt="blog post"></img>
        </div>
        <div className="texts">
          <h2>Full house blah blah blah</h2>
          <p className='info'>
          <a href='/' className="author">Joel Abraham</a>
          <time> 11/05/2023</time>
          </p>
          <p className='summary'>lerum ipsum dolor nfjfnjwn wefbwfjbwjfwf wkhfbhjwbf w nw h fhwbf</p>
        </div>
      </div>
    )
}