import React from 'react';
import './People.css';
import Draggable from 'react-draggable';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Popular = React.lazy(() => import('./PeopleComponents/Popular'));
const SearchPeople = React.lazy(() => import('./PeopleComponents/Search'));

const People = ({ isVisible, closeModal }) => {

    return (
        <Draggable bounds="parent" handle="strong">


            <div className="people-modal window" style={{ display: isVisible ? 'block' : 'none' }}>
                <strong>
                <div className="title-bar">
                    <div className="title-bar-text">Movies</div>
                    <div className="title-bar-controls">
                        
                        <button aria-label="Close" onClick={() => closeModal(false)}></button>
                    </div>
                </div>
                </strong>

                <div className="window-body">
                    <Tabs>
                        <TabList>
                            
                            <Tab>Popular</Tab>
                            <Tab>Search</Tab>
                        </TabList>

                        <TabPanel>
                            <Popular/>
                        </TabPanel>
                        <TabPanel>
                            <SearchPeople/>
                        </TabPanel>
                    </Tabs>
                </div>


            </div>

        </Draggable>
    )
}


export default People;