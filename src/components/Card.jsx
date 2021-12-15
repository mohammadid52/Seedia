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

export default Card
