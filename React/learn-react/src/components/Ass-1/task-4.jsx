const Task4 = () => {
  return (
    <div>
      <h2>User Registration Form</h2>

      <form>
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" id="name" placeholder="Enter your name" required />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          required
        />
        <br />
        <br />
        <label htmlFor="age">Age:</label>
        <br />
        <input type="number" id="age" placeholder="Enter age" />
        <br />
        <br />
        <label>Gender:</label>
        <br />
        <input type="radio" name="gender" /> Male
        <input type="radio" name="gender" /> Female
        <br />
        <br />
        <label>Skills:</label>
        <br />
        <input type="checkbox" /> HTML
        <input type="checkbox" /> CSS
        <input type="checkbox" /> JavaScript
        <br />
        <br />
        <label htmlFor="dob">Date of Birth:</label>
        <br />
        <input type="date" id="dob" />
        <br />
        <br />
        <label htmlFor="msg">Message:</label>
        <br />
        <textarea id="msg" placeholder="Write something..." required></textarea>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Task4;
