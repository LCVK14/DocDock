import { useState } from "react";
import AIChatBubble from "./AI_Chat_bubble";
import Footer from "./Footer";
import Navbar from "./Navbar";
import send_icon from "./send.png";
import UserChatBubble from "./User_Chat_bubble";
// import { sendUserMessage } from "./fetch_function";

const Chat = () => {
  const [user_input, setUser_input] = useState("");
  const [message_history, setMessage_history] = useState([
    <AIChatBubble
      message={"Hello, user! Please state the symptoms you are experiencing?"}
    ></AIChatBubble>,
  ]);

  function sendAIMessage(params) {
    console.log(params)

    if (params.disease) {
    const diseaseInfo = params.disease;
    setMessage_history((prev_messages) => [
      ...prev_messages,
      <AIChatBubble message={"Here are some possible conditions you may be facing " + diseaseInfo[1]['Name'].slice(2)+", "+diseaseInfo [3]['Name'].slice(2)+", "+diseaseInfo [5]['Name'].slice(2)}></AIChatBubble>,
    <AIChatBubble message={"And these are a few recommended remedies "+ diseaseInfo [1]['Remidie']+" "+diseaseInfo [5]['Remidie']+" "+diseaseInfo [3]['Remidie']}></AIChatBubble>
    ]);
  }

    if(params.doctor) {
      setMessage_history((prev_messages) => [
        ...prev_messages,
        <AIChatBubble 
        message={
          `Your symptoms seem to be more severe than others, I recomment you consult with Dr. ${params.doctor.name}, ` +
          `a ${params.doctor.specialty}. You can find them at ${params.doctor.address}, and their contact number is ${params.doctor.phone}.`
        }
      ></AIChatBubble>
      ]);
    }
  }

  async function sendUserMessage(params) {
    if (params !== "") {
      try {
        setMessage_history((prev_messages) => [
          ...prev_messages,
          <UserChatBubble message={params}></UserChatBubble>,
        ]);
        const res = await fetch("http://localhost:8080/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: params }),
        })
        const data = await res.json()
        sendAIMessage(data)
        user_input = ""

      } catch (error) {}
    }
  }
  return (
    <div className="bg-offwhite" style={{ height: "550px" }}>
      <Navbar></Navbar>
      <div className="w-75 h-75 mx-auto my-2 px-4 py-3 text-green d-flex flex-column bg-white rounded-3">
        <div className="overflow-auto flex-fill">{message_history}</div>
        <div class="input-group mx-auto my-2 w-75 justify-self-end">
          <input
            type="text"
            class="form-control"
            placeholder="Your message..."
            aria-label="User's message"
            aria-describedby="button-addon2"
            onChange={(e) => {
              setUser_input(e.target.value);
            }}
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={() => sendUserMessage(user_input)}
          >
            <img src={send_icon} width="15" height="15" alt="send button"></img>
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Chat;
