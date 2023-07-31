import "./styles.css";

function Drink({ name }) {
  let part, caffeine, age;
  if (part === "tea") {
    part = "leaf";
    caffeine = "15-70mg/cup";
    age = "4,000+ years";
  } else if (name === "coffee") {
    part = "bean";
    caffeine = "80-185 mg/cup";
    age = "1,000+ years";
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}
export default function drinkList() {
  return (
    <section>
      <h1>View Our Drinks</h1>
      <div>
        <Drink name="coffee" />
        <Drink name="tea" />
      </div>
    </section>
  );
}
