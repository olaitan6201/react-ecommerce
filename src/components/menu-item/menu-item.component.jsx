import { useNavigate } from "react-router-dom";
import './menu-item.styles.scss';

const MenuItem = props => {
    const {title, imageUrl, size} = props;
    const navigateTo = useNavigate();
    return (
        <div 
            className={`${size} menu-item`}
            onClick={() => (navigateTo(`shop/${title}`))}
        >
            <div
                style={
                    {backgroundImage: `url(${imageUrl})`}
                }
                className="background-image"
            />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">shop now</span>
            </div>
        </div>
    );
}

export default MenuItem;