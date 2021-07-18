const ListCard = () => {
    return (
        <div className="justify-center  flex col-lg-4 col-md-4 col-sm-12 float-left row">
            <div className="float-left rounded-lg card-width  col">
                <div className="card-body-start card card-body">
                    <div className=" col-sm-12  card-title"></div>
                    <div>
                        <div className="text-center col">
                            <div>
                                <img
                                    src="/logo.png"
                                    alt="13RMS"
                                    className="profile-img-large"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" mt-3 p-0 text-center col">
                            <h5 className="font-semibold">Sample One</h5>
                            <p
                                style={{
                                    color: 'rgb(120, 113, 113)',
                                }}
                            >
                                <span>Software Engineer</span>
                                <span> at </span>
                                <span>Google</span>
                            </p>
                        </div>
                        <div>
                            <div className="text-center col">
                                <p
                                    style={{
                                        color: 'rgb(120, 113, 113)',
                                    }}
                                >
                                    Based on your profile
                                </p>
                            </div>
                        </div>
                        <div className="text-center contact col">
                            <button className="contact-button btn btn-secondary">
                                Make a connection
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListCard
