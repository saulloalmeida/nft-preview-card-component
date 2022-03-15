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
          Equilibrium #3429 Our Equilibrium collection promotes balance and
          calm. 0.041 ETH 3 days left Creation of Jules Wyvern
        </p>
        <span
          className={`text-white-hsl text-md font-outfit flex-wrap text-center`}
        >
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </span>
        <div className="text-xs pt-3 text-white-hsl text-center">
          Challenge by Frontend Mentor . Coded by{" "}
          <a href="#" className="text-blue-500 text-center">
            {"Saullo Almeida"}
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default App;
