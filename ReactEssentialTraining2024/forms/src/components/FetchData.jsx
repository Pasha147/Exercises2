import { useState, useEffect } from "react";

const query = `query{
  allLifts{
     name 
    elevationGain
    status
  }
}
`;

const opts={
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({query})
}

function Lift({ name, elevationGain, status }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        {elevationGain} {status}
      </p>
    </div>
  );
}


function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{location}</p>
      <img src={avatar} alt="avatar" height={150} />
    </div>
  );
}

const FetchData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://snowtooth.moonhighway.com/`, opts)
      .then((response) => response.json())
      .then(data=>{
        // console.log(data);
        
        return setData(data.data)
      })
      // .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`https://api.github.com/users/moonhighway`)
  //     .then((response) => response.json())
  //     // .then(data=>setData(data))
  //     .then(setData)
  //     .then(() => setLoading(false))
  //     .catch(setError);
  // }, []);
  // if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;
  // if (data) return <GithubUser name={data.name} location={data.location} avatar={data.avatar_url}/>;

  if (loading) return <h2>Loading...</h2>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;
  return (
    <div>
      <h2>Fetch with snow...</h2>
      {data.allLifts.map((lift, ind) => (
        <Lift
        key={`Lift_${ind}`}
          name={lift.name}
          elevationGain={lift.elevationGain}
          status={lift.status}
        />
      ))}
    </div>
    // <GithubUser
    //   name={data.name}
    //   location={data.location}
    //   avatar={data.avatar_url}
    // />
  );
};
export default FetchData;
