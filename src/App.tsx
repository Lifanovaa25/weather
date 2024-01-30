import React, { useEffect } from "react";
import "./index.scss";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import { getPosts } from "./api/requests";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import { Days } from "./components/Days/Days";

function App() {
  // useEffect(() => {
  //   // getPosts.then((res) => console.log(res)).catch((err) => console.log(err));
  //   getPosts();
  // },[]);
  return (
    <>
      <div className="container">
        <Header />
        <div className="day_wrapper">
          <ThisDay />
          <ThisDayInfo icon_id={""} name={""} value={""} />
        </div>
        {/* <Form /> */}
        <Days/>
      </div>
    </>
  );
}

export default App;
