import "./header.css";

interface Props {
  titulo: string;
  informativo: string;
}

const Header = ({ titulo, informativo }: Props) => {
  return (
    <header>
      <h1>{titulo}</h1>
      <p>{informativo}</p>
      <br />
    </header>
  );
};

export default Header;
