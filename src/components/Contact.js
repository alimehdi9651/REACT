const Contact = () => {
  return (
    <div className="flex justify-center items-center ">
      <div>
        <h1 className="font-bold p-4 m-4 text-2xl text-center">Contact Us</h1>
        <div className="flex flex-col justify-center items-center border border-black w-[30vw] p-4 rounded-lg">
          <input
            type="text"
            className="border border-black bg-amber-50 w-[50vh] p-2 m-2 rounded-lg"
            placeholder="Username"
          />
          <textarea
            className="border bg-amber-100 h-[30vh] border-black w-[50vh] p-2 m-2 rounded-lg resize-none"
            placeholder="Message"
          />

          <button className="border bg-blue-400 w-[50vh] border-black p-2 m-2 rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
