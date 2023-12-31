import { logo, pepe2 } from "../assets";

const Section3 = () => {
  return (
    <>
      <div className="w-full grotesk flex justify-center md:pt-[30px]">
        <div className="flex flex-col md:flex-row items-center justify-between md:p-5 py-10 px-4">
          <div className="flex flex-col gap-3 sm:items-start items-center">
            <h1 className="font-bold text-center sm:text-left sm:text-6xl text-3xl">
              $BCI that
              <br />
              merits our attention
              <br />
              and vigilance.
            </h1>
            <p className="sm:text-2xl sm:text-left text-center text-lg font-medium text-[#EBEBF599]">
              AI algorithms are only as good as the data
              <br />
              they are trained on.
            </p>
            <div>
              <a href="https://t.me/BCIERC">
                <button className="border-[#fff] mb-5">Early Access</button>
              </a>
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-start md:ml-10 icon-fade">
            <img src={"https://etimg.etb2bimg.com/photo/100088163.cms"} alt="logo" width={350} />
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-center gap-6">
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
      </div>
    </>
  );
};
export default Section3;
