import "../styles/documents.css";

function CertificatePage() {
  return (
    <main className="main">
      <h1 className="table-title">
        Как получить водительское удостоверение после успешной сдачи экзамена
      </h1>
      <section className="info-section">
        <h2 className="documentsTitle">Куда обращаться</h2>
        <p>
          📍 ГИБДД Вашего района: Нижегородская область, г. Павлово, ул.
          Восточная, д. 6
        </p>
        <p>P.S. Рекомендуем приезжать с утра или в первой половине дня.</p>
      </section>

      <section className="info-section">
        <h2 className="documentsTitle">Предварительная запись</h2>
        <p>
          Обязательно через портал Госуслуги → раздел «Получение водительского
          удостоверения».
        </p>
      </section>

      <section className="info-section">
        <h2 className="documentsTitle">Что необходимо иметь при себе</h2>

        <ul>
          <li>ⓘ Паспорт</li>
          <li>
            ⓘ Полный комплект документов из автошколы (свидетельство об
            окончании)
          </li>
        </ul>
      </section>
    </main>
  );
}

export default CertificatePage;
