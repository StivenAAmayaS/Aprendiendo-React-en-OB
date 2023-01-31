import React, { useState } from "react";

const styleButton = (color) => {
  return {
    backgroundColor: color,
    borderRadius: "10px",
    border: "1px solid transparent",
    padding: "5px 25px",
  };
};

// Login / Logout buttons
const LoginButton = ({ loginAction }) => {
  return (
    <button onClick={loginAction} style={styleButton("green")}>
      Logout
    </button>
  );
};

const LogoutButton = ({ logoutAction }) => {
  return (
    <button onClick={logoutAction} style={styleButton("red")}>
      Login
    </button>
  );
};

// (Expresion true) && expresion => se renderiza la expresion
// (Expresion false) && expresion => no se renderiza la expresion

const OptionalRender = () => {
  const [access, setAccess] = useState(true);
  const [nMessages, setNMessages] = useState(0);

  //   const updateAccess = () => {
  //     setAccess(!access);
  //   };

  const loginAction = () => {
    setAccess(true);
  };

  const logoutAction = () => {
    setAccess(false);
  };
  let optionalButton;

  //   if (access) {
  //     optionalButton = <button onClick={updateAccess}>Logout</button>;
  //   } else {
  //     optionalButton = <button onClick={updateAccess}>Login</button>;
  //   }

  if (access) {
    optionalButton = <LogoutButton logoutAction={logoutAction}></LogoutButton>;
  } else {
    optionalButton = <LoginButton loginAction={loginAction}></LoginButton>;
  }

  //   unread messages
  let addMessages = () => {
    setNMessages(nMessages + 1);
  };

  return (
    <div>
      {/* Optional Button  */}
      {optionalButton}
      {/* N Messages unread */}
      {nMessages > 0 && nMessages === 1 && (
        <p>You have {nMessages} new messages...</p>
      )}
      {nMessages > 1 && <p>You have {nMessages} new messages...</p>}
      {nMessages === 0 && <p>There are no new messages!</p>}

      {/* Ternary Operator */}
      {nMessages > 0 ? (
        <p>You have {nMessages} new messages...</p>
      ) : (
        <p>There are no new messages!</p>
      )}

      <button onClick={addMessages}>
        {nMessages === 0 ? "Add your first message" : "Add new Message"}
      </button>
    </div>
  );
};

export default OptionalRender;
