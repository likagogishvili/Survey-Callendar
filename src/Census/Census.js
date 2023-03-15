import Header from "../Header/Header"
import { useState } from "react";
import { useSelector } from "react-redux";
import * as items from './data'
import CensusTable from "./CensusTable";
function Census() {
    const [selectedMonth, setSelectedMonth] = useState("");
    if (selectedMonth === "m") {
        reload();
    }
    function reload() {
        window.location.reload(false);
    }

    const language = useSelector((state) => state.currentLanguage);
    return (
        <div>
            <Header showHeader={false} />
            <div className="pb-3 pt-3 mx-3">
                <select
                    className="sel"
                    onChange={(e) => setSelectedMonth(e.target.value)}
                >
                    <option value="m" onSelect={reload}>
                        {!language ? "თვე" : "Month"}
                    </option>
                    {
                        language ?
                            items.months['en'].map((item, index) => (
                                <option key={index} value={index + 1}>{item}</option>
                            )) :
                            items.months['ka'].map((item, index) => (
                                <option key={index} value={index + 1}>{item}</option>
                            ))

                    }
                </select>
            </div>
            <CensusTable
                months={language ? items.months['en'] : items.months['ka']}
                selectedMonth={selectedMonth}
                language={language}
            />
        </div>
    )

}

export default Census