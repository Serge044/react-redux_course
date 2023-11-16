import { useState } from "react";
import Post from "./Post";
import { useEffect } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // в даному випадку useEffect спрацьовую лише при першому завантаженні, бо масив залежностей порожній []
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setPost(json))
      .catch((error) => setError(error.message))
      // finally спрацьовує після виконання всіх than i catch
      .finally(() => setIsLoading(false));
  }, []);
  console.log(post);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  if (error) {
    return <h2>ERROR OCCURED! Type of error: {error}</h2>;
  } else {
    return (
      <>
        <h1>Posts</h1>
        <hr />
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          post &&
          post.map((everyPost) => {
            return (
              // <Post
              //   key={everyPost.id}
              //   title={everyPost.title}
              //   body={everyPost.body}
              //   userId={everyPost.userId}
              //   id={everyPost.id}
              // />
              // або можна розділити обʼєкт на властивсти за допомогою спред оператора ..., і передати одразу все властивості. це можна робити задля більш короткого запису як на прикладі нижче
              <Post {...everyPost} key={everyPost.id} />
            );
          })
        )}
      </>
    );
  }
}

export default Posts;
