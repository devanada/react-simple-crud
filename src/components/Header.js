import React from "react";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          PHONE BOOK
        </a>
      </h1>
      <div className="header-right">
        <button className="menu-trigger">
          <a
            href="/create"
            style={{
              textDecoration: "none",
              fontSize: 16,
              color: "#000",
              fontWeight: "bold",
            }}
          >
            Create
          </a>
        </button>
      </div>
    </header>
  );
};

export { Header };
