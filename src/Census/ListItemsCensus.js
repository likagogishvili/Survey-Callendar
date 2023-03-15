
import { dataCansus } from './data'
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
                                            <p>{w.week1 ? 'x' : ''}</p>
                                            <p>{w.week2 ? 'x' : ''}</p>
                                            <p>{w.week3 ? 'x' : ''}</p>
                                            <p>{w.week4 ? 'x' : ''}</p>
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