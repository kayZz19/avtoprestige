function InfoModal({ teacher, onClose, closeIcon }) {
  if (!teacher) return null;

  return (
    <div className="modal active">
      <div className="modal__overlay" onClick={onClose} />

      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          <img src={closeIcon} alt="Закрыть" className="icon-modal" />
        </button>

        <div className="modal__body">
          {teacher.modalContent.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
