import React from 'react'
import Route from "react-router-dom/es/Route";
import Notfound from "../common/NotFound";
import AboutContainer from "../about/AboutContainer";
import HeartbeatContainer from "../heartbeat/HeartbeatContainer";
import GraphContainer from "../graphs/GraphContainer";
import PdfExportContainer from "../pdf_export/PdfExportContainer";
import ContactContainer from "../email_contact/ContactContainer";
import {Switch} from "react-router-dom";

const Main = () => (
    <main>
        <Switch> {/*Now all children and children of children, can access redux 'itemsStore'*/}
            <Route exact path="/" component={AboutContainer}/>
            <Route exact path="/heartbeats" component={HeartbeatContainer} />
            <Route exact path="/graphs" component={GraphContainer} />
            <Route path="/pdf" component={PdfExportContainer} />
            <Route path="/contact" component={ContactContainer} />
            <Route component={Notfound} /> {/* a <Route /> with no path will always be rendered */}
        </Switch>
    </main>
)

export default Main