import React, { useState } from "react"
import { Link } from "react-router-dom"

import NavLinks from "./NavLinks"
import MainHeader from "./MainHeader"
import Backdrop from "./Backdrop"
import SideDrawer from "./SideDrawer"

function MainNavigation(props) {

    const [drawerOpen, setDrawerOpen] = useState(false)

    function openDrawer() {
        setDrawerOpen(true)
    }

    function closeDrawer() {
        setDrawerOpen(false)
    }

    return (<React.Fragment>

        {drawerOpen && <Backdrop onClick={closeDrawer} />}

        <SideDrawer show={drawerOpen} onClick={closeDrawer}>
            <nav>
                <NavLinks />
            </nav>
        </SideDrawer>

        <MainHeader>
            <h1 onClick={openDrawer}>TEST</h1>
        </MainHeader>



    </React.Fragment>
    )
}

export default MainHeader