import "./Post.css";

function Post(props) {
  // нижче робимо деструктуризація для зручності
  const { title, body, userId, id } = props;
  return (
    <div className="myPostClass">
      <h1>{title}</h1>
      <p>{body}</p>
      <h3>This post has user id {userId}</h3>
      <h3>and ID {id}</h3>
    </div>
  );
}

export default Post;
