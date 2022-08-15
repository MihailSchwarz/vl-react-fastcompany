import React from "react";

const searchStatus = ({ length }) => {
  console.log(length);

  const handleCount = (length) => {
    return length > 0
      ? length + " человек тусанёт с тобой сегодня"
      : "Никто не хочет с тобой тусить";
  };

  return (
    <span className={"badge bg-" + (length > 0 ? "primary" : "danger")}>
      {handleCount(length)}
    </span>
  );
};

export default searchStatus;
