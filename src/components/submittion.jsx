import { useState } from "react";

export default function Submittion() {
  const [lists, setLists] = useState([]);
  function handleSumbit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const info = formData.get("info");
    setLists((pervList) => [...pervList, info]);
  }
  return (
    <>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1> sign up</h1>
        <form onSubmit={handleSumbit}>
          <label htmlFor="info">type something</label>
          <input type="text" defaultValue="yes" name="info" />
          <br />
          <input type="submit" value="submit " />
        </form>
        <br />
        <hr />
        <ul>
          {lists.map((item, index) => (
            <li key={index}>
              {item}{" "}
              <span>
                <button
                  onClick={() => {
                    setLists((pervList) =>
                      pervList.filter((_, i) => i !== index)
                    );
                  }}
                >
                  X
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
      {console.log(lists)}
    </>
  );
}
