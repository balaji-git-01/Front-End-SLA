const Task3 = () => {
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "pink",
      }}
    >
      <h1
        style={{
          padding: "50px 15px",
          backgroundColor: "black",
        }}
      >
        Formatting & Interactive Tags
      </h1>

      <p>
        <b>Rohit Sharma</b> is a <strong>great batsman</strong>. He plays with{" "}
        <i>style</i> and <em>confidence</em>. He has scored{" "}
        <mark>double centuries</mark> in ODIs.
        <u>He is the Indian captain</u>.<small>(Famous as Hitman)</small>
      </p>

      <h2>Interactive Elements</h2>

      <a
        href="https://en.wikipedia.org/wiki/Rohit_Sharma"
        target="_blank"
        rel="noreferrer"
      >
        Learn more about Rohit Sharma
      </a>

      <br />
      <br />

      <button
        onClick={() => alert("Rohit Sharma is Hitman!")}
        style={{
          padding: "20px 50px",
          backgroundColor: "black",
        }}
      >
        Click Me
      </button>

      <br />
      <br />

      <div>
        <label
          style={{
            backgroundColor: "black",
            padding: "15px",
          }}
        >
          Enter your favorite player:
        </label>

        <input
          style={{
            padding: "15px",
          }}
          type="text"
          placeholder="Type here"
        />
      </div>

      <br />

      <div>
        <label>Your opinion:</label>
        <br />
        <textarea rows="4" cols="40" placeholder="Write here..."></textarea>
      </div>
    </div>
  );
};

export default Task3;
