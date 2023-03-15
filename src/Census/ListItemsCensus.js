
import { dataCansus } from './data'

import "../LandingPage/LandingPage.css";
function ListItemsCensus(props) {
    function hideElement(id) {
        if (props.selectedMonth === "") return "";
        if (parseInt(props.selectedMonth) === id) {
            return "";
        } else {
            return "none";
        }
    }

    return (
        dataCansus.map((i, index) => {
            return (
                <tbody key={index} >
                    <tr className="tableHeader">
                        <th>{index + 1}</th>
                        <th className="tableHeaderName">
                            {props.regions[index]}
                        </th>
                        {
                            i.map((w, index) => {
                                return (
                                    <th style={{ display: hideElement(index + 1) }}>
                                        <div className={"weeks"}>
                                            {w.week1 ? <div className='tableItem tableItem2'></div> : <div></div>}
                                            {w.week2 ? <div className='tableItem tableItem2'></div> : <div></div>}
                                            {w.week3 ? <div className='tableItem tableItem2'></div> : <div></div>}
                                            {w.week4 ? <div className='tableItem tableItem2'></div> : <div></div>}
                                        </div>
                                    </th>
                                )
                            })
                        }
                    </tr>
                </tbody>
            )
        })


    )
}

export default ListItemsCensus