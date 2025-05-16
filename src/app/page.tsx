"use client"; // Mark this as a Client Component

import React from 'react';
// import type { Metadata } from 'next'; // No longer exporting metadata here
// import { useFarcasterContext } from '@/hooks/useFarcasterContext'; 
// import { DebugDisplay } from '@/components/DebugDisplay'; 

/* No longer exporting metadata from this client component
export const metadata: Metadata = {
  title: 'GOOD CRYPTO',
};
*/

// A simple chevron right icon - adjusted size
const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5} // Adjusted strokeWidth for a smaller icon if needed, or keep as is
    stroke="currentColor"
    className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" // w-4 h-4
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

export default function HomePage() {
  // const { data: farcasterContext, isLoading: isLoadingContext, error: contextError } = useFarcasterContext();

  return (
    <div className="h-screen overflow-y-hidden bg-white flex font-serif text-black fixed inset-0">
      {/* Left gutter: Mobile 20px, Desktop 80px */}
      <div className="w-[20px] md:w-[80px] flex-shrink-0"></div>

      {/* Content area: flex-grow for remaining space, responsive right padding for symmetry */}
      <div className="flex flex-col justify-between flex-grow pt-32 pb-10 md:pt-16 md:pb-16 lg:pt-20 lg:pb-24 pr-[20px] md:pr-[80px]">
        {/* This div now directly contains the two sections. */}
        <div className="flex-grow">

          {/* Section 1: Good Crypto & Cast it */}
          <div className="flex items-start mb-8 md:mb-12"> {/* Section 1 wrapper */}
            {/* Accent Bar for Section 1 */}
            <div
              className="bg-[#FE5A51] w-[8px] md:w-[12px] self-stretch mr-3 md:mr-6 flex-shrink-0"
            ></div>
            {/* Text Content for Section 1 */}
            <div className="flex-grow">
              <h1 className="text-[2.2rem] leading-tight sm:text-[2.5rem] md:text-6xl lg:text-7xl xl:text-8xl font-bold break-words font-garamond">
                Good Crypto
              </h1>
              {/* Container for tagline and "+ cast it" button - Ensure button is pushed to the right */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-base text-gray-500 md:text-lg lg:text-xl break-words">
                  a mini app studio by{' '}
                  <a
                    href="https://warpcast.com/ccarella.eth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 hover:underline"
                  >
                    ccarella.eth
                  </a>
                </p>
                <button
                  type="button"
                  className="text-[#FE5A51] font-semibold text-sm hover:underline flex-shrink-0 text-right"
                >
                  + cast it
                </button>
              </div>
            </div>
          </div>

          {/* Section 2: Upcoming Drops & Save it */}
          <div className="flex items-start"> {/* Section 2 wrapper */}
            {/* Accent Bar for Section 2 */}
            <div
              className="bg-[#FE5A51] w-[8px] md:w-[12px] self-stretch mr-3 md:mr-6 flex-shrink-0"
            ></div>
            {/* Text Content for Section 2 */}
            <div className="flex-grow">
              {/* "Upcoming Drops" header */}
              <p className="text-lg font-semibold text-black mb-2 md:text-left">
                Upcoming Drops
              </p>
              {/* Container for save button and notification text - Ensure button is pushed to the right */}
              <div className="flex items-center justify-between">
                <p className="text-base md:text-lg lg:text-xl text-gray-500">
                  get notified of new releases
                </p>
                <button
                  type="button"
                  className="text-[#FE5A51] font-semibold text-sm hover:underline flex-shrink-0 text-right"
                >
                  + save it
                </button>
              </div>
            </div>
          </div>
        </div> {/* End of the flex-grow container for the two sections */}

        {/* Footer content: Padding removed, new structure for accent line */}
        <div className="mt-12 md:mt-16">
          <hr className="border-t border-gray-300 w-[60px] mb-4" />
          {/* Flex container for accent bar and footer text */}
          <div className="flex items-start">
            {/* Accent Bar for Footer */}
            <div
              className="bg-[#FE5A51] w-[8px] md:w-[12px] self-stretch mr-3 md:mr-6 flex-shrink-0"
            ></div>
            {/* Text Content for Footer */}
            <div>
              <p className="text-sm text-gray-500">A Good Crypto Project</p>
            </div>
          </div>
        </div>
      </div>

      {/* Debug Display for Farcaster Context (currently commented out) */}
      {/* 
      <DebugDisplay 
        title="Farcaster Context" 
        data={farcasterContext}
        isLoading={isLoadingContext}
        error={contextError}
      />
      */}
    </div>
  );
}
