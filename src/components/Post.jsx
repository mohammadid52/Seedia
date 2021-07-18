import moment from 'moment'
import React from 'react'
const Card = ({ children, className }) => {
    return (
        <div
            className={`${className} mb-8 border-1 border-gray-300 rounded-2xl light overflow-hidden`}
            style={{ borderRadius: '0.9rem !important' }}
        >
            {children}
        </div>
    )
}
const Post = ({ post }) => {
    const { user, post: _post } = post

    return (
        <Card className="profile-feed light mb-8 p-3">
            <div className="css-16j7msu light">
                <div class="flex items-center mb-8 justify-around">
                    <div class="left-col-panel col-lg-1 col-sm-12 col-md-6 col">
                        <div>
                            <img
                                src="/logo.png"
                                alt=""
                                class="profile-img-medium"
                            />
                        </div>
                    </div>
                    <div class="pl-4 left-col-panel col-lg-11 col-sm-12 col-md-6 col">
                        <h6 style={{ textAlign: 'left' }}>
                            {user.firstName} {user.lastName}
                        </h6>
                        <div style={{ display: 'inline-grid' }}>
                            <span>{user.achievement}</span>
                            <div>
                                <span className="text-gray-400 text-xs">
                                    {moment(_post.postedAt).fromNow()}
                                </span>
                                <span className="ml-2 text-gray-400 text-xs">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 24 24"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M4,12c0-0.899,0.156-1.762,0.431-2.569L6,11l2,2 v2l2,2l1,1v1.931C7.061,19.436,4,16.072,4,12z M18.33,16.873C17.677,16.347,16.687,16,16,16v-1c0-1.104-0.896-2-2-2h-4v-2v-1 c1.104,0,2-0.896,2-2V7h1c1.104,0,2-0.896,2-2V4.589C17.928,5.778,20,8.65,20,12C20,13.835,19.373,15.522,18.33,16.873z"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="left-col-panel col-lg-10 col-sm-12 col-md-6 col">
                        {_post.type === 'text' ? (
                            <p>
                                Software development is the process of
                                conceiving, specifying, designing, programming,
                                documenting, testing, and bug fixing involved in
                                creating and maintaining applications,
                                frameworks, or other software components
                            </p>
                        ) : (
                            <div>Coming soon</div>
                        )}
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="left-col-panel col-lg-8 col-sm-12 col-md-6 d-flex justify-content-between  col">
                        <div className="like-section light">
                            <button className="post-options fed">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ width: 21, height: 21 }}
                                >
                                    <path d="M20,8h-5.612l1.123-3.367c0.202-0.608,0.1-1.282-0.275-1.802S14.253,2,13.612,2H12c-0.297,0-0.578,0.132-0.769,0.36 L6.531,8H4c-1.103,0-2,0.897-2,2v9c0,1.103,0.897,2,2,2h3h10.307c0.829,0,1.581-0.521,1.873-1.298l2.757-7.351 C21.979,12.239,22,12.12,22,12v-2C22,8.897,21.103,8,20,8z M4,10h2v9H4V10z M20,11.819L17.307,19H8V9.362L12.468,4l1.146,0 l-1.562,4.683c-0.103,0.305-0.051,0.64,0.137,0.901C12.377,9.846,12.679,10,13,10h7V11.819z"></path>
                                </svg>
                                <span className="item-label">Like</span>
                            </button>
                        </div>
                        <div className="like-section light">
                            <button className="post-options fed">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    t="1569682881658"
                                    viewBox="0 0 1024 1024"
                                    version="1.1"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ width: 21, height: 21 }}
                                >
                                    <defs></defs>
                                    <path d="M573 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40zM293 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z"></path>
                                    <path d="M894 345c-48.1-66-115.3-110.1-189-130v0.1c-17.1-19-36.4-36.5-58-52.1-163.7-119-393.5-82.7-513 81-96.3 133-92.2 311.9 6 439l0.8 132.6c0 3.2 0.5 6.4 1.5 9.4 5.3 16.9 23.3 26.2 40.1 20.9L309 806c33.5 11.9 68.1 18.7 102.5 20.6l-0.5 0.4c89.1 64.9 205.9 84.4 313 49l127.1 41.4c3.2 1 6.5 1.6 9.9 1.6 17.7 0 32-14.3 32-32V753c88.1-119.6 90.4-284.9 1-408zM323 735l-12-5-99 31-1-104-8-9c-84.6-103.2-90.2-251.9-11-361 96.4-132.2 281.2-161.4 413-66 132.2 96.1 161.5 280.6 66 412-80.1 109.9-223.5 150.5-348 102z m505-17l-8 10 1 104-98-33-12 5c-56 20.8-115.7 22.5-171 7l-0.2-0.1C613.7 788.2 680.7 742.2 729 676c76.4-105.3 88.8-237.6 44.4-350.4l0.6 0.4c23 16.5 44.1 37.1 62 62 72.6 99.6 68.5 235.2-8 330z"></path>
                                    <path d="M433 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z"></path>
                                </svg>
                                <span className="item-label">Comment</span>
                            </button>
                        </div>
                        <div className="like-section light">
                            <button className="post-options fed">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ width: 21, height: 21 }}
                                >
                                    <g>
                                        <path
                                            fill="none"
                                            d="M0 0h24v24H0z"
                                        ></path>
                                        <path d="M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V2.5L23.5 11 13 19.5V14zm-2-2h4v3.308L20.321 11 15 6.692V10h-2a7.982 7.982 0 0 0-6.057 2.773A10.988 10.988 0 0 1 11 12z"></path>
                                    </g>
                                </svg>
                                <span className="item-label">Share</span>
                            </button>
                        </div>
                        <div className="like-section light">
                            <button className="post-options fed">
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ width: 21, height: 21 }}
                                >
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                                <span className="item-label">Send</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Post
