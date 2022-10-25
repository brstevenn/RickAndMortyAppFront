import React from "react";
import { useDispatch, useSelector } from 'react-redux';
// Importar las actions como Object Modules, sino los test no funcionarán!
import * as actions from '../../../redux/actions/index';
// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.
// TIP: Aqui seria un buen momento para utilizar el hook useSelector.

const CharacterDetail = (props) => {

  const dispatch = useDispatch()
  const id = props.match.params.id;
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