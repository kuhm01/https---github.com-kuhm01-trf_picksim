import './Sidebar.css';
import useLegendPickStore from '../../store/legend_pick_store';

function Sidebar() {

    const { nonePick } = useLegendPickStore(state => state);

    return (
        <div className='Sidebar'>
            <p>다음 전설 : {nonePick}</p>
        </div>
    );
}

export default Sidebar;