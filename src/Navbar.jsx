import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
    <div className="container">
      <Link className="navbar-brand text-white fw-bold fs-1" to={'/'} >STORE </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active text-white fw-bold" aria-current="page" to={'/category'}>CATEGORY</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-bold" to={'/products'}>PRODUCTS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-bold" to={'/create'}>CREATE</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
