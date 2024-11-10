import AIChatBubble from "./AI_Chat_bubble";
import send_icon from "./send.png";
import UserChatBubble from "./User_Chat_bubble";

const Chat = () => {
  return (
    <>
      <h2 className="text-center">Hello, User!</h2>
      <div className="bg-white w-75 mx-auto px-4 py-3 text-green">
        <AIChatBubble message={"Hello, world!"}></AIChatBubble>
        <UserChatBubble message={"beans"}></UserChatBubble>
        <div class="input-group mx-auto my-2 w-75">
          <input
            type="text"
            class="form-control"
            placeholder="Your message..."
            aria-label="User's message"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <img src={send_icon} width="15" height="15" alt="send button"></img>
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;
