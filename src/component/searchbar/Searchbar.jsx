import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { context } from '../../context/context';

const Searchbar = () => {
    const { Search, MountainBtn, Beaches, Birds, Food } = useContext(context)

    const [searchtext, SetSearchtext] = useState("");

    return (
        <div>
            <div id="main">
                <h1 id="heading">SnapShot</h1>
                <input type="text" onChange={(event) => SetSearchtext(event.target.value)} value={searchtext} />
                <Link to="/searchresult">
                    <button onClick={() => { Search(searchtext) }}>Search</button>
                </Link>
                <div id="button">
                    <Link to="/mountain">
                        <button onClick={() => { MountainBtn() }}  >Mountain</button>
                    </Link>
                    <Link to="/beaches">
                        <button onClick={() => { Beaches() }}>Beaches</button>
                    </Link>
                    <Link to="/birds">
                        <button onClick={() => { Birds() }}>Birds</button>
                    </Link>
                    <Link to="/food">
                        <button onClick={() => { Food() }}>Food</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Searchbar;
