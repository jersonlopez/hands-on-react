import React, { useEffect, useState } from 'react';

import Support from './components/Support';
import ListCast from './components/listCast';
import Modals from './components/Modals';
import Nav from './components/Nav';

function App() {
  const name = 'StarGazers';

  const [cast, setCast] = useState([]);
  const [memberInfo, setMemberInfo] = useState(null);

  const fetchCast = async () => {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  })

  return (
    <>
      <Nav cast={cast} onChoice={info => {setMemberInfo(info)}}/>
      <div className="container">
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <h1>Meet the StarGazers</h1>
          <p>
            Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all
            species. They are known for their enthusiasm for science, for their love of fun, and their
            dedication to education.
          </p>
          <ListCast
            cast={cast}
            onChoice={(info) => {
              setMemberInfo(info);
            }}
          />
          {memberInfo && (
            <Modals
              member={memberInfo}
              handleClose={() => {
                setMemberInfo(null);
              }}
            />
          )}
          {/* <Support /> */}
        </hgroup>
      </div>
    </>
  );
}
export default App;
