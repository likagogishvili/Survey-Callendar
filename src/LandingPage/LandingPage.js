import Table from "./table/Table";
import "./LandingPage.css";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
function LandingPage({ renderer, Setrenderer, types, namesArray }) {
  const language = useSelector((state) => state.currentLanguage);
  const [itemClicked, SetItemClicked] = useState({});
  const [selectedMonth, setSelectedMonth] = useState("");
  let params = useParams();
  let navigate = useNavigate();

  let typeLocal = [];
  if (!language) {
    typeLocal = ["ყოველთვიური", "კვარტალური", "წლიური", "ერთდროული", "ყველა"];
  } else {
    typeLocal = ["Monthly", "Quarterly", "Annual", "Simultaneous", "All"];
  }

  if (selectedMonth === "m") {
    reload();
  }
  function reload() {
    window.location.reload(false);
  }

  useEffect(() => {
    if (selectedMonth) {
      Setrenderer((current) =>
        current.map((item) => {
          item.months.map((single) => {
            if (single.id === parseInt(selectedMonth)) {
              single.show = true;
            } else {
              single.show = false;
            }
            return single;
          });
          return item;
        })
      );
    }
    // eslint-disable-next-line
  }, [selectedMonth]);

  useEffect(() => {
    // eslint-disable-next-line
    for (const [index, [key, value]] of Object.entries(
      Object.entries(itemClicked)
    )) {
      if (value) {
        Setrenderer((current) =>
          current.map((item, index) => {
            let hide = item.months.map((month) =>
              month.weeks.some((week) => week.name === key)
            );
            item.id = index + 1;

            item.showItem = hide.some((i) => i === true);

            return item;
          })
        );
      }
    }

    Setrenderer((current) =>
      current.map((item) => {
        item.months.map((single) => {
          if (selectedMonth.length !== 0) {
            if (single.id !== parseInt(selectedMonth)) {
              single.weeks.map((week) => {
                week.type = null;
                return week;
              });
            }
          }
          return single;
        });
        return item;
      })
    );

    // eslint-disable-next-line
  }, [itemClicked]);

  function cross(i) {
    if (Object.keys(itemClicked).length === 0) {
      return "h6 pt-2 px-1";
    }
    if (i === false) {
      return "h6 pt-2 px-1 crossed";
    } else {
      return "h6 pt-2 px-1";
    }
  }

  //months
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


  ///redirect to census page
  function RedirectToCensusPage() {
    let url = window.location.pathname;
    if (!url.includes("census")) {
      if (params.lang) {
        // eslint-disable-next-line
        navigate(url + "/census");
      } else {
        // eslint-disable-next-line
        navigate(url + "ka" + "/census");
      }
    }
  }


  return (
    <div>
      <Header showHeader = {true}/>
      <div className="fs-5 m-1 mt-5 mb-4 row">
      <button type="button" className="btn mx-3 mb-3" onClick={RedirectToCensusPage} style={{width:'fit-content', backgroundColor:'#735773', color:'#fff'}}>{language ? "Population Census 2024" : "მოსახლეობის 2024 საყოველთაო აღწერა"} </button>

        <p style={{ marginLeft: "0.2%" }}>
          {language ? "Periodicity" : "პერიოდულობის აღნიშვნა"}
        </p>

        <div className="d-flex text-center selectSmall pt-3">
          <div
            className="boxes"
            onClick={(e) =>
              SetItemClicked({
                ...itemClicked,
                a: true,
                b: false,
                c: false,
                d: false,
              })
            }
          >
            <div className="text-center d-flex justify-center boxes1"></div>
            <p className={cross(itemClicked.a)}>{typeLocal[0]}</p>
          </div>
          <div
            className="boxes"
            onClick={(e) =>
              SetItemClicked({
                ...itemClicked,
                a: false,
                b: true,
                c: false,
                d: false,
              })
            }
          >
            <div className=" d-flex mx-2 px-2 boxes2"></div>
            <p className={cross(itemClicked.b)}>{typeLocal[1]}</p>
          </div>
          <div
            className="boxes"
            onClick={(e) =>
              SetItemClicked({
                ...itemClicked,
                a: false,
                b: false,
                c: true,
                d: false,
              })
            }
          >
            <div className=" d-flex mx-2 px-2 boxes3"></div>
            <p className={cross(itemClicked.c)}>{typeLocal[2]}</p>
          </div>

          <div
            className="boxes"
            onClick={(e) =>
              SetItemClicked({
                ...itemClicked,
                a: false,
                b: false,
                c: false,
                d: true,
              })
            }
          >
            <div className=" d-flex boxes4"></div>
            <p className={cross(itemClicked.d)}>{typeLocal[3]}</p>
          </div>

          <div className="boxes" onClick={(e) => reload()}>
            <div className=" d-flex boxes5"></div>
            <p
              className={
                Object.keys(itemClicked).length === 0
                  ? "h6 pt-2 px-2"
                  : "h6 pt-2 px-2 crossed"
              }
            >
              {typeLocal[4]}
            </p>
          </div>
        </div>
      </div>

      <div className="pb-3 pt-3 mx-3">
        <select
          className="sel"
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="m" onSelect={reload}>
            {!language ? "თვე" : "Month"}
          </option>
          {months.map((item, index) => (
            <option key={index} value={index + 1}>{item}</option>
          ))}
        </select>
      </div>

      <Table
        types={types}
        renderer={renderer}
        name={namesArray}
        selectedMonth={selectedMonth}
      />
    </div>
  );
}

export default LandingPage;
