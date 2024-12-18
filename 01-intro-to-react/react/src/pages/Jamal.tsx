import BioCard from "../components/BioCard";

export default function Jamal() {
  const name = "Jamal Sueb";
  const bio = "Work smart, not harder!";
  const image =
    "https://plus.unsplash.com/premium_photo-1693258698597-1b2b1bf943cc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <BioCard
        name={name}
        location="Jakarta, Indonesia"
        bio={bio}
        image={image}
        cardBg="#626F47"
        linkBg="#798645"
      />
    </>
  );
}
