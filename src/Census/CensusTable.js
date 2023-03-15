import ListItemsCensus from "./ListItemsCensus";
import { regions } from "./data";
function CensusTable(props) {
    function hideElement(id) {
        if (props.selectedMonth === "") return "";
        if (parseInt(props.selectedMonth) === id) {
            return "";
        } else {
            return "none";
        }
    }

    const th = props.months.map((item, index) => (
        <th
            key={index}
            style={{ display: hideElement(index + 1) }}
        >
            {item}
        </th>
    ));
    let weeksInMonth = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <table
            style={{ margin: "1%", width: ` ${props.selectedMonth.length !== 0 && props.selectedMonth.length !== "m" ? "40%" : '98%'}` }}
        >
            <tbody className="stick">
                <tr className="tableHeader">
                    <th></th>
                    <th className="tableHeaderName"> </th>
                    {th}
                </tr>
                <tr className="tableHeader">
                    <th>N</th>
                    <th className="tableHeaderName">
                        {!props.language ? "რეგიონის დასახელება" : "Region name "}
                    </th>
                    {
                        weeksInMonth.map(element => {
                            return (<th style={{ display: hideElement(element) }}>
                                <div className={"weeks"}>
                                    <p>I</p>
                                    <p>II</p>
                                    <p>III</p>
                                    <p>IV</p>
                                </div>
                            </th>)

                        })
                    }


                </tr>
            </tbody>
            <ListItemsCensus regions={props.language ? regions['en'] : regions['ka']} selectedMonth={props.selectedMonth} />
        </table>
    )


}

export default CensusTable