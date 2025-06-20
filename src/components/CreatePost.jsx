import { useContext } from "react";
import { useRef } from "react";
import { PostList as PostListData } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListData);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    addPost(userId, postTitle, postBody, reactions, tags);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Enter your user id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="Where were you now?"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Body
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          className="form-control"
          id="body"
          placeholder="Tell me about it..."
          rows={4}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="No of Reactions"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          HashTags
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Separate tags using Space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
