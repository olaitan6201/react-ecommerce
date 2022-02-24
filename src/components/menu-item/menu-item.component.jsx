import { useNavigate as navigateTo } from "react-router-dom";
import './menu-item.styles.scss';

const MenuItem = props => {
    const {title, imageUrl, size, linkUrl} = props;
    return (
        <div 
            className={`${size} menu-item`}
            onClick={()=>navigateTo(`${linkUrl}`)}
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