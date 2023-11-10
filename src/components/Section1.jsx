const Section1 = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen my-10 sm:px-32 px-5 grotesk">
        <div className="p-5 w-full flex flex-col justify-center items-center white-glassmorphism">
          <p className="text-2xl font-bold text-center">InsightGPT</p>
          <p className="text-white font-extralight text-justify sm:text-center max-w-[1000px]">
            $BCI is a cutting-edge AI-powered tool designed to analyze
            and forecast the performance of decentralized finance (DeFi) tokens
            in the cryptocurrency market. Equipped with a deep learning model
            that processes vast amounts of data, including historical price
            trends, market sentiment, news, and fundamental factors, to provide
            predictions on how specific DeFi tokens are likely to perform in the
            near future.
          </p>
          <p className="text-white font-extralight text-justify sm:text-center max-w-[1000px]">
            AI's ability to analyze vast amounts of data is a double-edged
            sword. While it can help improve products and services, it also
            poses significant threats to individual privacy. AI systems can
            easily gather and analyze personal data, leading to potential
            privacy breaches.
          </p>
        </div>
      </div>
      {/* <div className="flex sm:flex-row flex-col items-center justify-center gap-6">
        <iframe
          width="400"
          height="315"
          src="https://www.youtube-nocookie.com/embed/5JRf0TwraEE?si=p419izYwBrNno_Gx&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="315"
          src="https://www.youtube-nocookie.com/embed/UwsrzCVZAb8?si=o_6IZq_irXigA7yY&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div> */}
    </>
  );
};
export default Section1;
