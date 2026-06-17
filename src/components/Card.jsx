function Card({ title, items }) {
  return (
    <div className="card">
      <h2>{title}</h2>

      <div className="grid">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <img
              src={`https://picsum.photos/200/200?random=${index + 1}`}
              alt={item}
            />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;