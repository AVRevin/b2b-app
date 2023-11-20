import React from "react";
import Dashboard from './containers/Dashboard'
import "./styles/styles.css"


const database = [
  {
    id:164,
    userName:"Alex",
    nameOfPlan:"Бесплатный доступ",
    status:true,
    description:"Бесплатный план, чтобы попробовать «Наименование программы»",
    price:0,
    helper:"",
    teamQuantity:"",
    functional:"Ограниченный доступ"
  },
  {
    id:134,
    userName:"Alex",
    nameOfPlan:"Лицензия на пользователя",
    status:false,
    description:"Самый популярный план",
    price:1350,
    helper:"выгодно",
    teamQuantity:"",
    functional:"Полный доступ"
  },
];

const App = () => {
  const tariffList = database;
  return (
    <div>
      <Dashboard tariffList={tariffList}/>
    </div>
  )
}


export default App 