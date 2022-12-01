import ChildOfTable from "./ChildOfTable";
import "./Table.css";
import { useSelector } from "react-redux";
function Table(props) {
  const language = useSelector((state) => state.currentLanguage);
  const d = new Date();
  let month = d.getMonth() + 1;

  var months;
  if (!language) {
    months = [
      "იანვარი",
      "თებერვალი",
      "მარტი",
      "აპრილი",
      "მაისი",
      "ივნისი",
      "ივლისი",
      "აგვისტო",
      "სექტემბერი",
      "ოქტომბერი",
      "ნოემბერი",
      "დეკემბერი",
    ];
  } else {
    months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  }

  const listItems = props.renderer?.filter((i) => i.showItem === true)?.map((item, index) => (
      <ChildOfTable
        index={index + 1}
        types={props.types}
        item={item}
        key={item.id}
        selectedMonth={props.selectedMonth}
      />
    ));



  function hideElement(id) {
    if (props.selectedMonth === "") return "";
    if (parseInt(props.selectedMonth) === id) {
      return "";
    } else {
      return "none";
    }
  }

  function highlightCurrentMonth(id) {
    if (month === id) return "currentMonth";
    else {
      return "";
    }
  }

  const th = months.map((item, index) => (
    <th
      key={index}
      className={highlightCurrentMonth(index + 1)}
      style={{ display: hideElement(index + 1) }}
    >
      {item}
    </th>
  ));

  return (
    <table
      className={
        props.selectedMonth.length !== 0 && props.selectedMonth.length !== "m"
          ? "w-50"
          : ""
      }
      style={{ margin: "1%" }}
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
            {!language ? "გამოკვლევის დასახელება" : "Fieldwork name "}
          </th>
          <th style={{ display: hideElement(1) }}>
            <div className={"weeks"}>
              <p>I</p>
              <p>II</p>
              <p>III</p>
              <p>IV</p>
            </div>
          </th>
          <th style={{ display: hideElement(2) }}>
            <div className="weeks">
              <p>I</p>
              <p>II</p>
              <p>III</p>
              <p>IV</p>
            </div>
          </th>
          <th style={{ display: hideElement(3) }}>
            <div className="weeks">
              <p>I</p>
              <p>II</p>
              <p>III</p>
              <p>IV</p>
            </div>
          </th>
          <th style={{ display: hideElement(4) }}>
            <div className="weeks">
              <p>I</p>
              <p>II</p>
              <p>III</p>
              <p>IV</p>
            </div>
          </th>
          <th style={{ display: hideElement(5) }}>
            <div className="weeks">
              <p>I</p>
              <p>II</p>
              <p>III</p>
              <p>IV</p>
            </div>
          </th>
          <th style={{ display: hideElement(6) }}>
            <div className="weeks">
              <p>I</p>
              <p>II</p>
              <p>III</p>
              <p>IV</p>
            </div>
          </th>
          <th style={{ display: hideElement(7) }}>
            <div className="weeks">
              <p>I</p>
              <p>II</p>
              <p>III</p>
              <p>IV</p>
            </div>
          </th>
          <th style={{ display: hideElement(8) }}>
            <div className="weeks">
              <p>I</p>
              <p>II</p>
              <p>III</p>
              <p>IV</p>
            </div>
          </th>
          <th style={{ display: hideElement(9) }}>
            <div className="weeks">
              <p>I</p>
              <p>II</p>
              <p>III</p>
              <p>IV</p>
            </div>
          </th>
          <th style={{ display: hideElement(10) }}>
            <div className="weeks">
              <p>I</p>
              <p>II</p>
              <p>III</p>
              <p>IV</p>
            </div>
          </th>
          <th style={{ display: hideElement(11) }}>
            <div className="weeks">
              <p>I</p>
              <p>II</p>
              <p>III</p>
              <p>IV</p>
            </div>
          </th>
          <th style={{ display: hideElement(12) }}>
            <div className="weeks">
              <p>I</p>
              <p>II</p>
              <p>III</p>
              <p>IV</p>
            </div>
          </th>
        </tr>
      </tbody>

      {listItems}
    </table>
  );
}
export default Table;
