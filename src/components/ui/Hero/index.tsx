import s from './Hero.module.css';
import Link from 'next/link';
import { Container } from '@components/ui/Container';

export const Hero = ({ headline, description }: HeroProps) => {
  return (
    <div className="bg-black">
      <Container>
        <div className={s.root}>
          <h2 className={s.headline}>{headline}</h2>
          <div className={s.description}>
            <p>{description}</p>
            <Link href="/">
              <a className={s.link}>Read it here</a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export type HeroProps = {
  headline: string;
  description: string;
};
