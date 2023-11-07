import { useState } from 'react';

import './Tabs.scss';

interface TabsInt {
    labels: Array<string>,
    tabContent: any,
}

function Tabs({ labels, tabContent }: TabsInt) {
    const [isActiveTab, setIsActiveTab] = useState(labels[0]);

    const toggleTab = (tab: string): void => { setIsActiveTab(tab) };

    return (
        <div className='tabs'>
            <ul className='tabs__buttons'>
                {labels.map((item) => (
                    <li key={item} className='tabs__item'>
                        <button className='tab' onClick={() => toggleTab(item)}>
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
            <ul className='tabs__content '>
                {tabContent.map((item: any, index: any) => (
                    <li key={index} className={`tabs__container container ${isActiveTab === labels[index] ? 'tabs__container_active' : ''}`}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tabs;