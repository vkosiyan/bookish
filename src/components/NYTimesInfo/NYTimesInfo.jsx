import React from "react";

function NYTimesInfo({ book }) {

const nyTimesUrl = `https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=YF4jFW7MyybdTuz3s6uLGAoUcFZqULxg`;

  return (
    <div>
        {nyTimesUrl}

    </div>   


  );
}

export default NYTimesInfo;
