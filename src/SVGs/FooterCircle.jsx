const FooterCircleHome = () => {
  return (
    <>
      <svg
        className="absolute z-[0] bottom-0 left-0 w-full md:hidden"
        width="375"
        height="176"
        viewBox="0 0 375 176"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.15">
          <circle cx="188" cy="390" r="390" fill="#36536B" />
          <circle cx="188" cy="390" r="390" fill="#36536B" />
          <mask
            id="mask0_0_1794"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="-202"
            y="0"
            width="780"
            height="780"
          >
            <circle cx="188" cy="390" r="390" fill="white" />
          </mask>
          <g mask="url(#mask0_0_1794)"></g>
        </g>
      </svg>
    </>
  );
};

export default FooterCircleHome;
