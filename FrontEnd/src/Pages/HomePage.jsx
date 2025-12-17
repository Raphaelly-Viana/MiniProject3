
import { Link } from "react-router-dom";

 function HomePage() {
  return (
    <div className="home-container">
      

      <h1 className="home-title">NextChapter 📖 </h1>
      <p className="home-subtitle">Your next read starts here </p>

      <p className="home-text">
        Turn the page. Start your next chapter.
      </p>

      <Link to="/books">
        <button className="home-button">  📚 Browse Collection</button>
      </Link>
    </div>
  );
}

export default HomePage