import BioCard from "../components/BioCard";

export default function Jane() {
  const name = "Mary Jane";
  const bio = "Take care of your looks ;)";
  const image =
    "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <BioCard
        name={name}
        location="Paris, France"
        bio={bio}
        image={image}
        cardBg="#FFB0B0"
        linkBg="#FFD09B"
      />
    </>
  );
}
