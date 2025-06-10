import React from "react"
import {UserType, UserProfileType} from "../../../utils/generalTypes"
import classes from "./CatalogInfo.module.css"
import firstImg from "../../../assets/images-webp/catalogs/firstImg.webp"
import alterFirstImg from "../../../assets/images-webp/catalogs/alterFirstImg.webp"
import SeeBelow from "../../SeeBelow/SeeBelow"

type CatalogInfoPropsType = {
    profile: UserType | UserProfileType | null
    status: string
    updateStatus: (statusText: string) => void
    authorizedUserId: number | null
}

const CatalogInfo: React.FC<CatalogInfoPropsType> = (props) => {
    return (
        <div className={classes.catalogInfo}>
            <div className={classes.firstContainer}>
                <div className={classes.logoText}>
                    <div className={classes.titleWhite}>КАТАЛОГ</div>
                    <div className={classes.titleYellow}>ГОТОВОЙ МЕБЕЛИ</div>
                </div>
            </div>
            <div className={classes.firstImg}><img src={firstImg} /></div>
            <div className={classes.alterFirstImg}><img src={alterFirstImg} /></div>
            <div className={classes.seeBelow}>
                <SeeBelow />
            </div>
            <div className={classes.titleBlock}>Каталог</div>
        </div>
    )
}

export default CatalogInfo;
