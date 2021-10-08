import { Container } from './styles';

interface Props {
  title: string
  icon: string
  text: string
  type?: 'positive' | 'negative' | 'attention'
}

export const Card = ({
  title, icon, text, type,
}: Props) => (
  <Container type={type}>
    <div>
      <h2>{title}</h2>
      <img src={icon} alt={title} />
    </div>

    <span>{text}</span>
  </Container>
);
