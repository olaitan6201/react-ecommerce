import CollectionsOverviewComponent from "../../components/collections-overview/collections-overview.component";
import { matchPath, matchRoutes, Route, Routes, useRoutes } from "react-router-dom";
import CollectionPage from "../collection/collection.component";

const ShopPage = () =>{ 
    console.log(useRoutes);
    return (
        <div className="shop-page">
            <Routes>
                <Route path='' element={<CollectionsOverviewComponent/>}/>
                <Route path=':category' element={<CollectionPage/>}/>
            </Routes>
        </div>
    )
}
export default ShopPage;