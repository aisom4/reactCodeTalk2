import React from "react";

function Avatar() {
  const user = {
    name: "Christopher Robin",
    imageUrl:
      "https://media.npr.org/assets/img/2011/07/13/christopherrobin-d13c9c20543fc6d051429ce97d7ac5cb47ac75f5-s1200-c85.webp",
    imageSize: 90,
  };

  return (
    <div>
      <h1>Name: {user.name}</h1>
      <img
        src={user.imageUrl}
        alt=" Christopher Robin"
        width={user.imageSize}
      />
    </div>
  );
}

export default Avatar;

//The picture provided did not work.

//Curly braces are used to accept the dynamic values.
