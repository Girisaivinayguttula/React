const Skimmer = () => {
    return (
        <div className="res-container">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="resBody skeleton">
                    <div className="skeleton-img" />
                    <div className="skeleton-text short" />
                    <div className="skeleton-text medium" />
                    <div className="skeleton-text long" />
                </div>
            ))}
        </div>
    );
};

export default Skimmer;
