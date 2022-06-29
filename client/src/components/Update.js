import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { UpdateCountryAction } from "../redux/actions/countriesAction";

export const Update = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [domains, setDomains] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [link, setLink] = useState("");
  const handelUpdate = (id) => {
    dispatch(UpdateCountryAction(id, { domains, country, name, code, link }));
    if (!domains || !country || !name || !code || !link) return;
    nav("/");
  };
  return (
    <div>
      <form>
        <form onSubmit={handelUpdate}>
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

          <input type={"submit"} value="Add" />
        </form>
      </form>
    </div>
  );
};
