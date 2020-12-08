import React from 'react';
import './Movies.css';
import Draggable from 'react-draggable';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const NowPlaying = React.lazy(() => import('./MovieComponents/NowPlaying'));
const Popular = React.lazy(() => import('./MovieComponents/Popular'));
const Search = React.lazy(() => import('./MovieComponents/SearchMovie'));


const Movies = ({ isVisible, closeModal }) => {



    return (
        <Draggable bounds="parent" handle="strong">


            <div className="movies-modal window" style={{ display: isVisible ? 'block' : 'none' }}>
                <strong>
                <div class="title-bar">
                    <div class="title-bar-text">Movies</div>
                    <div class="title-bar-controls">
                        
                        <button aria-label="Close" onClick={() => closeModal(false)}></button>
                    </div>
                </div>
                </strong>

                <div className="window-body">
                    <Tabs>
                        <TabList>
                            <Tab>Now Playing</Tab>
                            <Tab>Popular Movies</Tab>
                            <Tab>Search</Tab>
                        </TabList>

                        <TabPanel>
                            <NowPlaying/>
                        </TabPanel>
                        <TabPanel>
                            <Popular />
                        </TabPanel>
                        <TabPanel>
                            <Search />
                        </TabPanel>
                    </Tabs>
                </div>


            </div>

        </Draggable>
    )
}


export default Movies;