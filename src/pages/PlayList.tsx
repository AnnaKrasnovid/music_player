import { useOutletContext } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import Songs from '../components/Songs/Songs';
import Collections from '../components/Collections/Collections';

function PlayList() {
    //@ts-ignore
    const [closeModal, isActive] = useOutletContext();
    return (
        <div className='container' style={{position:'relative', width:'100%', overflow:'hidden'}}>
            <Songs isActive={isActive}/>
            <Collections closeModal={closeModal} isActive={isActive} />
        </div>
    );
};

export default PlayList;