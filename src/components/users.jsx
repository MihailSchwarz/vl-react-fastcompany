import React, { useState } from "react";
import api from "../api";

const Usrs = () => {
  //console.log(api.users.fetchAll());

  const [users, setUsers] = useState(api.users.fetchAll());
  //const [profession, setProfession] = useState(api.professions.fetchAll());

  const handleDelete = (userId) =>
    setUsers(users.filter((user) => user._id !== userId));

  const handleCount = (users) => {
    return users.length > 0
      ? users.length + " человек тусанёт с тобой сегодня"
      : "Никто не хочет с тобой тусить";
  };

  return (
    <>
      <span className={"badge bg-" + (users.length > 0 ? "primary" : "danger")}>
        {handleCount(users)}
      </span>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качество</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встреч</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>
                {user.qualities.map((item) => (
                  <span className={"badge m-1 bg-" + item.color} key={item._id}>
                    {item.name}
                  </span>
                ))}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}</td>
              <td>
                <button
                  onClick={() => handleDelete(user._id)}
                  className={"btn btn-danger"}
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
  //const renderPhrase
};

export default Usrs;
