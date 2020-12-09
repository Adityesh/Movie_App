import React from 'react';
import './Shows.css'
import Draggable from 'react-draggable';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const OnAir = React.lazy(() => import('./ShowComponents/OnAir'));
const Popular = React.lazy(() => import('./ShowComponents/Popular'))

const Shows = ({ isVisible, closeModal }) => {
    return (
        <Draggable bounds="parent" handle="strong">
            <div className="shows-modal window" style={{ display: isVisible ? 'block' : 'none' }}>
                <strong><div className="title-bar">
                    <div className="title-bar-text">A Complete Window</div>
                    <div className="title-bar-controls">
                        
                        <button aria-label="Close" onClick={() => closeModal(false)}></button>
                    </div>
                </div>
                </strong>
                <div className="window-body">
                    <Tabs>
                        <TabList>
                            <Tab>On the Air</Tab>
                            <Tab>Popular Shows</Tab>
                        </TabList>

                        <TabPanel>
                            <OnAir />
                        </TabPanel>
                        <TabPanel>
                        <Popular/>
                        </TabPanel>
                    </Tabs>
                </div>

            </div>
        </Draggable>
    )
}


export default Shows;