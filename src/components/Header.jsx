import React from "react";

const Header = () => {
  return (
    <>
      <div className="container my-3">
        {/* Room form  */}
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" class="form-label">
               Create Room ID
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Share the room ID with those you want to chat with.
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            Join Room
          </button>
        </form>
        {/* Message form  */}
        <h2 className="my-3">Send Messages</h2>
        <form >
        <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Enter your senders ID here"
            />
            <label for="floatingInput">Enter your message here...</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Enter your senders ID here"
            />
            <label for="floatingInput">Sender ID</label>
          </div>
          <button type="button" class="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
      <div className="container">
        <h2 className="my-3">Your Messages will be displayed below</h2>
      </div>
    </>
  );
};

export default Header;
