import * as React from 'react';

interface IDashboardHeaderProps {
}

const DashboardHeader: React.FunctionComponent<IDashboardHeaderProps> = (props) => {
  return <>
      <header className="bg-gray-900  text-white flex items-center justify-between px-4 py-5 shadow-md">
          <h1 className="text-2xl font-bold">Admin Home</h1>
          <div className="flex items-center space-x-4">
              <button className="text-white focus:outline-none">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 15v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1m0-4V8a6 6 0 1112 0v3z"
                      />
                  </svg>
              </button>
              <button className="text-white focus:outline-none">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                  </svg>
              </button>
              <button className="text-white focus:outline-none">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v3m0 4.5V21m0-10.5l-4-4m4 4l4-4M6 10h.01M6 6h.01M6 14h.01M6 18h.01M18 10h.01M18 6h.01M18 14h.01M18 18h.01"
                      />
                  </svg>
              </button>
          </div>
      </header>
  </>;
};

export default DashboardHeader;
