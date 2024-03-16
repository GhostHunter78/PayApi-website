const PricingCircle = () => {
  return (
    <>
      <svg
        className="absolute top-0 right-0 z-[-1] md:hidden"
        width="301"
        height="136"
        viewBox="0 0 301 136"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.15">
          <circle cx="390" cy="-254" r="390" fill="#36536B" />
          <circle cx="390" cy="-254" r="390" fill="#36536B" />
          <mask
            id="mask0_0_672"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="-644"
            width="780"
            height="780"
          >
            <circle cx="390" cy="-254" r="390" fill="white" />
          </mask>
          <g mask="url(#mask0_0_672)"></g>
        </g>
      </svg>
    </>
  );
};

export default PricingCircle;
