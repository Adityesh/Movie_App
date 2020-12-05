import React, { useState } from 'react';
import './Movies.css';
import Draggable from 'react-draggable';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Movies = ({ isVisible, closeModal }) => {



    return (
        <Draggable bounds="parent">


            <div className="movies-modal window" style={{ display: isVisible ? 'block' : 'none' }}>

                <div class="title-bar">
                    <div class="title-bar-text">A Window With Tabs and Groups</div>
                    <div class="title-bar-controls">
                        
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


export default Movies;