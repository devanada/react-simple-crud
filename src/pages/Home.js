import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function App1() {
  let history = useHistory();
  const [userList, setUserList] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get("http://localhost:3001/api/tutorials/")
      .then((res) => {
        const { data } = res;
        setUserList(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsReady(true));

    // fetch("http://localhost:3000/api/tutorials/")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setUserList(json);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .finally(() => setIsReady(true));
  };

  const deleteItem = async (item) => {
    console.log("delete", item.id);
  };

  if (isReady) {
    return (
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
          {userList.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <a href={`/detail/${item.id}`}>{item.id}</a>
                </td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>
                  <button onClick={() => history.push(`/update/${item.id}`)}>
                    Edit
                  </button>
                  <button onClick={() => deleteItem(item)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
}

export default App1;
