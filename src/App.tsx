import React, { useEffect } from "react";
import "./index.scss";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import { getPosts } from "./api/requests";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";

function App() {
  // useEffect(() => {
  //   // getPosts.then((res) => console.log(res)).catch((err) => console.log(err));
  //   getPosts();
  // },[]);
  return (
    <>
      <div className="container">
        <Header />
        <ThisDay/>
        <ThisDayInfo/>
        {/* <Form /> */}
      </div>
    </>
  );
}

export default App;
