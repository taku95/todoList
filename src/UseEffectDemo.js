import React, { useState, useEffect } from "react";

export default function UseEffectDemo() {
  const [resourceType, setResourceType] = useState("posts");
  console.log("render");
  useEffect(() => {
    console.log("render");
  }, []);
  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}
