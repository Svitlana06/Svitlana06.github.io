

import {Outlet} from "react-router-dom";
import {HeaderPage} from "../../pages/header.page";

const MainLayout = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};