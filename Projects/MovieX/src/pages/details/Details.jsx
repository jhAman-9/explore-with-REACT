import { useParams } from 'react-router-dom';
import useFetch  from 'react-router-dom';
import "./style.scss";


const Details = () => {

  const { mediaType, id } = useParams();
  const  {data, loading} = useFetch(`/${mediaType}/${id}`)

  return (
    <div>Details Page</div>
  )
}

export default Details