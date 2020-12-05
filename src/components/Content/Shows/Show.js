import React from 'react';
import './Shows.css'
import Draggable from 'react-draggable';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Shows = ({ isVisible, closeModal }) => {
    return (
        <Draggable bounds="parent">
            <div className="shows-modal window" style={{ display: isVisible ? 'block' : 'none' }}>
                <div className="title-bar">
                    <div className="title-bar-text">A Complete Window</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close" onClick={() => closeModal(false)}></button>
                    </div>
                </div>
                <div className="window-body">
                    <Tabs>
                        <TabList>
                            <Tab>Title 1</Tab>
                            <Tab>Title 2</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>
                </div>

            </div>
        </Draggable>
    )
}


export default Shows;