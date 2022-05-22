import React, { useState } from 'react';
import NavBar from '../component/NavBar';

import $ from 'jquery';

function News(props) {

    function toggledrawer(params) {
            $('#sidebar').toggleClass('active');
    }
    return (
        <div class="wrapper">
            <NavBar/>
            <div id="content" >
                <button onClick={toggledrawer}>Toogle</button>
            </div>
        </div>
    );
}

export default News;