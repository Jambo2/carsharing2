import { Link } from 'react-router-dom';

export function Header() {
    return  <header className=" container mb-8 text-center flex justify-between items-center md:flex-row p-4">
      <div className=''>
        <img src="../../public/images/cat.png" alt="логотип"/>
      </div>
      <nav>
        <ul className=' flex space-x-6 text-lg font-medium'>
          <li>
            <Link to="/">Главная</Link>
          </li>
           <li>
            <Link to="#">Автомобили</Link>
          </li>
           <li>
            <Link to="#">О нас</Link>
          </li>
           <li>
            <Link to="#">Профиль</Link>
          </li>
          <li>
            <Link to="/login">Войти</Link>
          </li>
        </ul>
      </nav>
    </header>
}
