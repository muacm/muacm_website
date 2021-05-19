import "./BlogCard.css";

const BlogCard = ({ BlogCard_Details }) => {
  console.log(BlogCard_Details);
  return (
    <div className="BlogCard">
      <img
        src={BlogCard_Details["bg_image"]}
        alt="blog_demo_image"
        className="blog_demo_image"
      />
      <h3>{BlogCard_Details["blog_title"]}</h3>
      <span>
        <img
          src={BlogCard_Details["blog_author_profile_photo"]}
          alt="author-profile"
          className="author_profile_image"
        />
        <p>By, {BlogCard_Details["blog_author"]}</p>
      </span>
      <a href={BlogCard_Details["blog_url"]} target="_blank">
        <button className="primaryButton">Read Blog</button>
      </a>
    </div>
  );
};

export default BlogCard;
