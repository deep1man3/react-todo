import React, { FC } from 'react';
import Appbar from "../../components/Appbar";
import {LayoutProperties} from "../../types/layouts.types";

const DefaultLayout: FC<LayoutProperties> = ({ Page, route }) => {
    return (
        <div>
            <Appbar>
                DefaultLayout
            </Appbar>
            <Page route={route}/>
        </div>
    )
}

export default DefaultLayout