import React from "react";
import { useDispatch, useSelector } from 'react-redux';


const CharacterDetail = (props) => {

  const dispatch = useDispatch()
  const details = useSelector(props => props)

  React.useEffect(() => {
    //dispatch(actions.getMovieDetail(id));
  }, [dispatch])

  return (
    <div>
      <h3>Name: {details.name}</h3>
      <p>Director: {details.director}</p>
      <p>ReleaseYear: {details.releaseYear}</p>
      <p>Director: {details.director}</p>
      <p>Description: {details.description}</p>
    </div>
  );
};

export default CharacterDetail;