import LandingPage from "../LandingPage";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function CalendarData() {
  const language = useSelector((state) => state.currentLanguage);
  var namesArray = [];
  if (!language) {
    namesArray = [
      "მონაცემები სამომხმარებლო ფასებისა და ტარიფების შესახებ",
      "ადგილობრივი ბაზრისთვის განკუთვნილი პროდუქციის მწარმოებელთა ფასების სტატისტიკური გამოკვლევა",
      "საექსპორტო პროდუქციის ფასების სტატისტიკური გამოკვლევა",
      "იმპორტირებული პროდუქციის ფასების სტატისტიკური გამოკვლევა",
      "მწარმოებელთა ფასების სტატისტიკური გამოკვლევა მშენებლობაში",
      "მწარმოებელთა ფასების სტატისტიკური გამოკვლევა სატვირთო გადაზიდვებზე",
      "მწარმოებელთა ფასების სტატისტიკური გამოკვლევა ტვირთის დასაწყობებისა და შენახვის მომსახურებაზე",
      "მწარმოებელთა ფასების სტატისტიკური გამოკვლევა სატელეკომუნიკაციო მომსახურებაზე",
      "სამშენებლო მასალების და მომსახურებების ფასების გამოკვლევა მშენებლობის ღირებულების ინდექსისთვის",
      "მონაცემები საცხოვრებელი უძრავი ქონების ფასების შესახებ",
      "საქონლისა და მომსახურების ფასების სტატისტიკური გამოკვლევა საერთაშორისო შედარებების პროგრამისთვის",
      "სასოფლო მეურნეობათა გამოკვლევა (საწყისი გამოკითხვა)",
      "სასოფლო მეურნეობათა გამოკვლევა",
      "სასოფლო მეურნეობათა გამოკვლევა (დასკვნითი გამოკითხვა)",
      "აკვაკულტურის მეურნეობების გამოკვლევა",
      "წყალმომმარაგებელი საწარმოების გამოკვლევა",
      "ჩაის ნედლი ფოთლის გადამამუშავებელ საწარმოთა გამოკვლევა",
      "გამოკვლევა ცხვრისა და თხის სულადობის შესახებ (ადმინისტრაციულ ერთეულებში მუნიციპალიტეტის მერის წარმომადგენელთა გამოკითხვა)",
      "გამოკვლევა ბაღჩეულის წარმოების შესახებ (ადმინისტრაციულ ერთეულებში მუნიციპალიტეტის მერის წარმომადგენელთა გამოკითხვა)",
      "საწარმოთა სტატისტიკური გამოკვლევა (კვარტალური)",
      "საწარმოთა სტატისტიკური გამოკვლევა (წლიური)",
      "არაკომერციული ორგანიზაციების გამოკვლევა",
      "არაფინანსური კორპორაციების ფინანსური მაჩვენებლების გამოკვლევა",
      "სამაცივრე მეურნეობების გამოკვლევა (კვარტალური)",
      "ელევატორების გამოკვლევა (კვარტალური)",
      "სასაკლაოების გამოკვლევა (კვარტალური)",
      "სამაცივრე მეურნეობების გამოკვლევა (წლიური)",
      "ელევატორების გამოკვლევა (წლიური)",
      "სასაკლაოების გამოკვლევა (წლიური)",
      "საწარმოებში საინფორმაციო-საკომუნიკაციო ტექნოლოგიების გამოყენების გამოკვლევა",
      "საწარმოთა ინოვაციური აქტივობის გამოკვლევა",
      "ლომბარდების სტატისტიკური გამოკვლევა (3 წელიწადში ერთხელ)",
      "ვალუტის გადამცვლელი პუნქტების სტატისტიკური გამოკვლევა (3 წელიწადში ერთხელ)",
      "საფინანსო საქმიანობით დაკავებული საწარმოების გამოკვლევა",
      "საფოსტო და საკურიერო საქმიანობის საწარმოთა გამოკვლევა",
      "ბაზრებისა და ბაზრობების ორგანიზებით დაკავებული ეკონომიკური სუბიექტების გამოკვლევა",
      "ენერგორესურსების მოხმარების გამოკვლევა",
      "სასტუმროებისა და სასტუმროს ტიპის დაწესებულებების გამოკვლევა",
      "უცხოელ ვიზიტორთა სტატისტიკური გამოკვლევა",
      "გამყვანი ტურიზმის სტატისტიკური გამოკვლევა",
      "ადგილობრივი ტურიზმის სტატისტიკური გამოკვლევა",
      "მონაცემები შრომის შესახებ",
      "მონაცემები შრომის შესახებ",
      "უმაღლესი საგანმანათლებლო დაწესებულებების სტატისტიკური გამოკვლევა",
      "დოქტორანტურის სტატისტიკური გამოკვლევა",
      "მუზეუმების სტატისტიკური გამოკვლევა",
      "თეატრების სტატისტიკური გამოკვლევა",
      "სამუშაო ძალის გამოკვლევა",
      "შინამეურნეობების შემოსავლებისა და ხარჯების გამოკვლევა",
      "საინფორმაციო და საკომუნიკაციო ტექნოლოგიების გამოყენების გამოკვლევა შინამეურნეობებში",
      "საგარეო ეკონომიკური საქმიანობის სტატისტიკური გამოკვლევა",
      "საგარეო ეკონომიკური საქმიანობის სტატისტიკური გამოკვლევა",
      "მომსახურებით საერთაშორისო ვაჭრობის სტატისტიკური გამოკვლევა",
      "მომსახურებით საერთაშორისო ვაჭრობის სტატისტიკური გამოკვლევა",
      "ბაზრებსა და ბაზრობებზე მოვაჭრე ეკონომიკური სუბიექტების გამოკვლევა (5 წელიწადში ერთხელ)",
    ];
  } else {
    namesArray = [
      "Data on Consumer Prices and Tariffs",
      "Statistical Survey of Producer Prices for Industrial Products Produced for Domestic Market",
      "Statistical Survey of Prices for Export Products",
      "Statistical Survey of prices for Imported Products",
      "Statistical Survey of Producer Prices in Construction",
      "Statistical Survey of Producer Prices for Freight Transport Services ",
      "Statistical Survey of Producer Prices for Warehouse and Storage Services",
      "Statistical Survey of the Calculation of Producer Price Index on Telecommunication Services",
      "Statistical Survey of Prices for Construction Materials and Services for the Construction Cost Index",
      "Data on Prices for Residential Property",
      "Statistical Survey of Prices for Goods and Services for the International Comparison Program",
      "Survey of Agricultural Holdings (Questionnaire for the Inception Interview)",
      "Survey of Agricultural Holdings (Questionnaire for the Quarterly Interview)",
      "Survey of Agricultural Holdings (Questionnaire for the Final Interview)",
      "Survey of Aquaculture Holdings",
      "Survey of Water Supply Enterprises",
      "Survey of Tea Leaf Processing Enterprises",
      "Survey of Sheep and Goats Inventory (Interviews of the Mayor’s representatives in administrative units)",
      "Survey of Melons Production (Interviews of the Mayor’s representatives in administrative units)",
      "Statistical Survey of Enterprises (Quarterly)",
      "Statistical Survey of Enterprises (Quarterly)",
      "Statistical Survey of Enterprises (Annual)",
      "Statistical Survey of Non-commercial Organizations",
      "Statistical Survey of Financial Indicators of Non-financial Corporations",
      "Statistical Survey of Cold Storage Facilities (Quarterly)",
      "Statistical Survey of Elevators (Quarterly)",
      "Statistical Survey of Slaughterhouses (Quarterly)",
      "Statistical Survey of Cold Storage Facilities (Annual)",
      "Statistical Survey of Elevators (Annual)",
      "Statistical Survey of Slaughterhouses (Annual)",
      "Statistical Survey on ICT Usage in Enterprises",
      "Statistical Survey of Innovation Activities of Enterprises",
      "Statistical Survey of Pawnshops (once every three years)",
      "Statistical Survey of Currency Exchange Bureaus (once every three years)",
      "Statistical Survey of Enterprises Engaged in Financial Activities",
      "Statistical Survey of Postal and Courier Activities of Enterprises",
      "Statistical Survey of Economic Entities Engaged in Organizing Markets",
      "Statistical Survey of Energy Consumption",
      "Statistical Survey of Hotels and Hotel Type Enterprises",
      "Inbound Tourism Survey",
      "Outbound Tourism Survey",
      "Data on Labour (Annual)",
      "Labour Cost - supplementary module of annual survey Data on Labour (once every four years)",
      "Number of employees and average monthly earnings by occupation - - supplementary module of annual survey Data on Labour (once every four years)",
      "Data on Labour (Quarterly)",
      "Statistical Survey of Higher Educational Institutions",
      "Statistical Survey of Doctorate",
      "Statistical Survey of Museums",
      "Statistical Survey of Theatres",
      "Labour Force Survey",
      "Households Incomes and Expenditures Survey",
      "Survey on Information and Communication Technologies Usage in Households",
      "Statistical Survey of External Economic Activities (Quarterly)",
      "Statistical Survey of External Economic Activities (Annual)",
      "Statistical Survey of International Trade in Services (Quarterly)",
      "Statistical Survey of International Trade in Services (Annual)",
      "Statistical Survey of Activities of Economic Entities Trading in Markets and Market Places (once every five years)",
    ];
  }

  let types = ["ყოველთვიური", "კვარტალური", "წლიური", "ერთდროული"];
  const [renderer, SetRenderer] = useState([]);

  useEffect(() => {
    SetRenderer([
      {
        id: 1,
        showItem: true,
        title: namesArray[0],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: "a",
                type: types[0],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: "a",
                type: types[0],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: "a",
                type: types[0],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: "a",
                type: types[0],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: "a",
                type: types[0],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: "a",
                type: types[0],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: "a",
                type: types[0],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: "a",
                type: types[0],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: "a",
                type: types[0],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: "a",
                type: types[0],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: "a",
                type: types[0],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: "a",
                type: types[0],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        showItem: true,
        title: namesArray[1],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 3,
        showItem: true,
        title: namesArray[2],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 4,
        showItem: true,
        title: namesArray[3],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 5,
        showItem: true,
        title: namesArray[4],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 6,
        showItem: true,
        title: namesArray[5],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 7,
        showItem: true,
        title: namesArray[6],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 8,
        showItem: true,
        title: namesArray[7],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: "a",
                type: types[0],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: "a",
                type: types[0],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 9,
        showItem: true,
        title: namesArray[8],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 10,
        showItem: true,
        title: namesArray[9],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 11,
        showItem: true,
        title: namesArray[10],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: "d",
                type: types[3],
              },
              {
                id: 2,
                name: "d",
                type: types[3],
              },
              {
                id: 3,
                name: "d",
                type: types[3],
              },
              {
                id: 4,
                name: "d",
                type: types[3],
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: "d",
                type: types[3],
              },
              {
                id: 2,
                name: "d",
                type: types[3],
              },
              {
                id: 3,
                name: "d",
                type: types[3],
              },
              {
                id: 4,
                name: "d",
                type: types[3],
              },
            ],
          },
        ],
      },
      {
        id: 12,
        showItem: true,
        title: namesArray[11],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 13,
        showItem: true,
        title: namesArray[12],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 14,
        showItem: true,
        title: namesArray[13],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 15,
        showItem: true,
        title: namesArray[14],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 16,
        showItem: true,
        title: namesArray[15],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 17,
        showItem: true,
        title: namesArray[16],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 18,
        showItem: true,
        title: namesArray[17],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 19,
        showItem: true,
        title: namesArray[18],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 20,
        showItem: true,
        title: namesArray[19],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 21,
        showItem: true,
        title: namesArray[20],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 22,
        showItem: true,
        title: namesArray[21],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 23,
        showItem: true,
        title: namesArray[22],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 24,
        showItem: true,
        title: namesArray[23],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 25,
        showItem: true,
        title: namesArray[24],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 26,
        showItem: true,
        title: namesArray[25],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 27,
        showItem: true,
        title: namesArray[26],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 28,
        showItem: true,
        title: namesArray[27],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 29,
        showItem: true,
        title: namesArray[28],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 30,
        showItem: true,
        title: namesArray[29],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 31,
        showItem: true,
        title: namesArray[30],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 32,
        showItem: true,
        title: namesArray[31],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 33,
        showItem: true,
        title: namesArray[32],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 34,
        showItem: true,
        title: namesArray[33],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 1,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 35,
        showItem: true,
        title: namesArray[34],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 36,
        showItem: true,
        title: namesArray[35],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 37,
        showItem: true,
        title: namesArray[36],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 38,
        showItem: true,
        title: namesArray[37],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 39,
        showItem: true,
        title: namesArray[38],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
        ],
      },
      {
        id: 40,
        showItem: true,
        title: namesArray[39],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
        ],
      },
      {
        id: 41,
        showItem: true,
        title: namesArray[40],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 42,
        showItem: true,
        title: namesArray[41],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 43,
        showItem: true,
        title: namesArray[42],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 44,
        showItem: true,
        title: namesArray[43],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 45,
        showItem: true,
        title: namesArray[44],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 46,
        showItem: true,
        title: namesArray[45],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 47,
        showItem: true,
        title: namesArray[46],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 48,
        showItem: true,
        title: namesArray[47],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
        ],
      },
      {
        id: 49,
        showItem: true,
        title: namesArray[48],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
        ],
      },
      {
        id: 50,
        showItem: true,
        title: namesArray[49],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 51,
        showItem: true,
        title: namesArray[50],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 52,
        showItem: true,
        title: namesArray[51],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 53,
        showItem: true,
        title: namesArray[52],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "b",
                type: types[1],
              },
              {
                id: 2,
                name: "b",
                type: types[1],
              },
              {
                id: 3,
                name: "b",
                type: types[1],
              },
              {
                id: 4,
                name: "b",
                type: types[1],
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 54,
        showItem: true,
        title: namesArray[53],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: "c",
                type: types[2],
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: "c",
                type: types[2],
              },
              {
                id: 2,
                name: "c",
                type: types[2],
              },
              {
                id: 3,
                name: "c",
                type: types[2],
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
      {
        id: 55,
        showItem: true,
        title: namesArray[54],
        months: [
          {
            show: true,
            id: 1,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 2,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 3,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 4,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 5,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 6,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 7,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 8,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: "d",
                type: types[3],
              },
              {
                id: 3,
                name: "d",
                type: types[3],
              },
              {
                id: 4,
                name: "d",
                type: types[3],
              },
            ],
          },
          {
            show: true,
            id: 9,
            weeks: [
              {
                id: 1,
                name: "d",
                type: types[3],
              },
              {
                id: 2,
                name: "d",
                type: types[3],
              },
              {
                id: 3,
                name: "d",
                type: types[3],
              },
              {
                id: 4,
                name: "d",
                type: types[3],
              },
            ],
          },
          {
            show: true,
            id: 10,
            weeks: [
              {
                id: 1,
                name: "d",
                type: types[3],
              },
              {
                id: 2,
                name: "d",
                type: types[3],
              },
              {
                id: 3,
                name: "d",
                type: types[3],
              },
              {
                id: 4,
                name: "d",
                type: types[3],
              },
            ],
          },
          {
            show: true,
            id: 11,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
          {
            show: true,
            id: 12,
            weeks: [
              {
                id: 1,
                name: null,
                type: null,
              },
              {
                id: 2,
                name: null,
                type: null,
              },
              {
                id: 3,
                name: null,
                type: null,
              },
              {
                id: 4,
                name: null,
                type: null,
              },
            ],
          },
        ],
      },
    ]);
    // eslint-disable-next-line
  }, [language]);

  return (
    <LandingPage
      renderer={renderer}
      Setrenderer={SetRenderer}
      types={types}
      namesArray={namesArray}
    />
  );
}
export default CalendarData;
