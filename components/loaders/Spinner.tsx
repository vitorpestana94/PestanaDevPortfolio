export default function Spinner({ loading }: { loading: boolean }) {
  return (
    <>
      {loading && (
        <div
          role="status"
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
            flex justify-center items-center ${
              loading ? "visible" : "invisible"
            }`}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`aspect-square text-gray-200 animate-[spin_1500ms_linear_infinite] stroke-white w-11/12`}
          >
            <g clipPath="url(#clip0_2725_4752)">
              <path
                d="M10.8611 3.49621C10.2088 3.23356 9.51126 3.10196 8.80816 3.1089C8.10507 3.11585 7.41023 3.26121 6.76332 3.5367C6.1164 3.81218 5.53008 4.21238 5.03783 4.71445C4.54558 5.21653 4.15704 5.81064 3.8944 6.46287C3.36397 7.78011 3.37853 9.25412 3.93489 10.5606C4.49125 11.8671 5.54382 12.8991 6.86107 13.4295M13.1077 5.23608V5.24275M9.52775 13.7561V13.7628M12.0878 12.7096V12.7162M13.7744 10.5295V10.5362M14.1544 7.79614V7.80281"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2725_4752">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0.861084 0.462891)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </>
  );
}
