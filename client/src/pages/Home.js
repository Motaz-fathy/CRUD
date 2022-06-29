import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Edit } from "../components/edit";
import "./home.css";
import "../components/card.css";
import { GetAll } from "../redux/actions/countriesAction";
import { Loading } from "../components/Loading";
export const Home = () => {
  const GetReducer = useSelector(state => state.GetReducer);
  const { loading, error, countries } = GetReducer;
  console.log(countries)
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(GetAll());
    },
    [dispatch]
  );
  return (
    <div>
      <section className="board">
        <div className="header">
          <div className="logo">CRUD</div>
          <div className="links">motazfathy7@gmail.com</div>
        </div>
        <div className="homecontainer">
          <div className="datashow">
            {loading && <Loading />}
            {error &&
              <div className="error">
                {" "}{error}
              </div>}
              {countries?.map( (item) => (
                 <div className="body_card" key={item._id}>
                 <div className="head">
                   <div className="left">
                     <h5>name : {item.name}</h5>
                   </div>
                   <div />
                   <div className="right">
                     <div className="update">update</div>
                     <div className="delete">delete</div>
                  
                   </div>
                 </div>
                 <div className="body_show">
                   <h5>domains : {item.domains} </h5>
                   <h5>web_page : {item.link}</h5>
                   <h5>name :  {item.name} </h5>
                   <h5>country : {item.country}</h5>
                   <h5>code : {item.code}</h5>
                 </div>
               </div>
   
              ))}
          </div>
          <div className="space" />
          <div className="edit">
            <Edit />
          </div>
        </div>
      </section>
    </div>
  );
};
