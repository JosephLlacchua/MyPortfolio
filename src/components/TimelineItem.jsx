import PropTypes from "prop-types";

export const TimelineItem = ({ Icon, date, title, description }) => {
    return (
        <div className="flex items-start mb-8 md:pl-12 md:ml-6">
            <div className="flex-shrink-0 mr-4 relative top-2">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary text-background2 rounded-full">
                    <Icon size={26} />
                </div>
            </div>
            <div className='ml-2'>
                <div className="flex items-center mb-2">
                    <h3 className="text-xl font-semibold text-primary">{title}</h3>
                    <span className="ml-4 text-sm text-secondary">{date}</span>
                </div>
                <p className="text-text md:text-lg">{description}</p>
            </div>
        </div>
    );
};

TimelineItem.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
