import React from 'react'
import { Link } from 'gatsby'
import { useCategoriesList } from '../../../hooks'

const Categories = () => {
  const categories = useCategoriesList()
  return (
    <nav className="sidebar-navigation mt-20" aria-labelledby="categories">
      <h2 id="categories" className="uppercase text-gray-300 text-2xl">
        Categories
      </h2>
      <ul className="list-none pl-0">
        {categories.map(category => (
          <li className="mb-3" key={category.fieldValue}>
            <Link
              to={`/category/${category.fieldValue}`}
              className="align-bottom"
              activeClassName="current-page"
            >
              <span
                className={`bg-${category.categoryColor} rounded-full w-4 h-4 inline-block mr-2`}
              />
              {category.fieldValue}
              <span className="text-lg inline-block ml-2 text-gray-300 font-light">
                {category.totalCount}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Categories
