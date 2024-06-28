import { useState } from "react";

const ShortenLink = () => {
  const [linkURL, setLinkURL] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const [error, setError] = useState(false);

  const shortenAPI = async (urlLink) => {
    const url = "https://cleanuri.com/api/v1/shorten";
    const encodedUrlLink = encodeURIComponent(urlLink.trim());

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `url=${encodedUrlLink}`,
      });

      const ans = await response.json();

      if (response.ok) {
        setError(false);
        setLinkURL("");
        const shortenLink = ans.result_url;
        setShortenedLinks((prevLinks) => [
          ...prevLinks,
          { originalLink: urlLink, shortenLink },
        ]);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Failed to shorten the link:", error);
      setError(true);
    }
  };

  const handleShortenClick = () => {
    if (linkURL.trim().length === 0) {
      setError(true);
    } else {
      setError(false);
      shortenAPI(linkURL);
    }
  };

  const handleCopy = (shortenLink) => {
    navigator.clipboard.writeText(shortenLink).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <div className="w-full relative backgroundShorten flex flex-col tab:flex-row justify-center items-center h-min py-4 bg-darkViolet">
      <div className="w-11/12 tab:w-[70%] pl-2 outline-none rounded-md py-2 my-5">
        <input
          type="text"
          placeholder="shorten a link here..."
          className={`w-full pl-2 outline-none rounded-md py-2 ${
            error ? "inputDesign" : ""
          }`}
          value={linkURL}
          onChange={(e) => setLinkURL(e.target.value)}
        />
        {error && (
          <div
            className="text-specialRed w-11/12 relative justify-start items-start font-bold flex"
            id="warning"
          >
            Please add a valid link
          </div>
        )}
      </div>
      <button
        className="w-11/12 relative tab:min-w-heroWidth tab:max-w-formWidth tab:ml-2 rounded-lg bg-cyan text-white font-bold py-3 my-5 hover:opacity-90"
        onClick={handleShortenClick}
      >
        Shorten It!
      </button>
      <div
        className="flex flex-col justify-center items-center my-5 w-11/12"
        id="shorteLinkDiv"
      >
        {shortenedLinks.map((link, index) => (
          <div
            key={index}
            className="w-full h-min py-5 bg-white rounded flex flex-col tab:flex-row justify-start tab:justify-between items-start tab:items-center mb-4 shadow-2xl tab:pl-2"
          >
            <div className="tab:flex-1 flex justify-start items-start tab:justify-center h-min border-b-4 border-b-gray-600 text-start text-black font-bold text-ellipsis overflow-hidden text-xl w-full tab:border-none">
              <div className="text-ellipsis overflow-hidden whitespace-nowrap w-full pl-4 mb-4 tab:pl-0 tab:mb-0 h-min">
                {link.originalLink}
              </div>
            </div>
            <div className="tab:flex-1 flex flex-col justify-start text-start w-full h-min tab:flex-row tab:justify-end tab:items-center">
              <input
                type="text"
                className="w-full tab:flex hidden tab:justify-end tab:items-center h-5 text-cyan font-bold ml-4 my-2 tab:my-0 tab:ml-0"
                value={link.shortenLink}
                disabled
                dir="rtl"
              />
              <input
                type="text"
                className="w-full tab:hidden flex tab:justify-end tab:items-center h-5 text-cyan font-bold ml-4 my-2 tab:my-0 tab:ml-0"
                value={link.shortenLink}
                disabled
              />
              <button
                className="w-11/12 mx-4 h-10 rounded-md bg-cyan text-white my-2 font-bold flex justify-center items-center tab:max-w-btnWidth hover:opacity-50"
                onClick={() => handleCopy(link.shortenLink)}
              >
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortenLink;