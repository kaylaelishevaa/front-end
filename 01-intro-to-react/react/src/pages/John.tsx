import BioCard from "../components/BioCard";

export default function John() {
  const name = "John Smith";
  const bio = "YOLO! You Only Live Once!";
  const image =
    "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww";
  return (
    <>
      <BioCard
        name={name}
        location="London, United Kingdom"
        bio={bio}
        image={image}
        cardBg="#54473F"
        linkBg="#9A7E6F"
      />
    </>
  );
}
