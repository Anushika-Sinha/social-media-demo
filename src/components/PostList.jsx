import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useEffect } from "react";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
