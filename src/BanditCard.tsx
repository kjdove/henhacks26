import type { Bandit } from "./Bandits";
import "./BanditCard.css";

interface BanditCardProps {
  bandit: Bandit;
}

export function BanditCard({ bandit }: BanditCardProps) {
  return (
    <div className="bandit-card">
      <img src={bandit.Photo} alt={bandit.Name} className="bandit-image" />
      <div className="card-content">
        <h2>{bandit.Name}</h2>
        <p className="threat-level">Threat Level: {bandit.threatLevel}/5</p>
        <p className="location"><strong>Location:</strong> {bandit.Location}</p>
        <p className="description">{bandit.Description}</p>
        <span className={`status ${bandit.Status.toLowerCase()}`}>
          {bandit.Status}
        </span>
      </div>
    </div>
  );
}
