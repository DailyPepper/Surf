import Image from 'next/image';
import logo from '../../../public/logo.svg';
import Link from 'next/link';
const Header = () => {
    return ( 
        <header className='flex items-center gap-[6rem]'>
            <Image src={logo} alt="Логотип" />
            <div className='flex flex-row'>
                <ul className='flex gap-[5rem]'>
                    <li>
                        <Link href={''}>
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link href={''}>
                            О нас
                        </Link>
                    </li>
                    <li>
                        <Link href={''}>
                            Программа
                        </Link>
                    </li>
                    <li>
                        <Link href={''}>
                            Акции
                        </Link>
                    </li>
                    <li>
                        <Link href={''}>
                            Отзывы
                        </Link>
                    </li>
                    <li>
                        <Link href={'/contacts'}>
                            Контакты
                        </Link>
                    </li>
                </ul>
            </div>
            <p>
                +7 (965) 333-333-33
            </p>
        </header>

     );
}
 
export default Header;