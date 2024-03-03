import { useState } from "react";
import { Counter } from "./components/Counter";
import { CounterClass } from "./components/CounterClass";
import { PostItem } from "./components/PostItem";

function App() {
  const [post, setPost] = useState([{ id: 1, title: "js", body: "dfdfxfv" }]);
  return (
    <div>
      {post.map((item) => (
        <PostItem post={item} />
      ))}
    </div>
  );
}

export default App;
