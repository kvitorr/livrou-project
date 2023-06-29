import { useParams } from 'react-router-dom';

const Announcement = () => {

  const { id } = useParams();

  return (
    <div>Entrastes {id}</div>
  )
}

export default Announcement