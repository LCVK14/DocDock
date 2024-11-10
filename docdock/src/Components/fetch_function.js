import UserChatBubble from "./User_Chat_bubble"

export async function sendUserMessage(params) {
    if (params != "") {
      try {
        
        const response = await fetch('http://localhost:8080/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: params })
      }).then(response => console.log(response))
      } catch (error) {
        
      }
    }
  }

