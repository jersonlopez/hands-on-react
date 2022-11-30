import React, { useEffect, useState } from 'react';

import Support from './components/Support';
import ListCast from './components/listCast';
import Modal from './components/Modals';
import Nav from './components/Nav';

function App() {
  const name = 'StarGazers';

  const [cast, setCast] = useState([]);
  const [memberInfo, setMemberInfo] = useState(null);

  const fetchCast = async () => {
    const response = await fetch('cast.json');
    setCast(await response.json());
  };

  useEffect(() => {
    fetchCast();
  });

  const minIndex = 0;
  const maxIndex = cast.length - 1;

  return (
    <>
      <Nav
        cast={cast}
        onChoice={(info) => {
          setMemberInfo(info);
        }}
      />
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
            <Modal
              member={memberInfo}
              handleClose={() => {
                setMemberInfo(null);
              }}
              handleChange={(index) => {
                index < minIndex
                  ? setMemberInfo(cast[maxIndex])
                  : index > maxIndex
                  ? setMemberInfo(cast[minIndex])
                  : setMemberInfo(cast[index]);
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
