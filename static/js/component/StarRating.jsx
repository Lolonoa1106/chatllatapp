const StarRating = ({ rating = 0, outOf = 5 }) => {
    return (
      <div className="flex gap-1">
        {[...Array(outOf)].map((_, index) => (
            <>
                <svg 
                    width={14} 
                    height={13} 
                    viewBox="0 0 14 13" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    key={index}
                    className={`w-4 h-4 ${
                    index < Math.floor(rating)
                        ? 'text-yellow-400'
                        : 'text-gray-500'
                    }`}
                >
                    <path d="M2.93133 12.9709L4.00589 8.34392L0.416016 5.23292L5.15245 4.82192L7.00008 0.458984L8.8477 4.82192L13.5841 5.23292L9.99427 8.34392L11.0688 12.9709L7.00008 10.5161L2.93133 12.9709Z" fill="currentColor" />
                </svg>
                {/* <FaStar
                    key={index}
                    className={`w-5 h-5 ${
                    index < Math.floor(rating)
                        ? 'text-yellow-400'
                        : 'text-gray-500'
                    }`}
                /> */}
            </>
        ))}
      </div>
    );
  };
  
  export default StarRating;