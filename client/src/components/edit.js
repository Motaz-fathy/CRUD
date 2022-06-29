import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./edit.css";
import { CreatecountryAction, UpdateCountryAction } from "../redux/actions/countriesAction";
export const Edit = ({Singlecountry}) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [domains, setDomains] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [link, setLink] = useState("");
  const resetHandler = () => {
    setDomains("");
    setCountry("");
    setName("");
    setCode("");
    setLink("");
  };
  const handelcreate = () => {
    dispatch(CreatecountryAction({domains, country, name, code, link}));
    if (!domains || !country || !name || !code || !link) return;
    resetHandler();
    nav("/");
  };
  const handleUpdate = () => {
    dispatch(UpdateCountryAction(Singlecountry._id,{domains, country, name, code, link}))
    nav(0)
  }
  return (
    <div>
      <form >
        <input
          type={"text"}
          placeholder="domain"
          onChange={e => setDomains(e.target.value)}
        />
        <input
          type={"text"}
          placeholder="country"
          onChange={e => setCountry(e.target.value)}

        />
        <input
          type={"text"}
          placeholder="name"
          onChange={e => setName(e.target.value)}

        />
        <input
          type={"text"}
          placeholder="code"
          onChange={e => setCode(e.target.value)}

        />
        <input
          type={"text"}
          placeholder="web_page"
          onChange={e => setLink(e.target.value)}

        />

        <input type={"submit"} value="Add" onClick={handelcreate}/>
        <input type={"submit"} value="Update" onClick={handleUpdate} />
      </form>
    </div>
  );
};
