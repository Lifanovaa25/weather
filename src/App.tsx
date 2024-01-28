import React, { useEffect } from "react";
import "./index.scss";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import { getPosts } from "./api/requests";

function App() {
  // useEffect(() => {
  //   // getPosts.then((res) => console.log(res)).catch((err) => console.log(err));
  //   getPosts();
  // },[]);
  return (
    <>
      <Header />
      <Form />
    </>
  );
}

export default App;
