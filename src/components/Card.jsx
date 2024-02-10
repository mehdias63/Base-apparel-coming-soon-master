import React from "react";
import EmailForm from "./EmailForm";

export default function Card() {
  return (
    <div className="md:grid md:grid-cols-2 font-josef ">
      <div className="p-8 md:col-start-1 md:row-start-1 md:pl-32 ">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="bg-[url(/images/hero-mobile.jpg)] w-full h-80 bg-no-repeat bg-contain md:bg-cover md:bg-[url(/images/hero-desktop.jpg)] md:w-[25rem] md:h-[35rem] lg:w-[32rem] lg:h-[42rem] md:col-start-2 md:row-start-1 mx-auto"></div>
      <div className="flex flex-col items-center py-8 md:col-start-1 md:row-start-1 md:pt-44 md:px-[2rem] xl:px-[5rem] mb-8">
        <h1 className="text-[2.5rem] md:text-[4rem] leading-[2.625rem] md:leading-[4.4375rem] tracking-[0.67656rem] md:tracking-[1.08256rem] font-semibold text-black mb-4">
          <span className="block font-light md:leading-[4rem] text-light-pink">
            WE'RE
          </span>
          COMING <br />
          SOON
        </h1>
        <p className="text-light-pink mb-12 px-8 lg:px-16">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <EmailForm />
      </div>
    </div>
  );
}
