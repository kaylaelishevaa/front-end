import "./BioCard.css";

interface Prop {
  name: string;
  location: string;
  bio: string;
  photoPic: string;
  cardB?: string;
  linkBg?: string;
}

export default function BioCard(prop: Prop) {
  return (
    <div className="card" style={{ backgroundColor: prop.cardBg }}>
      <div className="profile">
        <div className="image-container">
          <img src={prop.image} alt="Photo Profile" />
        </div>
        <p className="name">{prop.name}</p>
        <p className="location">{prop.location}</p>
        <p className="bio">{prop.bio}</p>
      </div>
      <div className="links">
        <a style={{ backgroundColor: prop.linkBg }} href="https://github.com">
          Github
        </a>
        <a
          style={{ backgroundColor: prop.linkBg }}
          href="https://frontendmentor.com"
        >
          Frontend Mentor
        </a>
        <a style={{ backgroundColor: prop.linkBg }} href="https://linkedin.com">
          LinkedIn
        </a>
        <a style={{ backgroundColor: prop.linkBg }} href="https;//x.com">
          Twitter
        </a>
        <a
          style={{ backgroundColor: prop.linkBg }}
          href="https://instagram.com"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}
