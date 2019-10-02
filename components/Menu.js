import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Menu() {
  const router = useRouter();
  const menu = [
    {title:'Home', href:'/'},
    {title:'Shop', href:'/shop'},
    {title:'Cart', href:'/cart'},
    {title:'Checkout', href:'/checkout'},
];

let menuItems = [];
for (const item of menu){
    menuItems.push(
        <li 
        key={item.href} 
        className={item.href === router.pathname ? 'active' : ''}
        >
            <Link href={item.href} as={item.href}>
                <a>{item.title}</a>
            </Link>
        </li>
    )
}

  return (
    <ul>
        {menuItems}
    </ul>   
  );
}
