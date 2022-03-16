const IconTimer = () => {
  return (
    <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
        fill="#8BACD9"
      />
    </svg>
  );
};
const IconEthereum = () => {
  return (
    <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
        fill="#00FFF8"
      />
    </svg>
  );
};
const ImageAvatar = () => {
  return (
    <img
      className="w-16 h-16 border border-white rounded-full"
      src="../assets/images/avatar.jpg"
      alt=""
    />
  );
};

function App() {
  return (
    <div
      className={`
    bg-darkblue-main-bg min-h-screen flex flex-col justify-center items-center
  `}
    >
      <div
        className={`
        flex flex-col justify-center items-center
        bg-darkblue-card-bg p-5 m-7 rounded-xl shadow-md
        sm:w-96
        xl:w-96
      `}
      >
        <img
          src="../assets/images/image-equilibrium.jpg"
          alt="qr code image"
          className={`
        rounded-xl w-90 h-90
        `}
        />
        <p
          className={`text-white-hsl text-lg font-bold pt-4 font-outfit text-center`}
        >
          Equilibrium #3429
        </p>
        <span
          className={`text-soft-blue text-md font-outfit flex-wrap text-center`}
        >
          Our Equilibrium collection promotes balance and calm.
        </span>
        <div className={`flex flex-row justify-between w-full`}>
          <div className={`flex flex-row space-x-2`}>
            <IconEthereum />
            <span className={`text-cyan-hsl`}>0.041 ETH </span>
          </div>
          <div className={`flex flex-row space-x-2`}>
            <IconTimer />
            <span className={`text-soft-blue`}> 3 days left</span>
          </div>
        </div>
        <hr className="w-full m-3" />
        <div className="flex flex-row items-center pt-3 text-soft-blue">
          <ImageAvatar />
          <p className="text-soft-blue text-md font-outfit flex-wrap text-center ml-10">
            Creation of <span className="text-white-hsl"> Saullo Almeida</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
