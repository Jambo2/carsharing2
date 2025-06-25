import { CarCard } from "../components/CarCard";
import { MOVIES } from "../movies.data";
import { Header } from '../components/Header';

export function Home() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <div className="flex flex-wrap gap-4 justify-center">
        {MOVIES.map((movie) => (
          <CarCard
            key={movie.id}
            image={movie.image}
            status={movie.status}
            name={movie.name}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
}