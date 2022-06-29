import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Edit } from "../components/edit";
import "./home.css";
import "../components/card.css";
import { DeleteCountryAction, GetAll, GetSingleAction } from "../redux/actions/countriesAction";
import { Loading } from "../components/Loading";
import { useNavigate, useParams } from "react-router";
import Search from "../components/Search";
export const Home = () => {
  const {keyword } = useParams()
  const GetReducer = useSelector(state => state.GetReducer);
  const { loading, error, countries } = GetReducer;
 const nav = useNavigate()
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(GetAll(keyword));
    },
    [dispatch ,keyword]
  );
const HandleDelete = (id) => {
  dispatch(DeleteCountryAction(id))
  nav(0)
}
const HandleUpdate = (id) => {
dispatch(GetSingleAction(id))

}
const GetSingleReducer = useSelector(state => state.GetSingleReducer) 
const {Singlecountry} = GetSingleReducer
  return (
    <div>
      <section className="board">
        <div className="header">
          <div className="logo">CRUD</div>
          <div className="links">motazfathy7@gmail.com</div>
        </div>
        <Search />
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
                     <div className="update" onClick={() =>HandleUpdate(item._id)}>update</div>
                     <div className="delete" onClick={() =>HandleDelete(item._id)}>delete</div>
                  
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
   
              ))  }
          </div>
          <div className="space" />
          <div className="edit">
            <Edit Singlecountry={Singlecountry}/>
          </div>
        </div>
      </section>
    </div>
  );
};
