import "./Info.css";
import styles from "./Info.module.css";

console.log(styles);

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info component!</h1>
      <h2>H2 from Info component with mudule styles</h2>
      <button className="my-btn">Click me</button>
    </div>
  );
}

export default Info;

// не рекомендується користуватися стилями через глобальні атрибути(h1, h2, p..), натомість варто користуватися класовими стилями, наприклад .my-class
