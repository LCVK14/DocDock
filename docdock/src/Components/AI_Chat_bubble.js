const AIChatBubble = ({message}) => {
  return (
    <>
      <div className="text-green">
        <img
          src="https://i.pinimg.com/originals/67/13/3d/67133d513112ae5e0ebf734286fcf2e8.jpg"
          alt="AI profile"
          height={45}
          className="rounded me-3"
        ></img>
          {message}
        <hr className=""></hr>
      </div>
    </>
  );
};

export default AIChatBubble;
