import styles from "./Thought.module.css";
function Thought() {
  return (
    <section className={styles.thoughtContainer}>
      <div className={styles.thoughtText}>
        <h2>Thoughtfully made</h2>
        <p>
          Considered materials, considered construction — every piece designed
          to earn its place in your closet.
        </p>
        <a>Learn More {"->"}</a>
      </div>
    </section>
  );
}
export default Thought;
