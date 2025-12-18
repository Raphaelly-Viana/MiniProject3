
import { Link } from "react-router-dom";

 function HomePage() {
  return (
    <div className="home-container">
      

      <h2 className="welcome-title">Welcome to NextChapter</h2>
<p className="welcome-subtitle">
  Turn the page. Start your next chapter.
</p>
      <Link to="/books">
        <button className="home-button">  📚 Browse Collection</button>
      </Link>
    </div>
  );
}

export default HomePage