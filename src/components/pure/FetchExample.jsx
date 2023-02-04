import React, { useState, useEffect } from "react";
import {
  getAllPageUsers,
  getAllUsers,
  getUserDetails,
} from "../../services/fetchService";

const FetchExample = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  const [totalUsers, setTotalUsers] = useState(12);
  const [usersPerPage, setUsersPerPage] = useState(6);
  const [pages, setPages] = useState(2);

  useEffect(() => {
    obtainUsers();
  }, []);

  const obtainUsers = () => {
    getAllUsers()
      .then((response) => {
        console.log("All Users", response.data);
        setUsers(response.data);
        setPages(response.total_pages);
        setUsersPerPage(response.per_page);
        setTotalUsers(response.total);
      })
      .catch((error) => {
        alert(`Error while retreiving the users: ${error}`);
      })
      .finally(() => {
        console.log("Ended obtaining users:");
        console.log(users);
      });

    // -------------------------------------------

    // getAllUsers()
    // .then((response) => {
    //     if (response.status === 200 && response.ok) {
    //         response
    //         .json()
    //         .then((body) => {
    //             console.log("All Users", body.data);
    //             setUsers(body.data);
    //         })
    //         .catch((error) => {
    //           console.log(`Something went wrong: ${error}`);
    //         });
    //     }
    // })
    // .catch((error) => {
    //     alert(`Error while retreiving the users: ${error}`);
    // })
    // .finally(() => {
    //     console.log("Ended obtaining users:");
    //     console.table(users);
    // });

    // -------------------------------------------
  };

  const obtainPagedUsers = (page) => {
    getAllPageUsers(page)
      .then((response) => {
        console.log("All Paged Users", response.data);
        setUsers(response.data);
        setPages(response.total_pages);
        setUsersPerPage(response.per_page);
        setTotalUsers(response.total);
      })
      .catch((error) => {
        alert(`Error while retreiving the users: ${error}`);
      })
      .finally(() => {
        console.log("Ended obtaining users:");
        console.table(users);
      });
  };

  const obtainUserDetails = (id) => {
    getUserDetails(id)
      .then((response) => {
        console.log("All Paged Users", response.data);
        setSelectedUser(response.data);
      })
      .catch((error) => {
        alert(`Error while retreiving the users: ${error}`);
      })
      .finally(() => {
        console.log("Ended obtaining user:");
        console.table(selectedUser);
      });
  };

  return (
    <div>
      <h2>Users:</h2>
      {users.map((user, index) => (
        <p key={index} onClick={() => obtainUserDetails(user.id)} style={{ cursor: "pointer"}}>
          {user.first_name} {user.last_name}
        </p>
      ))}
      <p>
        Showing {usersPerPage} users of {totalUsers} in total.
      </p>
      <button onClick={() => obtainPagedUsers(1)}>1</button>
      <button onClick={() => obtainPagedUsers(2)}>2</button>

      <div>
        <h3>User Details:</h3>

        {selectedUser && (
          <div>
            <p>Name: {selectedUser.first_name}</p>
            <p>Last Name: {selectedUser.last_name}</p>
            <p>Email: {selectedUser.email}</p>
            <img src={selectedUser.avatar} style={{height: "50px", width: "50px"}} alt="Avatar"/>
          </div>
        )}
      </div>
    </div>
  );
};

export default FetchExample;
