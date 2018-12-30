import React from 'react'
import Aux from '../../hoc/Aux.js';
import clasess from './Layout.module.css';



const Layout = (props) =>(
    <Aux>
        <div> Toolbar,Sidedrawer, Backdrop  </div>
            <main className={clasess.Content}>
                {props.children}
            </main>
    </Aux>

);

export default Layout;