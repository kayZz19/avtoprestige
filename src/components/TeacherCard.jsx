function TeacherCard({ image, name, description, experience, onOpen }) {
  return (
    <article className="teacher-card">
      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p>{description}</p>

      <p>{experience}</p>

      <button className="teacher-link" onClick={onOpen}>
        ⓘ Узнать подробнее
      </button>
    </article>
  );
}

export default TeacherCard;
