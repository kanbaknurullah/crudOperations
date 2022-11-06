import './panel-top.css';
import back from '../../assets/images/back.png'
import bell from '../../assets/images/bell.png';

const PanelTop = () => {
    return(
        <div className="panel-top">
            <img src={back} alt='icon'/>
            <img src={bell} alt='icon'/>
        </div>
    )
}
export default PanelTop;