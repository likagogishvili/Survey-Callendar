import "../LandingPage.css";

function ChildOfTable(props) {
  
  const findIndexByType = (type) => {
    return props.types.findIndex((elm) => elm === type);
  };

  const returnElmStyle = (single = null) => {
    let index = findIndexByType(single.type);
    return !single.type || index === -1
      ? `tableItem`
      : `tableItem tableItem${index}`;
  };

  const months = props.item.months.filter((month) => month.show === true).map((i) => (
    <th key={i.id} >
      <div className="weeks">
        {i.weeks?.map((single) => (
          <div key={Math.random()} className={returnElmStyle(single)}></div>
        ))}
      </div>
    </th>
  ));

  return (
    <tbody>
      <tr className="tableHeader">
        <th>{props.index}</th>
        <th className="tableHeaderName">{props.item.title}</th>
        {months}
      </tr>
    </tbody>
  );
}

export default ChildOfTable;
