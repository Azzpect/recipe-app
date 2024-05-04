import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function RecipeCard({id, title, description}) {
  return (
    <Link to={`./${id}`} className='bg-indigo-800 w-[60%] h-[10%] p-5 rounded-3xl'>
      <div>
          <h1 className='text-white text-xl font-bold'>{title}</h1>
          <p className='text-white text-sm font-semibold'>{description}</p>
      </div>
    </Link>
  )
}

RecipeCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    description: PropTypes.string
};