import Link from "next/link";

interface MenuProps {
  op1?: string;
  op2?: string;
  op3?: string;
  op4?: string;
}

export const Menu: React.FC<MenuProps> = ({ op1, op2, op3, op4 }) => {
  return (
    <header>
      <nav className="text-large bg-[black] text-[white] font-robFont font-normal gap-10 h-[100px] flex items-center justify-center">
        <Link className="font-black scale-120 transition duration-300 ease-in-out hover:scale-140" href={"/"}>{op1}</Link>
        <Link className="font-black scale-120 transition duration-300 ease-in-out hover:scale-140" href={"/hookPage"}>{op2}</Link>
        <Link className="font-black scale-120 transition duration-300 ease-in-out hover:scale-140" href={"/axiosPage"}>{op3}</Link>
         <Link className="font-black scale-120 transition duration-300 ease-in-out hover:scale-140" href={"/serverSidePage"}>
          {op4}
        </Link>
       
      </nav>
    </header>
  );
};