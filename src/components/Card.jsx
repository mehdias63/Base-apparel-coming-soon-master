import React from "react";
import EmailForm from "./EmailForm";

export default function Card() {
  return (
    <div className="">
      <div>
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="bg-[url(/images/hero-mobile.jpg)] h-60 bg-no-repeat bg-cover md:bg-[url(/images/hero-desktop.jpg)] md:w-1/2 md:h-96 "></div>
      <h1>
        <span className="block">WE'RE</span>COMING SOON
      </h1>
      <p>
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
      <div>
        <EmailForm />
      </div>
    </div>
  );
}
