import { useState, useEffect } from "react";
import logo from "../assets/logo/headerLogo.svg";
import logoEng from "../assets/logo/logo_eng.0119b3ae.svg";
import * as icons from "../assets/headerIcons/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/index";
import { FacebookShareButton } from "react-share";

function Header(props) {
  const [languageChange, SetLanguageChange] = useState(false);

  let navigate = useNavigate();
  let params = useParams();

  // dons't refresh
  useEffect(() => {
    if (params.lang) {
      window.sessionStorage.setItem(
        "languageChange",
        params.lang === "en" ? true : false
      );
      SetLanguageChange(
        JSON.parse(window.sessionStorage.getItem("languageChange"))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let curUrl = window.location.href

  useEffect(() => {
    window.sessionStorage.setItem("languageChange", languageChange);
  }, [languageChange]);

  function LanguageChangeRender(e = null) {
    let currentLang = params.lang === "en" ? "ka" : "en";
    SetLanguageChange(!languageChange);
    if (!curUrl.includes("census")) {
      return navigate(`/${currentLang}`, { replace: true });
    } else {
      return navigate(`/${currentLang}/census`, { replace: true });
    }
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(counterActions.SetLanguageChange(languageChange));
    // eslint-disable-next-line
  }, [languageChange, dispatch]);
  return (
    <div>

      <title>
        {!languageChange
          ? "საქსტატის გამოკვლევების საველე სამუშაოების კალენდარი"
          : "Calendar of Fieldworks of Geostat Surveys"}
      </title>

      {
        props.showHeader ?
          <p className="fs-3 mt-4 text-center" style={{ color: "rgb(115,87,115)" }}>
            {!languageChange
              ? "საქსტატის გამოკვლევების საველე სამუშაოების კალენდარი"
              : "Calendar of Fieldworks of Geostat Surveys"}
          </p> :
          <p className="fs-3 mt-4 text-center" style={{ color: "rgb(115,87,115)" }}>
            {!languageChange
              ? "მოსახლეობის 2024 საყოველთაო აღწერა"
              : "Population Census 2024"}
          </p>

      }

      <div className="logo">
        <img src={!languageChange ? logo : logoEng} alt="" />
      </div>
      <div className="iconsDiv">
        <FacebookShareButton url={curUrl}>
          <i
            className="header_icons"
            alt="..."
            style={{
              border: "none",
              backgroundImage: `url(${icons.fb})`,
            }}
          />
        </FacebookShareButton>

        <a
          href="https://twitter.com/Geostat100"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="header_icons"
            alt="..."
            style={{
              border: "none",
              backgroundImage: `url(${icons.twitter})`,
            }}
          />
        </a>

        <a
          href="https://www.linkedin.com/company/national-statistics-office-of-georgia/mycompany"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="header_icons "
            alt="..."
            style={{
              border: "none",
              backgroundImage: `url(${icons.linkedIn})`,
            }}
          />
        </a>
        <i
          className="header_icons"
          alt="..."
          style={{
            border: "none",
            backgroundImage: `url(${icons.translate})`,
          }}
          onClick={LanguageChangeRender}
        />
      </div>
    </div>
  );
}
export default Header;
