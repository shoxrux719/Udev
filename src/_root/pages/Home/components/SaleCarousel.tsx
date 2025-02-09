const SaleCarousel: React.FC = () => {
    return (
        <div className="carousel-container">
          <div className="tape tape-black">
            {Array.from({ length: 30 }).map((_, index) => (
              <span key={index} className="tape-text">
                CHEGIRMA
              </span>
            ))}
          </div>
          <div className="tape tape-green">
            {Array.from({ length: 30 }).map((_, index) => (
              <span key={index} className="tape-text">
                CHEGIRMA
              </span>
            ))}
          </div>
        </div>
      );
    };
       
  
  export default SaleCarousel;