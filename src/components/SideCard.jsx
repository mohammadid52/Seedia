import React from 'react'
import Card from 'components/Card'

const SideCard = () => {
  return (
    <Card className="news-panel-start light p-4">
      <div className="mb-8">
        <div className="visitors pb-4">
          <div className="flex justify-between mb-2 items-center font-semibold text-xs italic tracking-wide">
            13RMS News
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="col-md-12 text-left view-all cursor-pointer col-sm-6 float-right">
            <ul className="p-0">
              <li className="mb-2 pl-2">
                <h6 className="italic text-xs font-semibold mb-1 uppercase normal-hover">
                  WHO sets global vaccination goals
                </h6>
                <p className="text-gray-500 uppercase text-xs italic">
                  Top news • 54,460 readers
                </p>
              </li>
              <li className="mb-2 pl-2 ">
                <h6 className="italic text-xs font-semibold mb-1 uppercase normal-hover">
                  WHO sets global vaccination goals
                </h6>
                <p className="text-gray-500 uppercase text-xs italic">
                  Top news • 54,460 readers
                </p>
              </li>
              <li className="mb-2 pl-2">
                <h6 className="italic text-xs font-semibold mb-1 uppercase normal-hover">
                  WHO sets global vaccination goals
                </h6>
                <p className="text-gray-500 uppercase text-xs italic">
                  Top news • 54,460 readers
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default SideCard
